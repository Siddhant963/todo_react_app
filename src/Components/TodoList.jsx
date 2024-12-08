import React, { useId } from 'react'

export default function TodoList(props) {
  console.log(props);
  const id = useId();

  const todos = props.data;

  return (
<>
{
  todos.map(data=>{ 
    return  <li key= {id}>{data}</li>;
    
  })
}

</>
  )
}
