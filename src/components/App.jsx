import React, { useRef } from "react";
import { CssBaseline } from "@mui/material";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
// import { BrowserRouter as Route, Switch } from "react-router-dom";

import useStyles from "./styles";
import useAlan from "./Alan";

import { Actors, MovieInformation, Movies, NavBar, Profile } from ".";

const App = () => {
  const classes = useStyles();
  const alanBtnContainer = useRef();
  const location = useLocation();

  // const basename = location.pathname.startsWith("/filmagix") ? "/filmagix" : "";
  // console.log("")

  useAlan();

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <NavBar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/movie/:id">
              <MovieInformation />
            </Route>
            <Route exact path="/actors/:id">
              <Actors />
            </Route>
            <Route exact path={["/", "/approved"]}>
              <Movies />
            </Route>
            <Route exact path="/profile/:id">
              <Profile />
            </Route>
          </Switch>
        </main>
        <div ref={alanBtnContainer} />
      </div>
    </Router>
  );
};

export default App;
