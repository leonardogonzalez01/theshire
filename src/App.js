import React from 'react';
import {Provider} from 'react-redux';
import store from './store/store'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./views/Home";
import Admin from "./views/Admin";
import Herolist from "./views/Herolist";
import Mundoslist from "./views/Mundoslist";

function App() {
  return (
        <Provider store={store}>
        <Router>
          <Switch>
            <Route  path={'/admin'} exact component={Admin}/>
              <Route  path={'/heroes'} exact component={Herolist}/>
              <Route  path={'/mundos'} exact component={Mundoslist}/>
            <Route  path={'/'} exact component={Home}/>
          </Switch>
        </Router>
        </Provider>
  );
}

export default App;
