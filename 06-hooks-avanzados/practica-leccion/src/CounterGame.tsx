import { useReducer, useRef, useCallback, useEffect, useState } from "react";


type State = {
  count: number;
  history: string[];
  pastCounts: number[];
};

type Action =
  | { type: "increment"; amount: number }
  | { type: "decrement" }
  | { type: "reset" }
  | { type: "undo" }
  | { type: "hydrate"; payload: State };

const initialState: State = { count: 0, history: [], pastCounts: [] };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "increment":
        return {
            pastCounts: [...state.pastCounts, state.count],
      count: state.count + action.amount,
      history: [...state.history, `+${action.amount} (Nuevo valor: ${state.count + action.amount})`],
        };
        case "decrement":
        return {
            pastCounts: [...state.pastCounts, state.count],
            count: state.count - 1,
            history: [...state.history, `-1 (Nuevo valor: ${state.count - 1})`],
        };
        case "reset":
        return {
          count: 0,
          history: [...state.history, `Reset (Nuevo valor: 0)`],
          pastCounts: [...state.pastCounts, state.count],
        };
        case "undo": {
          if (state.pastCounts.length === 0) {
            return state;
          }

          const previousCount = state.pastCounts[state.pastCounts.length - 1];

          return {
            count: previousCount,
            history: state.history.slice(0, -1),
            pastCounts: state.pastCounts.slice(0, -1),
          };
        }
        case "hydrate":
        return action.payload;
        default:
        return state;
    }
}


function CounterGame() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [incrementAmount, setIncrementAmount] = useState("1");
  const [hasLoadedState, setHasLoadedState] = useState(false);
  const incrementBtnRef = useRef<HTMLButtonElement | null>(null);

  const handleIncrement = useCallback(() => {
    const amount = Number(incrementAmount);

    if (Number.isNaN(amount)) {
      return;
    }

    dispatch({ type: "increment", amount });
  }, [incrementAmount]);

  const handleDecrement = useCallback(() => {
    dispatch({ type: "decrement" });
  }, []);

  const handleUndo = useCallback(() => {
    dispatch({ type: "undo" });
  }, []);

  useEffect(() => {
    try {
      const savedState = localStorage.getItem("countergame");

      if (savedState) {
        dispatch({ type: "hydrate", payload: JSON.parse(savedState) as State });
      }
    } catch {
    }

    setHasLoadedState(true);
  }, []);

  useEffect(() => {
    if (!hasLoadedState) {
      return;
    }

    try {
      localStorage.setItem("countergame", JSON.stringify(state));
    } catch {
        
    }
  }, [hasLoadedState, state]);

  useEffect(() => {
    incrementBtnRef.current?.focus();
  }, []);

  return (
    <div>
      <h2>Contador: {state.count}</h2>
      <label>
        Valor a sumar:
        <input
          type="number"
          value={incrementAmount}
          onChange={(event) => setIncrementAmount(event.target.value)}
        />
      </label>
      <button ref={incrementBtnRef} onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={handleUndo}>Deshacer</button>

      <h3>Historial de cambios:</h3>
      <ul>
        {state.history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}
export default CounterGame;
