import React from 'react';

const ToDo = props => {
        return(
            <div className = 'todo-item'>
            <p>{props.name}</p>
            </div>
        )
}

export default ToDo;