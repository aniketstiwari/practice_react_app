import React , { Component } from 'react';
//import React , { useState } from 'react';
//import './App.css';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// import Radium, { StyleRoot } from 'radium'; //inorder to use media query with style
//need to add styleroot
//import styled from 'styled-components';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
//   &:hover {
//     background-color: ${props => props.alt ? 'salmo' : 'lightgreen'};
//     color: black;
//   }
// `;

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
      { id: "a1", name: 'Max', age: 28 },
      { id: "a2", name: 'Manu', age: 29 },
      { id: "a3", name: 'stephanie', age: 30 },
    ],
    otherstate: "some othet value",
    showPersons: false
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

  nameChangeHandler = (event, id) => {
    //console.log("clicked")
    //we shouldn't directly mutate directly the state like below
    // this.state.persons[0].name = "Maximilia";
    
    //setstate will merge old state with the new state. ALso, it will not discard
    // other state
    const personIndex = this.state.persons.findIndex(p => {
      return p.id == id
    })
    const person = {...this.state.persons[personIndex]}
    //alternate approach instead of spread operator
    //const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons})

    // this.setState({
    //   persons: [
    //     { id: "a1", name: 'Max', age: 28 },
    //     { id: "a2", name: event.target.value, age: 29 },
    //     { id: "a3", name: 'stephanie', age: 27 },
    //   ]
    // })
  }

  togglePersonHandler = () => {
    const canshow = this.state.showPersons;
    this.setState({
      showPersons: !canshow
    })
  }

  deletePersonHandler = (personIndex) => {
    //splice approach is not good as it mutates the original array
    //const persons = this.state.persons;
    //Instead we can use spread operator
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: "inherit",
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;
    //let btnClass = [classes.Button];

    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}  
          />
          {/* {this.state.persons.map((person, index) => {
            return <Person key={person.id}
                  name={person.name}
                  age={person.age}
                  click={this.deletePersonHandler.bind(this, index)}
                  changed={(event) => this.nameChangeHandler(event, person.id)}
                />
          })} */}
          {/* <Person 
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
          /> */}
        </div>
      );
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
      //btnClass.push(classes.Red)
    }

    return (
      // <StyleRoot>
        <div className={classes.App}>
          <Cockpit 
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonHandler}
          />
          {/* <h1>HI I am React App</h1>
          <p className={assignedClasses.join(' ')}>This is really working</p> */}
          {/* <StyledButton
            alt={this.state.showPersons}
            onClick={this.togglePersonHandler}>
              Toggle Persons
          </StyledButton> */}
          {/* <button className={btnClass} onClick={this.togglePersonHandler}>
            Toggle Persons
          </button> */}
          {/*one other way of passing arguments
          onClick={() => this.switchNameHandler('maximilian!!')}
          */}
          {persons}
        </div>
      // </StyleRoot>
    )
  }
}

//export default Radium(App);

export default App;