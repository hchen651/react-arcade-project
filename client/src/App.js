//React
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Stylesheet
import './App.css';

//Components
import Routes from './components/Routes';

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;