import React, { Component } from "react";
import "./Button.css";

class Button extends Component{
    constructor(props) {
        super(props);
        this.state = {
            role: props.role,
            state: props.state,
            text: props.children,
            radius: props.radius
        }
    }

    render() {
        const role = this.state.role;
        const state = this.state.state;
        const text = this.state.text;
        return(
            <button className={`${role} ${state} button`}>{text}</button>
        )
    }
}

Button.defaultProps = {
    role: "get-code",
    state: "normal",
    text: "Get started",
    radius: true
}

export default Button;