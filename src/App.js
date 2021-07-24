import React from 'react';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './globalStyles';

import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <GlobalStyle/>

      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
      
      </Switch>
      
    </Router>
  );
}

export default App;
