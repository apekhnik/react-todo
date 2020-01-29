import React from 'react'

const ToDoItem = ({id, text, isCompleted, removeTask, completeTask})=>{
    return(
        <li className="todo-item">
            <i className={isCompleted?'mark far fa-check-circle': 'mark far fa-circle'} onClick={()=>completeTask(id)}/>
             <span className={isCompleted?'completed text':'text'}>{text}</span>
            <i className="fas fa-times" onClick={()=>removeTask(id)}/>
        </li>
    )
}
export default ToDoItem