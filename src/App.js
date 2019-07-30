import React from 'react';
//import {Provider} from 'react-redux';
//import store from './store/store'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./views/Home";
import Admin from "./views/Admin";

function App() {
  return (
    <div>

        <Router>
          <Switch>
            <Route exact path={'/admin'} component={Admin}/>
            <Route exact path={'/'} component={Home}/>
          </Switch>
        </Router>

    </div>
  );
}

export default App;
