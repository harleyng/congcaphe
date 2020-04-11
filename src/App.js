import React from 'react';
import './assets/css/style.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import MasterLayout from './layouts/master/MasterLayout'
import Menu from './pages/store/Menu'
import Groceries from './pages/store/Groceries'
import News from './pages/posts/News'

function App() {
  return (
    <div className="App">
      <MasterLayout>
        <BrowserRouter>
          <Switch>
            <Route exact path="/menu" component={Menu}/>
            <Route exact path="/groceries" component={Groceries}/>
            <Route exact path="/posts" component={News}/>
          </Switch>
        </BrowserRouter>
      </MasterLayout>
    </div>
  );
}

export default App;
