import React, {Component} from 'react'
import ToDoItem from '../todo-item/ToDoItem'


const ToDoList = ({tasksList, removeTask, completeTask})=> {
    return(
        <ul className="todo-list">
            {tasksList.map(({id,text, isCompleted})=>{
                return(
                    <ToDoItem key={id} id={id} removeTask={removeTask} completeTask={completeTask} text={text} isCompleted={isCompleted}/>
                )
            })}
        </ul>
    )
}
export default ToDoList