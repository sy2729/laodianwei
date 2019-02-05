import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Home from './views/Home';
import Footer from './components/Footer';
import About from './views/About';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
