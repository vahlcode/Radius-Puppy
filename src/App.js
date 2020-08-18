//IMPORTING DEPENDENCIES
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

//IMPORTING STYLES
import './App.css';
import "./Assets/Icons/icon.css";

//IMPORTING COMPONENTS
import APP from "./Pages/App";
import Home from "./Pages/Home";

class App extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/app" component={APP} />
        </Switch>
      </Router>
    )
  }
}

export default App;
