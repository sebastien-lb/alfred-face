import * as React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import { DashboardPage, LoginPage } from './pages';
// import {SensorAddPage} from "./pages";

class App extends React.Component {



  public render(){
      return (
      <div>
        <Switch>
          <Route path='/login' component={LoginPage} />
          <Route path='/home' component={DashboardPage} />
          <Route path='/azerty' component={DashboardPage} />
          <Route path='/' component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
