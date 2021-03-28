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
            <WrappedComponent />
        </div>
    )
}

export default WithClass;