import React, { useEffect, useRef, useState } from 'react'

export default function TodoInput(props) {  
     const [input , setinput] = useState('');
console.log(props);

     const inputref = useRef();

     useEffect( ()=>{


     } ,[])

    const addtodo = ()=>{ 

  const {value} = inputref.current;
  // console.log(value);
  props.ontodoadd(value);
  
     
    }

  return (
   <>
   <div className="todo-input">
     <input ref={inputref} type="text"  />
     <button onClick={addtodo}>ADD Todo</button>
   </div>
   
   </>
  )
}
