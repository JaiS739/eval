import React from "react";
import styles from "./counter.module.css";


const Counter = ({countvalue,setCountvalues}) => {
 
  // sample value to be replaced
  
  // NOTE: do not delete `data-cy` key value pair

  
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={()=>{
        setCountvalues(countvalue+1);
      }}>+</button>
      <span data-cy="task-counter-value">{countvalue}</span>
      <button data-cy="task-counter-decrement-button" onClick={()=>{
        if(countvalue>0){
          setCountvalues(countvalue-1);
        }
      }}>-</button>
    </div>
  );
};

export default Counter;
