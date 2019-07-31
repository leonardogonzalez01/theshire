import React from 'react';
import {Provider} from 'react-redux';
import store from './store/store'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import { connect } from 'react-redux';
import Home from "./views/Home";
import Admin from "./views/Admin";

function App() {
  return (
    <div>
        <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path={'/admin'} component={Admin}/>
            <Route exact path={'/'} component={Home}/>
          </Switch>
        </Router>
        </Provider>
    </div>
  );
}

export default App;
