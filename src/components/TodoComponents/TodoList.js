import React from 'react';

import ToDo from './Todo';


const ToDoList = props =>{
 return(
     <div className = 'todo-list'>
     {props.taskData.map(item=>(
          <ToDo 
            item = {item}
            id={item.id}
            toggleItem={props.toggleItem}
                
          />
     ))}
     </div>

 )
}

export default ToDoList;