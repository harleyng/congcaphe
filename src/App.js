import React from 'react';
import './assets/css/style.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import MasterLayout from './layouts/master/MasterLayout'
import Menu from './pages/store/Menu'
import Groceries from './pages/store/Groceries'
import News from './pages/posts/News'
import Career from './pages/Career'
import Detail from './pages/store/Detail'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <MasterLayout>
        <BrowserRouter>
          <Switch>
            <Route exact path="/about" component={About}/>
            <Route exact path="/posts" component={News}/>
            <Route exact path="/menu" component={Menu}/>
            <Route exact path="/groceries" component={Groceries}/>
            <Route exact path="/product/:id/" component={Detail}/>
            <Route exact path="/career" component={Career}/>
          </Switch>
        </BrowserRouter>
      </MasterLayout>
    </div>
  );
}

export default App;
