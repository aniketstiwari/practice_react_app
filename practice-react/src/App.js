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
    ],
    otherstate: "some othet value"
  }

  switchNameHandler = () => {
    //console.log("clicked")
    //we shouldn't directly mutate directly the state like below
    // this.state.persons[0].name = "Maximilia";
    
    //setstate will merge old state with the new state. ALso, it will not discard
    // other state
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'stephanie', age: 27 },
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>HI I am React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
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
