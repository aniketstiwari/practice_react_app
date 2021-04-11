import React, { PureComponent } from 'react';
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

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps')
  // }

  //If you want to check for a lot of props whether it is changed then make use
  // of PureComponent
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   //here we are comparing if there is no change in the persons then we shouldn't run
  //   //persons hooks
  //   if(nextProps.persons !== this.props.persons ||
  //     nextProps.clicked !== this.props.clicked || 
  //     nextProps.changed !== this.props.changed){
  //     return true;
  //   }else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  //Let say when you want to do some cleanup work or cleanup some
  // event listener for example in this case 
  // when person component will get remove from the DOM
  //Basically you will have any code that needs to run right before the 
  //the component is removed
  componentWillUnmount() {
    console.log("Persons.js componentWillUnmount");
  }

  render() {
    console.log('Persons.js rendering');
    return this.props.persons.map((person, index) => {
      return <Person key={person.id}
            name={person.name}
            age={person.age}
            click={() => this.props.clicked(index)}
            changed={(event) => this.props.changed(event, person.id)}
            {/** Context was introduced by react and it helps us handle cases like this
            where you need certain data, certain in multiple components and you don't
            want to pass that state accross multiple layyers of components just
            to get it from component A at the top to component D at the very bottom
            the components B, C in between don't really care about it   */}
            isAuth={this.props.isAuthenticated}
          />
    });
  }
}

export default Persons;