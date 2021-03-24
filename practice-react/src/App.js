import React , { Component } from 'react';
//import React , { useState } from 'react';
import './App.css';
import Person from './Person/Person';

//props are set and pass from outside. State is manage from inside the component

// const App = (props) => {
//     const [personState, setPersonsState] = useState({
//       persons: [
//           { name: 'Max', age: 28 },
//           { name: 'Manu', age: 29 },
//           { name: 'stephanie', age: 30 },
//       ],
//       otherstate: "some othet value"
//     })

//     //IN functional compoenents you can have multiple useState
//     const [otherstate, setOtherState] = useState('some other value');

//     console.log(personState, otherstate)

//     const switchNameHandler = () => {
//       //when using react hooks your function setPersonsState doesn't merge
//       // with the old state. Instead it replaces the old state. Inorder to include
//       //old state you need to add it manually
//       setPersonsState({
//         persons: [
//           { name: 'Maximilian', age: 28 },
//           { name: 'Manu', age: 29 },
//           { name: 'stephanie', age: 27 },
//         ],
//         otherstate: personState.otherstate
//       })
//     }

//     return (
//       <div className="App">
//         <h1>HI I am React App</h1>
//         <p>This is really working</p>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person 
//           name={personState.persons[0].name} 
//           age={personState.persons[0].age}
//         />
//         <Person 
//           name={personState.persons[1].name} 
//           age={personState.persons[1].age}>
//             My Hobbies: Racing
//         </Person>
//         <Person 
//           name={personState.persons[2].name} 
//           age={personState.persons[2].age}
//         />
//       </div>
//     )
// }

// export default App;

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'stephanie', age: 30 },
    ],
    otherstate: "some othet value"
  }

  switchNameHandler = (newName) => {
    //console.log("clicked")
    //we shouldn't directly mutate directly the state like below
    // this.state.persons[0].name = "Maximilia";
    
    //setstate will merge old state with the new state. ALso, it will not discard
    // other state
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'stephanie', age: 27 },
      ]
    })
  }

  nameChangeHandler = (event) => {
    //console.log("clicked")
    //we shouldn't directly mutate directly the state like below
    // this.state.persons[0].name = "Maximilia";
    
    //setstate will merge old state with the new state. ALso, it will not discard
    // other state
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'stephanie', age: 27 },
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: "inherit",
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>HI I am React App</h1>
        <p>This is really working</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('maximilian!!')}>
            Switch Name
        </button>
        {/*one other way of passing arguments
        onClick={() => this.switchNameHandler('maximilian!!')}
        */}
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'max')}
          changed={this.nameChangeHandler}>
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
