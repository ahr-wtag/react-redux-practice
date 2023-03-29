import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../../store/actions";
import { v1 as uuidv1 } from "uuid";
import Todos from "../Todos";
import style from './index.module.scss'
const TodoModel = () => {
  const refTask = useRef("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      let task = {
        id: uuidv1(),
        task: refTask.current.value,
        completed: false,
      };
      dispatch(addTask(task));
      refTask.current.value = "";
    }
  };

  return (
    <div>
      <form className={style.form}>
        <input
          type="text"
          name="task"
          placeholder="add your task.."
          ref={refTask}
          onKeyDown={onSubmit}
        />
         <p>Press Enter To Add</p>
      </form>
     
      <Todos></Todos>
    </div>
  );
};

export default TodoModel;
