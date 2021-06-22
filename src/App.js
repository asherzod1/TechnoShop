import React from 'react';
import './App.css';
import HomeP from './pages/HomeP';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutP from './pages/AboutP';
import ProductP from './pages/ProductP';
import ShopP from './pages/ShopP';
import BlogP from './pages/BlogP';
import ContactP from './pages/ContactP';
function App() {

  const routes = [
    {path: '/', component: HomeP},
    {path: '/about', component: AboutP},
    {path: '/product', component: ProductP},
    {path: '/shop', component: ShopP},
    {path: '/blog', component: BlogP},
    {path: '/contact', component: ContactP},

  ]
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {routes.map(item => 
            <Route exact path={item.path} component={item.component} />)}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
