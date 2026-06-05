import { useState } from "react"
import ContainerTodo from "./components/ContainerTodo"
import NewTodo from "./components/NewTodo"
import { CreateTodo, getTodos } from "./api/todos";
import { useEffect } from "react";


function App() {

    const [todoText, setTodoText] = useState("");
    const [inputValue, setInputValue] = useState("");

    const[todos,setTodos] = useState([]);
    // Que carguen los elementos al inicio
    useEffect(()=> {
    async function fetchData() {
      const response = await getTodos()
      setTodos(response)
    }
    fetchData()
  },[])



    async function handleAddClick(e) {
      setInputValue("")
      await CreateTodo(todoText)
      const response =await getTodos();
      setTodos(response)


    }

    function handleTextChange(e) {
      setTodoText(e.target.value);
      setInputValue(e.target.value)
      
    }


  return (

    
    <div id="app"> 
      <NewTodo {...{handleAddClick,handleTextChange,inputValue}}/>
      <ContainerTodo todos={todos}/>
    </div>
  )
}

export default App
