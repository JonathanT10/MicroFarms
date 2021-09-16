import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './src/components/navBar';
import Footer from './src/components/footer';
import Home from './components/home';
import Products from './components/products';
import About from './components/about';
import Contact from './components/contact';
import Store from './components/store';


function App() {

  return(
    <Provider store={store}>
    <div>
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/store" component={Store} />
      </Switch>
      <Footer />
      </BrowserRouter>
    </div>
    </Provider>
  );
  
  }
  
  
  export default App;