import React from 'react';
import Header from "../Components/Header/Header";
import MainSection from "../Components/MainSection/MainSection";
import Sidebar from "../Components/Sidebar/SideBar";
import Code from "../Components/Sidebar/Code";
import Alert from "../Components/Notification/Alert";
import Preloader from "../Components/Preloader/Preloader";
import Logo from "../Assets/Images/logo.svg";
import "../Assets/Icons/icon.css";
import {TimelineLite, Linear} from "gsap";
import { withRouter } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false
    }

    this.tl = new TimelineLite({delay: 0.5});
    this.copyColor = this.copyColor.bind(this);
  }

  componentDidMount() {
    const Main = document.querySelector("main");
    const Sidebar = document.querySelector("aside");
    const Preloader = document.querySelector(".preloader");
    const Loader = document.querySelector(".loader");
    setTimeout(() => {
      this.tl.fromTo(Preloader, 1.2, {xPercent: 0, ease: Linear}, {xPercent: 100, ease: Linear})
        .to(Loader, 1.2, {css: {display: "none"}}, .1)
        .from(Main, 1.2, {x: -window.innerWidth, ease: Linear}, 1)
        .from(Sidebar, 1.2, {x: window.innerWidth, ease: Linear}, 2)
    }, 1500)

    if (!localStorage.getItem("radius")) {
      localStorage.setItem("radius", JSON.stringify({
        TOP_LEFT: "100px",
        TOP_RIGHT: "100px",
        BOTTOM_RIGHT: "100px", 
        BOTTOM_LEFT: "100px"
      }))
    }

    //GETTING THE INPUT SLIDERS
    const TOP_LEFT_RANGE = document.querySelector("#top-left");
    const TOP_RIGHT_RANGE = document.querySelector("#top-right");
    const BOTTOM_LEFT_RANGE = document.querySelector("#bottom-left");
    const BOTTOM_RIGHT_RANGE = document.querySelector("#bottom-right");
    const TOOL_TIP = document.querySelector(".tool-tip")

    //MAKING THE CHANGES TO THE ELEMENT USING EVENT LISTENERS ON THE SLIDES
    TOP_LEFT_RANGE.addEventListener("input", (e) => {
      let size = Math.floor(e.target.value) + "px";
      document.documentElement.style.setProperty("--border-top-left-radius", size);

      const SIZES = JSON.parse(localStorage.getItem("radius"));

      //STORING THE VALUE IN THE LOCAL STORAGE
      const NEW_SIZE = {...SIZES, TOP_LEFT: size}
      localStorage.setItem("radius", JSON.stringify(NEW_SIZE))

      //ADDING THE VALUE TO THE TOOL TIP
      TOOL_TIP.innerHTML = size;
      e.target.addEventListener("mousemove", (event) => {
        TOOL_TIP.setAttribute('style', `top: ${event.pageY - TOOL_TIP.offsetHeight - 20}px; left: ${event.pageX - TOOL_TIP.offsetHeight / 2}px`);
      })
      
    })

    TOP_RIGHT_RANGE.addEventListener("input", (e) => {
      let size = Math.floor(e.target.value) + "px";
      document.documentElement.style.setProperty("--border-top-right-radius", size);
      
      const SIZES = JSON.parse(localStorage.getItem("radius"));

      //STORING THE VALUE IN THE LOCAL STORAGE
      const NEW_SIZE = {...SIZES, TOP_RIGHT: size}
      localStorage.setItem("radius", JSON.stringify(NEW_SIZE))

      //ADDING THE VALUE TO THE TOOL TIP
      TOOL_TIP.innerHTML = size;
      e.target.addEventListener("mousemove", (event) => {
        TOOL_TIP.setAttribute('style', `top: ${event.pageY - TOOL_TIP.offsetHeight - 20}px; left: ${event.pageX - TOOL_TIP.offsetHeight / 2}px`);
      })
    })

    BOTTOM_LEFT_RANGE.addEventListener("input", (e) => {
      let size = Math.floor(e.target.value) + "px";
      document.documentElement.style.setProperty("--border-bottom-left-radius", size);
      
      const SIZES = JSON.parse(localStorage.getItem("radius"));

      //STORING THE VALUE IN THE LOCAL STORAGE
      const NEW_SIZE = {...SIZES, BOTTOM_LEFT: size}
      localStorage.setItem("radius", JSON.stringify(NEW_SIZE))

      //ADDING THE VALUE TO THE TOOL TIP
      TOOL_TIP.innerHTML = size;
      e.target.addEventListener("mousemove", (event) => {
        TOOL_TIP.setAttribute('style', `top: ${event.pageY - TOOL_TIP.offsetHeight - 20}px; left: ${event.pageX - TOOL_TIP.offsetHeight / 2}px`);
      })
    })

    BOTTOM_RIGHT_RANGE.addEventListener("input", (e) => {
      let size = Math.floor(e.target.value) + "px";
      document.documentElement.style.setProperty("--border-bottom-right-radius", size);
      
      const SIZES = JSON.parse(localStorage.getItem("radius"));

      //STORING THE VALUE IN THE LOCAL STORAGE
      const NEW_SIZE = {...SIZES, BOTTOM_RIGHT: size}
      localStorage.setItem("radius", JSON.stringify(NEW_SIZE))

      //ADDING THE VALUE TO THE TOOL TIP
      TOOL_TIP.innerHTML = size;
      e.target.addEventListener("mousemove", (event) => {
        TOOL_TIP.setAttribute('style', `top: ${event.pageY - TOOL_TIP.offsetHeight - 20}px; left: ${event.pageX - TOOL_TIP.offsetHeight / 2}px`);
      })
    })

    const ELEMENT_HEIGHT = document.querySelector("#app-height");
    const ELEMENT_WIDTH = document.querySelector("#app-width");

    ELEMENT_HEIGHT.addEventListener("input", (e) => {
      let size = Math.floor(e.target.value) + "px";
      document.documentElement.style.setProperty("--app-height", size);
      TOOL_TIP.innerHTML = size;
      e.target.addEventListener("mousemove", (event) => {
        TOOL_TIP.setAttribute('style', `top: ${event.pageY - TOOL_TIP.offsetHeight - 20}px; left: ${event.pageX - TOOL_TIP.offsetHeight / 2}px`);
      })
    })
    ELEMENT_WIDTH.addEventListener("input", (e) => {      
      let size = Math.floor(e.target.value) + "px";
      document.documentElement.style.setProperty("--app-width", size);
      TOOL_TIP.innerHTML = size;
      e.target.addEventListener("mousemove", (event) => {
        TOOL_TIP.setAttribute('style', `top: ${event.pageY - TOOL_TIP.offsetHeight - 20}px; left: ${event.pageX - TOOL_TIP.offsetHeight / 2}px`);
      })
    })

    const COPY_CODE = document.querySelector(".copy-code");

    COPY_CODE.addEventListener("click", (e) => {
      const CODE = document.querySelector(".code pre");
      this.copyColor(CODE);
      setTimeout(() => this.setState({...this.state, showAlert: false}), 5000);
      })
  }
  
  copyColor(element){
    if (window.getSelection) {
        if (window.getSelection().empty) { // Chrome
            window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges) { // Firefox
            window.getSelection().removeAllRanges();
        }
    } else if (document.selection) { // IE?
        document.selection.empty();
    }

    let range;
    if (document.selection) {
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select().createTextRange();
        document.execCommand("copy");
        this.setState({...this.state, showAlert: true});
    } else if (window.getSelection) {
        range = document.createRange();
        range.selectNode(element);
        window.getSelection().addRange(range);
        document.execCommand("copy");
        this.setState({...this.state, showAlert: true});
    }
  }

  render() {
    const SHOW_ALERT = this.state.showAlert;
    return (
      <div className="App">
        <div className="tool-tip"></div>
        <Preloader  />
        <Header logo={Logo}/>
        <MainSection />
        <Sidebar />
        <Code />
        <Alert show={SHOW_ALERT}>Copied! ! <span role="img" aria-label="congratulations!">🎉</span></Alert>
      </div>
    )
  }
}

export default withRouter(App);
