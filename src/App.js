import React from "react";
import { Container, Box } from "@material-ui/core";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import { useStyles } from "./assets/styles/app.js";

import CustomForm from "./components/CustomForm";
import LoopForm from "./components/LoopForm";
import StructuredForm from "./components/StructuredForm";

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Container className={classes.container}>
        <Box marginBottom={2} align='center'>
          <NavLink to='/loop-form'>Loop Form</NavLink>
          <br></br>
          <NavLink to='/custom-form'>Custom Form</NavLink>
          <br></br>
          <NavLink to='/structured-form'>Structured Form</NavLink>
        </Box>
        <Switch>
          <Route exact path='/' component={LoopForm} />
          <Route exact path='/loop-form' component={LoopForm} />
          <Route exact path='/custom-form' component={CustomForm} />
          <Route exact path='/structured-form' component={StructuredForm} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
