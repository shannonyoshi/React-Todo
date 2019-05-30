import React from 'react';

import{data} from './components/TodoComponents/data'
import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';

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

  addToDo = (e, item) => {
    e.preventDefault();
      const newToDo = {
        task: item,
        id: Date.now(),
        completed: false
      };
        this.setState({
            taskData:[...this.state.taskData, newToDo]
        })
    };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList taskData={this.state.taskData}/>
        <ToDoForm addToDo={this.addToDo}/>
      </div>
    );
  }
}

export default App;

