import React from "react";

function FunctionalGreetingWithProps(props) {
    return <h1> Hi, {props.greeting}</h1>
}
 // OR
 // const FunctionalGreetingWithProps (props) => <h1> Hi, {props.greeting}</h1>;
 
export default FunctionalGreetingWithProps;

