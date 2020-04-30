import React from 'react';
import './assets/css/style.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import MasterLayout from './layouts/master/MasterLayout'
import Menu from './pages/shop/Menu'
import Groceries from './pages/shop/Groceries'
import News from './pages/posts/News'
import Career from './pages/Career'
import MenuDetail from './pages/shop/MenuDetail'
import GroceryDetail from './pages/shop/GroceryDetail'
import About from './pages/About'
import Store from './pages/Store'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Admin from './pages/Admin'

function App() {
  return (
    <div className="App">
      <MasterLayout>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/posts" component={News}/>
            <Route exact path="/menu" component={Menu}/>
            <Route path="/menu/:id/" component={MenuDetail}/>
            <Route exact path="/grocery" component={Groceries}/>
            <Route path="/grocery/:id/" component={GroceryDetail}/>
            <Route path="/career" component={Career}/>
            <Route path="/store" component={Store}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/admin" component={Admin}/>
          </Switch>
        </BrowserRouter>
      </MasterLayout>
    </div>
  );
}

export default App;
