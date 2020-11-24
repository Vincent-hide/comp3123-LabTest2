import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import {Nav} from "../Navbar"

import { CssBaseline } from '@material-ui/core';

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/student" component={Home} />
        <Route exact path="/student/:id" component={Home} />
        <Route exact path="/student/add" component={Home} />
        <Route exact path="/student/edit/:id" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
