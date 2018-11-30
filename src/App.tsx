import * as React from 'react';
import './App.css';

// import { DashboardPage } from './pages';
import {SensorAddPage} from "./pages";

class App extends React.Component {


  
  public render(){
      return (
      <div>
        {/*<DashboardPage />*/}
        <SensorAddPage />
      </div>
    );
  
  }
}

export default App;
