import React, {Component} from 'react'

// const ToDoInput = ({onChange, value,onKeyPress})=>{
  
//     return(
//         <div className="todo-input-wrapper">
//             <i className="fas fa-plus"/>
//             <input 
//                 className="todo-input"
//                 placeholder="Click to add task"
//                 onChange={onChange}
//                 value={value}
//                 onKeyPress={onKeyPress}
      
//             />
//         </div>
//     )
// }
class ToDoInput extends Component {
    componentDidMount(){
        this.inputRefs.current.focus()
         
     }
     inputRefs  = React.createRef();
    render(){
        const {onChange, value, onKeyPress} = this.props;
       
       

        return(
            <div className="todo-input-wrapper">
            <i className="fas fa-plus"/>
            <input 
                className="todo-input"
                placeholder="Click to add task"
                onChange={onChange}
                value={value}
                onKeyPress={onKeyPress}
                ref={this.inputRefs}
            />
        </div>
        )
    }
}
export default ToDoInput