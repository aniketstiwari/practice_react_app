import React from 'react';

// const WithClass = props => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// )

//To create HOC another way. Below we will return a function body in which it is
//return functional component
//Note we are not going to return JSX
const WithClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            {/* <WrappedComponent props={props} /> */}

            {/* One more way to pass props using spread operator. THe spread operator
            will pulls out all the properties that are inside of this props objects
            and distributes them as new key-value pairs on this wrapped Component */}
            <WrappedComponent {...props} />
        </div>
    )
}

export default WithClass;