import React from 'react';
import { Card } from './components/card';
import { ErrorBoundary } from './components/error';

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

  removeHandler(id, self, evt) {
    let todo = self.state.todos;
    for (let i = 0; i < self.state.todos.length; i++) {
      const item = self.state.todos[i];
      if (item.id === id) {
        todo = todo.slice(0, i).concat(todo.slice(i + 1))
      }
    }
    self.setState({ todos: todo })
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.submitHandler.bind(this)}>
          <label htmlFor="todo">Write what you need.</label>
          <br />
          <input id="todo" value={this.state.text} onChange={this.onChangeHandler.bind(this)} />
          <button>Submit</button>
        </form>
        <TodoRender todos={this.state.todos}
          // _removeBtN={this.removeHandler}
          self={this} />
      </React.Fragment>
    )
  }
}

const TodoRender = ({ todos, self }) => {
  return (
    <ul>
      {todos.map((item, idx) => {
        return <ErrorBoundary key={item.id} >
          <Card colorClass={(idx % 2 === 1) ? "redCard" : "blueCard"} >
            <p style={{ flex: 1 }}>{item.text}</p>
            <button onClick={self.removeHandler.bind(this, item.id, self)}>X</button>
          </Card>
        </ErrorBoundary>
      })}
    </ul>
  )
}


export default Todo;
