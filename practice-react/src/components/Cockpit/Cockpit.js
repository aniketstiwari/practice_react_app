import React, { useEffect } from 'react';
import classes from './Cockpit.module.css'

const Cockpit = (props) => {
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      //can add http request 
      //It does the work of componentDidMount & componentDidUpdate
      //inorder to use it only when the persons prop changes
      setTimeout(() => {
        alert('save data to cloud');
      }, 1000);
    }, [props.persons])

    //inorder to run only for the first time pass blank array 
    //Similar to componentDidMount
    // useEffect(() => {
    //   console.log('[Cockpit.js] useEffect');
    //   setTimeout(() => {
    //     alert('save data to cloud');
    //   }, 1000);
    // }, [])

    let assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
      btnClass = classes.Red;
    }
    if(props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <p className={assignedClasses.join(' ')}>This is really working</p>
          <button className={btnClass} onClick={props.clicked}>
            Toggle Persons
          </button>
        </div>
    );
};

export default Cockpit;