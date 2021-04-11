import React, { Component } from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/Aux';
import WithClass  from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

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

// const person = (props) => {
//   // const style = {
//   //   '@media (min-width: 500px)': {
//   //     width: '450px'
//   //   }
//   // }
//   // const rnd = Math.random();
//   // if (rnd > 0.7) {
//   //   throw new Error("Something went Wrong");
//   // }
//   console.log('Person.js rendering');
//   return (
//     // <div className="Person" style={style}>
//     // <StyleDiv>
//     //   <p onClick={props.click}> Hi I am {props.name} and I am {props.age} years old</p>
//     //   <p>{props.children}</p>
//     //   <input type="text" onChange={props.changed} value={props.name} />
//     // </StyleDiv>
//     <div className={classes.Person}>
//       <p onClick={props.click}> Hi I am {props.name} and I am {props.age} years old</p>
//       <p>{props.children}</p>
//       <input type="text" onChange={props.changed} value={props.name} />
//     </div>
//   )
// }

class Person extends Component {
  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef();
  }

  //static property means it can be accessed from outside without the need to
  //instantiate an object based on this class first
  //Now this allows React to automatically connect this component here this class
  //based component to your context behind the scenes and it gives you a new
  //property in this component, this this context property
  static contextType = AuthContext;

  componentDidMount() {
    //this reason we can call input element here because componentDidMount runs after
    //the render function
    //this.inputElement.focus();

    //2nd way of creating ref
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated)
  }

  render() {
    console.log('Person.js rendering');
    // return (
    //   <div className={classes.Person}>
    //     <p onClick={this.props.click}> Hi I am {this.props.name} and I am {this.props.age} years old</p>
    //     <p>{this.props.children}</p>
    //     <input type="text" onChange={this.props.changed} value={this.props.name} />
    //   </div>
    // )

    //You can also return a array but make sure you add a key to every element
    // return [
    //   <p key="a1" onClick={this.props.click}> Hi I am {this.props.name} and I am {this.props.age} years old</p>,
    //   <p key="a2">{this.props.children}</p>,
    //   <input key="a3" type="text" onChange={this.props.changed} value={this.props.name} />
    // ]

    //Adding a component
    return (  
      <Aux>
        {/**Disadvantage of the below context approach is you cannot
         * use it outside the render function
         */}
        {/* <AuthContext.Consumer> */}
          {/** It will take function as a child. The function will be executed
           * for us by the authcontext.consumer or by the react context API, this 
           * function will get our context object
          */}
          {/* {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please login</p> }
        </AuthContext.Consumer> */}

        {/**2nd approach for context */}
        { this.context.authenticated ? <p>Authenticated!</p> : <p>Please login</p> }

        <p onClick={this.props.click}> Hi I am {this.props.name} and I am {this.props.age} years old</p>
        <p>{this.props.children}</p>
        {/* To select an element we use refs in react The argument is the reference of the element you will placed it on Below we are setting up the focus in a variable */}
        <input
          type="text"
          // ref={(inputEl) => {this.inputElement = inputEl}}
          //2nd way of creating ref
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    )
  }
}

//THis will work in both functional & class base component
//Here you can validate your props
Person.protoTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}; 

//export default Radium(person);
export default WithClass(Person, classes.Person);