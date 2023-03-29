import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, completeTask } from "../../../store/actions";
import style from './index.module.scss'
import { TiTick } from 'react-icons/ti';
import { AiFillDelete } from 'react-icons/ai';
const Todo = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className ={style.box}>
      {task.completed ? (
        <p>
          <del>{task.task}</del>
        </p>
      ) : (
        <p>{task.task}</p>
      )}
     <div className={style.buttonGroup}>
      <AiFillDelete style={{height:'2rem',width:'2rem',color:"#002B5B"}} onClick={() => dispatch(deleteTask(task.id))} />
      {!task.completed ? (
        <TiTick style={{height:'3rem',width:'3rem',color:"#002B5B"}} onClick={() => dispatch(completeTask(task.id))} />
      ) : (
        ""
      )}
     </div>
    </div>
  );
};

export default Todo;
