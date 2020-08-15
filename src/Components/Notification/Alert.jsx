import React, { Component } from "react";
import "./Alert.css";

class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.show,
            text: props.children
        }
    }

    componentWillReceiveProps({show}) {
        this.setState({...this.state, show})
    }

    render() {
        const SHOW = this.state.show;
        const TEXT = this.state.text;
        return(
            <div className="alert" style={{transform: (SHOW) ? "translateX(0)" : "translateX(200%)"}}>
                {TEXT}
            </div>
        )
    }
}

export default Alert;