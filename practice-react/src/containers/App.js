import React , { Component } from 'react';
//import React , { useState } from 'react';
//import './App.css';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

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
  constructor(props) {
    super(props)
    console.log("App.js constructor")
  }

  state = {
    persons: [
      { id: "a1", name: 'Max', age: 28 },
      { id: "a2", name: 'Manu', age: 29 },
      { id: "a3", name: 'stephanie', age: 30 },
    ],
    otherstate: "some othet value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log("App.js getDerivedStateFromProps", props);
    return state;
  }

  // componentWillMount() {
  //   console.log("App.js componentWillMount")
  // }

  componentDidMount() {
    console.log('App.js componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App.js shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('App.js componentDidUpdate');
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

    //setState will not immediately trigger an update of the state of this
    //component in a re-render cycle. Instead it's basically scheduled by React
    // and React will then perform the state update and the re-render cycle
    // when it has the available resources to do that.
    //setState is called synchronously here but it's not guaranteed to execute
    // and finish immediately
    this.setState( (prevState, props) => {
      return { 
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    })

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

  loginHandler = () => {
    this.setState({authenticated: true})
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
    console.log('[App.js] render');

    let persons = null;
    //let btnClass = [classes.Button];

    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
            // isAuthenticated={this.state.authenticated}
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
      <Aux>
       {/* <WithClass classes={classes.App}> */}
          <button onClick={() => {
            this.setState({ showCockpit: false })
          }}>Remove Cockpit</button>
          <AuthContext.Provider 
          //outer curly braces  are there to enter dynamic content
          //inner curcle braces construct javascript object and there I'll have
          // the exact same structure as here in the default context
            value={{
              authenticated: this.state.authenticated,
              login: this.loginHandler
            }}>
            { this.state.showCockpit ? <Cockpit 
              personsLength={this.state.persons.length}
              showPersons={this.state.showPersons}
              clicked={this.togglePersonHandler}
              title={this.props.appTitle}
            /> : null}
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
          </AuthContext.Provider>
        </Aux>
        // </WithClass>
      // </StyleRoot>
    )
  }
}

//export default Radium(App);

export default WithClass(App, classes.App);