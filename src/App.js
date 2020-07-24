import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Route path='/' exact component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' exact component={Contact}/>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
