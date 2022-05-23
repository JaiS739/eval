import React from "react";
import styles from "./addTask.module.css";



const AddTask = ({task,setTask,todo,setTodo, count, setCount }) => {
  // NOTE: do not delete `data-cy` key value pair
  
  console.log(todo);

  let handleChange=(e)=>{
    setTask(e.target.value);      
  }

  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" value={task} onChange={handleChange}/>
      <button data-cy="add-task-button" onClick={()=>{
       
       if(task!==""){
        setTodo([...todo,{
          id:count+1, text:task, done:true
        }])
        setTask("")
        setCount(count+1);
       }

        

      }}>add task</button>
    </div>
  );
};

export default AddTask;
