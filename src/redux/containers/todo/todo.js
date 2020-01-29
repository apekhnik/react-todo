import React, {Component} from 'react'
import ToDoInput from '../../components/todo-input/ToDoInput'
import Footer from '../../components/footer/footer'
import ToDoList from '../../components/todo-list/ToDo-list'
import {connect} from 'react-redux'
import {addTask, completeTask, removeTask, changeFilters} from '../../actions/actionCreators'

 class ToDo extends Component{
    
    state={
        taskText: ''
    }
    
    
   
    
    inputChangeHandler = ({target: {value}}) => {
         this.setState({
            taskText: value
         })
     }
     addTask = ({key}) => {
         const {taskText} = this.state;
         if(taskText.length > 3 && key === 'Enter'){
             const {addTask} = this.props;
             addTask((new Date()).getTime(), taskText, false);
             this.setState({
                 taskText: ''
             })
         }
     }
     
     filterTasks = (tasks, activeFilter) => {
        switch(activeFilter){
            case 'completed':
                return tasks.filter(task => task.isCompleted);
               
            case 'active':
                return tasks.filter(task => !task.isCompleted);
               
            default:
                return tasks;
        }
     }
    
    render(){
        const { taskText} = this.state;
        const {tasks, removeTask, completeTask, filters, changeFilters} = this.props;
        const isTasksExist = tasks && tasks.length > 0
        const filteredTasks = this.filterTasks(tasks, filters)
        
        
        console.log(this.inputRefs);
        const activeTask = tasks.filter(task => !task.isCompleted);
        return(
            <div className="todo-wrapper">
                <ToDoInput onChange={this.inputChangeHandler} onKeyPress={this.addTask} value={taskText}/>
                {isTasksExist && <ToDoList tasksList={filteredTasks} removeTask={removeTask} completeTask={completeTask}/>}
                {isTasksExist && <Footer changeFilters={changeFilters} amount={activeTask.length} activeFilter={filters}/>}
                
            </div>
        )
    }
}
export default connect(({tasks, filters}) => ({
    tasks,
    filters 
}),{addTask, removeTask, completeTask, changeFilters})(ToDo)