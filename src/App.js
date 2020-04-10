import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import MasterLayout from './layouts/master/MasterLayout.jsx';
import Menu from './pages/Menu';

function App() {
  return (
    <div className="App">
      <MasterLayout>
        <BrowserRouter>
          <Switch>
            <Route exact path="/menu" component={Menu}/>
          </Switch>
        </BrowserRouter>
      </MasterLayout>
    </div>
  );
}

export default App;
