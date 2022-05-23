import React from "react";
import styles from "./tasks.module.css";


const Tasks = ({onDelete, todo, completeCount,setCompleteCount, done ,setDone}) => {
  
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>           
        <ul data-cy="tasks" className={styles.tasks}>
        {todo.map((e)=>(
          
        <div>          
            <li>{e.text}    
            
          </li>
         
          <button onClick={()=>{
            
            if(completeCount>0){
              setCompleteCount(completeCount-1)
            }     
            
           let x = Object.values(e)
            console.log(x[0]);
            onDelete(x[0])
         
            
          }}>mark as completed</button>    

         
        </div>


        ))}
              
      </ul>
        
 
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
