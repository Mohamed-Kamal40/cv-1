import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Resume from "./components/resume";
import Recommendation from "./components/recommendation";
import React from "react";

const AppRouting = ({ person, work, education, skills, recommendations }) => (
  <React.Fragment>
    <Switch>
      <Route path="/recommendations">
        <Recommendation recommendations={recommendations} />
      </Route>
      <Route path="/resume">
        <Resume work={work} education={education} skills={skills} />
      </Route>
      <Route path="/home">
        <Home person={person} />
      </Route>
      <Route exact path="/">
        <Home person={person} />
      </Route>
    </Switch>
  </React.Fragment>
);

export default AppRouting;
