import { useState,useEffect } from "react"
import ContainerTodo from "./components/ContainerTodo"
import NewTodo from "./components/NewTodo"
import Todo from "./components/Todo"


function App() {
    const [todos, setTodos] = useState([])
    const[inputValue, setInputValue] = useState();
 
    useEffect(() => {
      
      setTodos(
        [{"id":1,description:"Hacer la compra"},
        {"id":2,description:"Sacar al perro"},
        {"id":3,description:"Lavar el coche"},
        {"id":4,description:"Pagar la luz"},
        ]
      )
    
      
    }, [])

    function handleTextChange(e) {
      setInputValue(e.target.value)
    }
    
    async function handleAddClick(){
      const copia = todos;
       const nuevo = { id: todos.length + 1, description: inputValue };
      setTodos(prev => [...prev, nuevo]);
      setInputValue("");
    }


    function handleUpdate(id, newDescription) {
      const copia = todos;

      copia.find(todo => todo.id == id).description = newDescription

      setTodos(copia);
    }

    function handleDelete(id) {
        const copia = todos
        const filtrado = copia.filter(todo => todo.id != id)
        setTodos(filtrado)
    }

  return (

    
    <div id="app"> 
      <NewTodo {...{handleAddClick,handleTextChange,inputValue}}/>
      <ContainerTodo >
        
            {todos.map((todo) => {
                const id = todo.id;
                const todoText = todo.descripcion || todo.description || "";
                return <Todo key={id} {...{ id, todoText, handleDelete,handleUpdate,setTodoText }} /> 		
            })}
      </ContainerTodo>
    </div>
  )
}

export default App
