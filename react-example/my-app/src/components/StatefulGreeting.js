import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
        };
    }
    render(){
        return (
            <div>
                <h1>Hello {this.props.greeting} {this.props.name} </h1>
                <button>{this.state.buttonText}</button>
            </div>
        )
        
    }
}

export default StatefulGreeting;