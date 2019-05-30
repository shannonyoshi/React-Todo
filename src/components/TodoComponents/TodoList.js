import React from 'react';

import ToDo from './Todo';


const ToDoList = props =>{
 return(
     <div className = 'todo-list'>
     {props.taskData.map(task=>(
          <ToDo name = {task.task} />
     ))}
     </div>

 )
}

export default ToDoList;