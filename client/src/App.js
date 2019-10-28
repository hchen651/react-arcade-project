//React
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


//Boostrap Components
import Container from 'react-bootstrap/Container';

//Pages and Components
import Browse from './pages/Browse'
import MainContainer from "./components/MainContainer";
import Routes from './components/Routes';

//Stylesheet
//import './style.css';

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
