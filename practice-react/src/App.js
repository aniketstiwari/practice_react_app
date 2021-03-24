import React , { Component } from 'react';
import './App.css';
import Person from './Person/Person';

//props are set and pass from outside. State is manage from inside the component

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'stephanie', age: 30 },
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>HI I am React App</h1>
        <p>This is really working</p>
        <button>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}>
            My Hobbies: Racing
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
        />
      </div>
    )
  }
}

export default App;
