import React from 'react';
import { Card } from './components/card';
// import './App.css'

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [{ text: "something", id: 12345 }, { text: "new todo render", id: 123345 }],
      text: ""
    }
  }

  submitHandler(envt) {
    envt.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newTodo = {
      text: this.state.text,
      id: Date.now()
    }
    this.setState({
      todos: this.state.todos.concat(newTodo),
      text: ""
    })
  }

  onChangeHandler(envt) {
    this.setState({
      text: envt.target.value
    })
  }

  // removeHander() {

  // }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.submitHandler.bind(this)}>
          <label htmlFor="todo">Write what you need.</label>
          <br />
          <input id="todo" value={this.state.text} onChange={this.onChangeHandler.bind(this)} />
          <button>Submit</button>
        </form>
        <TodoRender todos={this.state.todos} />
      </React.Fragment>
    )
  }
}

const TodoRender = ({ todos }) => {
  return (
    <ul>
      {todos.map((item, idx) => {
        {
          return <Card key={item.id} colorClass={(idx % 2 === 1) ? "redCard" : "blueCard"} >{item.text}</Card>
        }
      })}
    </ul>
  )
}


export default Todo;
