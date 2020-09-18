import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'

import { BrowserRouter as Router } from 'react-router-dom';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component {
  render(){
    return(
      <Router>
        <Header/>
        <Home />
        <About />
        <Team/>
        <Portfolio/>
        <Services />
        <Contact />
      </Router>
    )
  }
}
export default App;
