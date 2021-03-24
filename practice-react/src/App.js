import React , { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>HI I am React App</h1>
        <p>This is really working</p>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="29">My Hobbies: Racing</Person>
        <Person name="stephanie" age="30"/>
      </div>
    )
  }
}

export default App;
