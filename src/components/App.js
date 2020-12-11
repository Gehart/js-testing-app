// import logo from './logo.svg';
import React from "react";
// import ReactDOM from 'react-dom';
import './App.css';
import waveTop from '../static/images/waveTop.svg'
import waveBottom from '../static/images/waveBottom.svg'
import logo from "../static/images/logo.svg";

class Header extends React.Component {
  render() {
    const headerText = "Гость (войдите, чтобы пройти тест)";

    return (
      <div className='header'>
        <span>{headerText}</span> 
      </div>
    );
  }
}

function Logo(props) {
  return (
    <img className='logo' src={logo} alt='Logo' />
  ); 
}

class Button extends React.Component {
  render() {
    return (
      <button
        className={'button' + ((this.props.className ? ' ' + this.props.className : '') )}
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}

// страница с кнопками "Войти" и "Зарегистрироваться"
function StartPage(params) {
  return (
    <>
        <Logo />
        <Button value="Войти" onClick={()=>console.log("clicked1")} className='mb15' />
        <Button value="Зарегистрироваться" onClick={()=>console.log("clicked2")} />
    </>
  );
}

class InputField extends React.Component {
  render() {
    return (
      <label className='input-field'>
        {this.props.label}
        <input type="text" />
      </label>
    );
  }
}

// страница регистрации
class RegistrationPage extends React.Component{
  render() {
    return (
      <div className="registration-page">
        <h3>Зарегистрироваться</h3>
        <form>
          <InputField label='ФИО' />
          <InputField label='Группа' />
          <InputField label='Пароль' />
          <InputField label='Email' />

          <button type="submit" onClick={(e)=> {
              e.preventDefault(); 
              console.log("Submit!");
            }
          }>OK</button>
        </form>
      </div>
    );
  }

}


class Container extends React.Component {
  render() {
    return (
      <div className="container">
        {/* <StartPage /> */}
        <RegistrationPage />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <img className="wave-top" alt=' ' src={waveTop}></img>
        <img className="wave-bottom" alt=' ' src={waveBottom}></img>
        <Header />
        <Container />
      </div>
    );
  }
}

export default App;
