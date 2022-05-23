import React from "react";
import AddTask from "./AddTask/AddTask";
import { useState } from "react";
import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader"
import Task from "./Tasks/Tasks";


// json data:-
import todoTasks from "../data/tasks.json"
import Counter from "./Counter/Counter";

const TaskApp = () => {

  const [task, setTask] = useState("");
  const [todo, setTodo] = useState(todoTasks);
  const [done, setDone] = useState(todo);

  // counter:-
  const [count, setCount] = useState(5);
  const [completeCount, setCompleteCount] = useState(count);

  console.log(todo[0].id);

  const [countvalue, setCountvalues] = useState(0);

 
  // NOTE: do not delete `data-cy` key value pair


// delete function 

let onDelete=(id)=>{
  let new_vlaue = todo.filter(todo=>todo.id!==id);
  setTodo(new_vlaue);
}


  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader todo={todo} count={count} setCount={setCount} completeCount={completeCount}/>
      {/* Add Task */}
      <AddTask task={task} setTask={setTask} todo={todo} setTodo={setTodo} count={count} setCount={setCount} done={done} setDone={setDone}/>
      {/* Tasks */}
      <Task onDelete={onDelete} todo={todo} completeCount={completeCount} setCompleteCount={setCompleteCount} done={done} setDone={setDone}/>
      <Counter  countvalue={countvalue} setCountvalues={setCountvalues} />
    </div>
  );
};

export default TaskApp;
