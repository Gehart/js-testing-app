// import logo from './logo.svg';
import React from "react";
// import ReactDOM from 'react-dom';
import './App.css';
import waveTop from '../images/waveTop.svg'
import waveBottom from '../images/waveBottom.svg'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <img src={waveTop}></img>
      </div>
    );
  }
}

export default App;
