import React, { Component } from "react";
import Button from "../Buttons/Button";
import Prism from "prismjs";
import "prismjs/themes/prism.css"
import "./Code.css";

class Code extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCode: false
        }
    }

    componentDidMount() {
        const GET_CODE = document.querySelector(".get-code");

        GET_CODE.addEventListener("click", () => this.setState({...this.state, showCode: !this.state.showCode}));
        Prism.highlightAll();
    }

    render() {
        const SHOW_CODE = this.state.showCode;
        let code;

        if (JSON.parse(localStorage.getItem("radius"))) {
            let {BOTTOM_LEFT, BOTTOM_RIGHT, TOP_RIGHT, TOP_LEFT} = JSON.parse(localStorage.getItem("radius"));
            code = `.app {\n\tborder-top-left-radius: ${TOP_LEFT};
            \n\tborder-top-right-radius: ${TOP_RIGHT};
            \n\tborder-bottom-right-radius: ${BOTTOM_RIGHT};
            \n\tborder-bottom-left-radius: ${BOTTOM_LEFT};\n}`;
        }


        return(
            <div className="code" style={{transform: (SHOW_CODE) ? "translateY(0)" : "translateY(100%)"}}>
                <pre className="line-numbers language-css ">
                    <code className="language-css">
                        {code}
                    </code>
                </pre>
                <Button role="copy-code" state="normal" ><span className="icon icon-mooncopy"></span> Copy Code</Button>
            </div>
        )
    }
}

export default Code;