import React from 'react'
import { useSelector } from 'react-redux'
import Todo from '../Todo';
import style from './index.module.scss'
const Todos = () => {
  const todos = useSelector(state =>state.todo);  
  return (
    <div className={todos.length?style.container:""}>
      {todos.length ?todos.map( todo => <Todo key={todo.id} task={todo}></Todo> ):<small>No Task Pending</small>}
    </div>
  )
}

export default Todos