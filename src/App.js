import React from 'react';

import{data} from './components/TodoComponents/data'
import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';

import'./components/TodoComponents/Todo.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        taskData: data,
        task: '',
        id: '',
        completed: ''
    };
  } 
  componentDidMount(){
    const ToDoItems = JSON.parse(localStorage.getItem('ToDoItems'))
    this.setState({ToDoItems})
  }
  toggleItem = id =>{
    this.setState(prevState =>{
      return{
        taskData:prevState.taskData.map(item=>{
          if(item.id ===id) {
            return {
              ...item,
              completed: !item.completed}
          } else{
          return item;
          }
        })
      }
    })
  }  
  addToDo = (e, itemName) => {
    e.preventDefault();
      const newToDo = {
        task: itemName,
        id: Date.now(),
        completed: false
      };

      window.localStorage.setItem('ToDoItems', JSON.stringify([...this.state.taskData, newToDo]))
        this.setState({
            taskData:[...this.state.taskData, newToDo]
        })
    };
  clearCompleted = e=>{
    e.preventDefault();

    const cleared = prevState=>{prevState.taskData.filter(item=>{
      return item.completed === !true })}

    window.localStorage.setItem('ToDoItems', JSON.stringify([cleared]))

    this.setState(prevState=>{
      return{
        taskData: [cleared]
        // taskData:prevState.taskData.filter(item=>{
        //   return item.completed === !true 
        // })
      }
    })
  }  


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList 
        taskData={this.state.taskData}
        toggleItem={this.toggleItem}
        />
        <ToDoForm 
        addToDo={this.addToDo}
        clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;

