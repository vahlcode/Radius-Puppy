import React, {Component} from "react";
import "./Preloader.css";

class Preloader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: props.loaded
        }
    }

    componentWillReceiveProps(props) {
        this.setState({...this.state, loaded: props.loaded});
    }

    render() {
        const LOADED = this.state.loaded;
        return(
            <div className="preloader">
                <div className="loader">
                    <div className="border" style={{display: (LOADED) ? "none" : "inline-block"}}></div>
                </div>
                <div className="pattern"></div>
            </div>
        )
    }
}

export default Preloader;