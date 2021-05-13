import './App.css';
import React from "react";
import Form from './Form';
import Nav from './Nav';
import Tab from './Tab';
import { Switch, Route, Redirect } from "react-router-dom";

function App() {

return(
  <>
    <Nav />
    <Switch>
        <Route exact path="/" component={ Form } />
        <Route exact path="/Tab" component={ Tab } />
        <Redirect to="/" />
    </Switch> 
  </>
);
}

export default App;