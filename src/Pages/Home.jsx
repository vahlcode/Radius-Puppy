import React, { Component } from "react";
import "./Home.css";
import Button from "../Components/Buttons/Button";
import { withRouter, Link } from "react-router-dom";
import GitHubButton from 'react-github-btn'

class Home extends Component{
    render() {
        return(
            <section className="hero">
                <h1>Easily Create Beautiful and Decorative Elements For Your Applications with Border Radius.</h1>
                <Link to="/app">
                    <Button onClick={this.goToApp}>Get Started</Button>
                </Link>
                <div className="social-media">
                    <span>Made with <span className="icon icon-moonheart"></span> by Valentine Elum</span>
                    <ul>
                        <li>
                            <a href="https://twitter.com/vahlcode">
                                <span className="icon icon-moontwitter"></span>
                            </a>
                        </li>
                        <li>
                            <GitHubButton 
                                href="https://github.com/vahlcode/Radius-puppy" 
                                data-color-scheme="no-preference: light; light: light; dark: dark;" 
                                data-show-count="true" 
                                aria-label="Star vahlcode/Radius-puppy on GitHub">
                                    Star
                            </GitHubButton>
                        </li>
                        <li>
                            <GitHubButton 
                                href="https://github.com/vahlcode" 
                                data-color-scheme="no-preference: light; light: light; dark: dark;" 
                                aria-label="Follow @vahlcode on GitHub">
                                    Follow @vahlcode
                            </GitHubButton>
                        </li>
                        <li>
                            <GitHubButton 
                                href="https://github.com/vahlcode/Radius-puppy/fork" 
                                data-color-scheme="no-preference: light; light: light; dark: dark;" 
                                data-show-count="true" 
                                aria-label="Fork vahlcode/Radius-puppy on GitHub">
                                    Fork
                            </GitHubButton>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default withRouter(Home);