import { IoMdCheckmarkCircle } from 'react-icons/io';
import { useState } from 'react';
import './App.css'

import Header from './Components/Header'
function App() {
  
  const lista = [
    {
    id: 1,
    descripcion: "Hacer Tareas de Programacion",
    estados: false,
}
]
;
const [valor, setValor]= useState("");
const [listTask, setListTask] = useState(lista);
const [estado, setEstado] = useState(false);

 
function handleAddTask(){
  const tarea = {
    id: crypto.randomUUID(),
    descripcion: valor,
    estados: false,
  }
  setListTask([... listTask, tarea])
 
}
function handleToggleTask(index) {
  const newListTask = [...listTask];
  newListTask[index].estados = !newListTask[index].estados;
  setListTask(newListTask);
}


  return (
    <>
      <div>
       
    <Header></Header>
    <input placeholder='add task'   value={valor} onChange={(event) =>{setValor(event.target.value)}}/>
    <button onClick={handleAddTask}>Agregar</button>
     
     {listTask.map ((elemento, index) => {
      return(
        <p key={elemento.id}
        style={elemento.estados ? { textDecoration: 'line-through' } : {}}
        > 
        
        {index} - {elemento.descripcion}{" "}
        <button onClick={() => handleToggleTask(index)}>
        <IoMdCheckmarkCircle /> </button>
        </p>

      );
     })}
      
      </div>
    </>
  )
}

export default App
