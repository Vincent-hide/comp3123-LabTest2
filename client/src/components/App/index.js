import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";

const App = () => {
  return (
    <BrowserRouter>
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
