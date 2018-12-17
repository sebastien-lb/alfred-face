import * as React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import { DashboardPage, LoginPage } from './pages';

import { Header } from './components';

class App extends React.Component<{},{}> {

  public render(){
      return (
      <div>
          <Header />
          <Switch>
            <Route path='/login' component={LoginPage} />
            <Route path='/home' component={DashboardPage} />
            <Route path='/' component={LoginPage} />
          </Switch>
      </div>
    );
  }
}

export default App;
