import React, { Component } from "react";
import Button from "../Buttons/Button";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import dracula from 'react-syntax-highlighter/dist/esm/styles/prism/dracula';
import "./Code.css"

SyntaxHighlighter.registerLanguage('css', css);

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
    }

    render() {
        const SHOW_CODE = this.state.showCode;
        const {BOTTOM_LEFT, BOTTOM_RIGHT, TOP_RIGHT, TOP_LEFT} = JSON.parse(localStorage.getItem("radius"));

        const code = `.app {\n\tborder-top-left-radius: ${TOP_LEFT};
            \n\tborder-top-right-radius: ${TOP_RIGHT};
            \n\tborder-bottom-right-radius: ${BOTTOM_RIGHT};
            \n\tborder-bottom-left-radius: ${BOTTOM_LEFT};\n}`;

        return(
            <div className="code" style={{transform: (SHOW_CODE) ? "translateY(0)" : "translateY(100%)"}}>
            <SyntaxHighlighter language="css" style={dracula} showLineNumbers={true} showInlineLineNumbers={true}>
                {code}
            </SyntaxHighlighter>
            <Button role="copy-code" state="normal" ><span className="icon icon-mooncopy"></span> Copy Code</Button>
            </div>
        )
    }
}

export default Code;