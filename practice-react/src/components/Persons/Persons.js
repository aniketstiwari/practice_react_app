import React, { Component } from 'react';
import Person from './Person/Person';

//If you want to omit the return statement then start the open bracket
//next to => arrow
// const persons = (props) => (
//     <h1></h1>
// );

//Also If  you return jsx then you can omit the brackers () too

// const persons = (props) => {
//   console.log('Persons.js rendering');
//   return props.persons.map((person, index) => {
//     return <Person key={person.id}
//           name={person.name}
//           age={person.age}
//           click={() => props.clicked(index)}
//           changed={(event) => props.changed(event, person.id)}
//         />
//   });
// };

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps')
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  render() {
    console.log('Persons.js rendering');
    return this.props.persons.map((person, index) => {
      return <Person key={person.id}
            name={person.name}
            age={person.age}
            click={() => this.props.clicked(index)}
            changed={(event) => this.props.changed(event, person.id)}
          />
    });
  }
}

export default Persons;