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
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Contador: {state.count}</h2>
      
      <div className="mb-4">
        <label className="block text-sm mb-1">
          Valor a sumar:
        </label>
        <input
          type="number"
          className="border border-gray-400 px-2 py-1 w-full"
          value={incrementAmount}
          onChange={(event) => setIncrementAmount(event.target.value)}
        />
      </div>

      <div className="flex gap-2 mb-6">
        <button className="border border-gray-400 px-3 py-1 bg-gray-50 hover:bg-gray-100" ref={incrementBtnRef} onClick={handleIncrement}>+</button>
        <button className="border border-gray-400 px-3 py-1 bg-gray-50 hover:bg-gray-100" onClick={handleDecrement}>-</button>
        <button className="border border-gray-400 px-3 py-1 bg-gray-50 hover:bg-gray-100" onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button className="border border-gray-400 px-3 py-1 bg-gray-50 hover:bg-gray-100" onClick={handleUndo}>Deshacer</button>
      </div>

      <h3 className="font-semibold mb-2">Historial de cambios:</h3>
      <ul className="list-disc pl-5 text-sm text-gray-700">
        {state.history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}
export default CounterGame;
