import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.module.css'

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

    // useEffect(() => {
    //   console.log('[Cockpit.js] useEffect');
    //   //can add http request 
    //   //It does the work of componentDidMount & componentDidUpdate
    //   //inorder to use it only when the persons prop changes
    //   setTimeout(() => {
    //     alert('save data to cloud');
    //   }, 1000);
    // }, [props.persons])

   // inorder to run only for the first time pass blank array. It will run only when
   // the component is rendered and when it is unmounted
    //Similar to componentDidMount
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      // const timer = setTimeout(() => {
      //  // alert('save data to cloud');
      // }, 1000);
      //it runs before the main useEffect function runs but afrer the first render cycle
      // or when it is unmounted

      //The reason why we have place this code here because it runs after
      // the render function
      toggleBtnRef.current.click()
      return () => {
        //clearTimeout(timer);
        console.log("Cockpit.js cleanup work in useEffect")
      }
    }, []);

    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect')
      }
    });

    let assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
      btnClass = classes.Red;
    }
    if(props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if(props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <p className={assignedClasses.join(' ')}>This is really working</p>
          <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
            Toggle Persons
          </button>
        </div>
    );
};
//React will basically memoize the component. It basically store a snapshot of this
//component and only if its input changes, it will re-render it and otherwise if its
//input do not change and some parent component wants to update this cockput component
//React will give back that stored component

export default React.memo(Cockpit);