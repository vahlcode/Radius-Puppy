import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component{
    render() {
        return(
            <aside className="right">
                <div className="radius-slider">
                    <div className="input-group">
                        <h6>Top left</h6>
                        <input type="range" min="0" max="1000" step="0.5" id="top-left"/>
                    </div>
                    <div className="input-group">
                        <h6>Top right</h6>
                        <input type="range" min="0" max="1000" step="0.5" id="top-right"/>
                    </div>
                    <div className="input-group">
                        <h6>Bottom right</h6>
                        <input type="range" min="0" max="1000" step="0.5" id="bottom-right"/>
                    </div>
                    <div className="input-group">
                        <h6>Bottom left</h6>
                        <input type="range" min="0" max="1000" step="0.5" id="bottom-left"/>
                    </div>
                </div>
                <div className="app-size">
                    <span className="info">
                        This attributes are for prototypes only. They are not included in the final generated code.
                    </span>
                    <div className="input-group">
                        <h6>Element height</h6>
                        <input type="range" min="100" max="400" step="0.5" id="app-height"/>
                    </div>
                    <div className="input-group">
                        <h6>Element width</h6>
                        <input type="range" min="100" max="400" step="0.5" id="app-width"/>
                    </div>
                </div>
            </aside>
        )
    }
}

export default Sidebar;