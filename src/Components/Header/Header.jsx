import React, { Component } from "react";
import "./Header.css";
import Button from "../Buttons/Button";

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showThemes: false,
            themes: [
                "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
                "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)",
                "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
                "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
                "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)",
                "#1673ff"
            ],
            logo: props.logo
        }
    }

    componentDidMount() {
        const THEMES_PANEL = document.querySelector(".switch-background");
        THEMES_PANEL.addEventListener("click", (e) => {
            this.setState({...this.state, showThemes: !this.state.showThemes})
        })
        const THEMES = document.querySelectorAll(".themes button");

        for (let i = 0; i < THEMES.length; i++) {
            THEMES[i].addEventListener("click", (e) => {
                const color = e.target.dataset.color;
                document.documentElement.style.setProperty("--app-background", color);
            })
        }
    }
    render() {
        const SHOW_THEMES = this.state.showThemes;
        const THEMES = this.state.themes;
        const LOGO = this.state.logo;
        const HEIGHT = window.innerHeight;

        return(
            <header>
                <div className="row">
                    <div className="branding">
                    <img src={LOGO} alt="Logo"/>
                    </div>
                    <div className="cta">
                        <Button role="switch-background" state="icon" ><span className="icon icon-moondroplet"></span></Button>
                        <Button role="get-code" state="icon" ><span className="icon icon-moonterminal"></span></Button>
                    </div>
                </div>
                <div className="themes" style={{transform: (SHOW_THEMES) ? "translateY(0)" : `translateY(-${HEIGHT}px)`}}>
                    {
                        THEMES.map((theme, index) => <button data-color={theme} style={{background: theme}} key={index}></button>)
                    }
                </div>
            </header>
        )
    }
}

export default Header;