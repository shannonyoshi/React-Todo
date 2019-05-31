import React from 'react';

class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: '' };
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitItem = event =>{
        this.props.addToDo(event, this.state.input)
        this.setState({input: ''})
    }



    render() {
        return (
            <div className='form'>
                <form onSubmit={this.submitItem}>
                    <input
                        type='text'
                        name='input'
                        placeholder='Add a task'
                        onChange={this.handleChanges}
                        value={this.state.input}
                    />
                    <button>Add ToDo</button>
                </form >
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>
        )
    }
}


export default ToDoForm;