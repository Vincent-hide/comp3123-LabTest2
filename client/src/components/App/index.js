import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {View} from "../../pages/View";
import {Create} from "../../pages/Create";
import {Details} from "../../pages/Details";
import {Edit} from "../../pages/Edit";
import {Delete} from "../../pages/Delete";
import {Nav} from "../Navbar"


import { CssBaseline } from '@material-ui/core';

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Nav />
      <Switch>
        <Route exact path="/" component={View} />
        <Route exact path="/add" component={Create} />
        <Route exact path="/details/:id" component={Details} />
        <Route exact path="/edit/:id" component={Edit} />
        <Route exact path="/delete/:id" component={Delete} />
      </Switch>
    </Router>
  );
};

export default App;
