import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Mandarin_Demo from './components/video_pages/madarin_demo';
import Tasks_Demo from './components/video_pages/tasks_demo';
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
      <Route path='/mandarin/demo' exact component={Mandarin_Demo}/>
      <Route path='/tasks/demo' exact component={Tasks_Demo}/>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
