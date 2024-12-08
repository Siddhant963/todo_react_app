import React, { useEffect, useState } from 'react'
import TodoInput from '../Components/TodoInput'
import TodoList from '../Components/TodoList';
import { getTodos, saveTodos } from '../services/todoservices';
import { use } from 'react';

export default function TodoApp() {
  let [todos , setTodos]  = useState([]);
  const onadd = (todo)=>{ 

    setTodos([...todos , todo]);
    
 
    
  };
  useEffect(()=>{
  //  let  newtodos = getTodos();
  //    setTodos(newtodos);
  let newtodo = getTodos();
  setTodos([...todos , newtodo])
   
  } ,[])

   useEffect(()=>{ 
     saveTodos(todos);
     
   }, [todos])
  return (
    <div>
      <h1>todos app in react js...</h1>
      <TodoInput ontodoadd = {onadd}/>
      <TodoList data ={todos}/>
    </div>
  )
}
