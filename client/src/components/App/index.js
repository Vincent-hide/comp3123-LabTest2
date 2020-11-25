import { BrowserRouter, Switch, Route } from "react-router-dom";
import {View} from "../../pages/View";
import {Create} from "../../pages/Create";
import {Nav} from "../Navbar"

import { CssBaseline } from '@material-ui/core';

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Nav />
      <Switch>
        <Route exact path="/" component={View} />
        <Route exact path="/add" component={Create} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
