import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    persons: []
  }

  fetchPost() {
    axios.get('http://localhost:5000/getAllPost')
      .then((response) => {
        this.setState({ persons: response.data })
      }).catch((error) => {
        console.log(error);
      })
  }

  componentDidMount() {
    this.fetchPost();
  }

  createPost() {
    // postOBj property wiill be field from input field
    let postOBj = {
      auther: "Hassan",
      title: "Drama",
      description: "Helle  world"
    }
    axios.post('http://localhost:5000/create', postOBj, { title: "===============" })
      .then((response) => {
        console.log(response.data);
        this.fetchPost();
      }).catch((error) => {
        console.log(error);
      })

  }



  render() {
    console.log("zzzzzzzzzzzzzzzzzzz ", this.state)
    return (
      <div>
        <ul>
          {this.state.persons.map(person => <li key={person._id}>{person.description}</li>)}
        </ul>
        <button onClick={this.createPost.bind(this)}>Create new post</button>
      </div>
    )
  }
}

export default App;
