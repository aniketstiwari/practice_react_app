import React from 'react';
import Person from './Person/Person';

//If you want to omit the return statement then start the open bracket
//next to => arrow
// const persons = (props) => (
//     <h1></h1>
// );

//Also If  you return jsx then you can omit the brackers () too

const persons = (props) => 
  props.persons.map((person, index) => {
    return <Person key={person.id}
          name={person.name}
          age={person.age}
          click={() => props.clicked(index)}
          changed={(event) => props.changed(event, person.id)}
        />
  });

export default persons;