import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import {Route, Link, BrowserRouter as Router} from '../node_modules/react-router-dom'

//React Routing Practice
const myrouter=(
  <Router>
    
  <div>
    <ul>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/portfolio">Portfolio</Link>

    </ul>

    <Route exact path="/" component={App}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/portfolio" component={Portfolio}/>


  </div>

  </Router>
)




ReactDOM.render(
 myrouter,  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
