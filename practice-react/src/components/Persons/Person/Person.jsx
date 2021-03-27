import React from 'react';
import classes from './Person.module.css';
// import Radium from 'radium';
//import styled from 'styled-components';

//styled.div will return a component
// const StyleDiv = styled.div`
//   width: 60%;
//   margin: 16px auto;
//   border: 1px solid #eee;
//   box-shadow: 0 2px 3px #ccc;
//   padding: 16px;
//   text-align: center;
//   @media (min-width: 500px) {
//     width: 450px;
//   }
// `;

const person = (props) => {
  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '450px'
  //   }
  // }
  // const rnd = Math.random();
  // if (rnd > 0.7) {
  //   throw new Error("Something went Wrong");
  // }
  console.log('Person.js rendering');
  return (
    // <div className="Person" style={style}>
    // <StyleDiv>
    //   <p onClick={props.click}> Hi I am {props.name} and I am {props.age} years old</p>
    //   <p>{props.children}</p>
    //   <input type="text" onChange={props.changed} value={props.name} />
    // </StyleDiv>
    <div className={classes.Person}>
      <p onClick={props.click}> Hi I am {props.name} and I am {props.age} years old</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
}

//export default Radium(person);
export default person;