import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './src/components/navBar';
import Footer from './src/components/footer';
import Home from './components/home';


function App() {

  return(
    <Provider store={store}>
    <div>
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
      </BrowserRouter>
    </div>
    </Provider>
  );
  
  }
  
  
  export default App;