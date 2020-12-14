// import logo from './logo.svg';
import React from "react";
// import ReactDOM from 'react-dom';
import './App.scss';
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
function StartPage(props) {
  return (
    <>
        <Logo />
        <Button value="Войти" onClick={()=>console.log("clicked1")} className='mb15' />
        <Button value="Зарегистрироваться" onClick={props.nextPage} />
    </>
  );
}

class InputField extends React.Component {
  render() {
    if (!this.props.id) {
      // throw new Error("InputField должен содержать id")
      console.error("InputField должен содержать id");
    }
    return (
      <div className="input-field">
        <label htmlFor={this.props.id}>
          {this.props.label}
        </label>
        <input type="text" id={this.props.id}/>
      </div>
    );
  }
}

// страница регистрации
class RegistrationPage extends React.Component {
  render() {
    return (
      <div className="registration-page">
        <h3>Зарегистрироваться</h3>
        <form>
          <div className='fields'>
            <InputField label='ФИО' id="fio" />
            <InputField label='Группа' id="group" />
            <InputField label='Пароль' id="password" />
            <InputField label='Email' id="email" />
          </div>
          <button className="submit-button" type="submit" onClick={(e)=> {
              e.preventDefault(); 
              console.log("Submit!");
            }
          }>OK</button>
        </form>
      </div>
    );
  }

}


// class Container extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         {/* <StartPage /> */}
//         <RegistrationPage />
//       </div>
//     );
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {page: 'StartPage'};
  }

  goToRegistrationPage() {
    this.setState({page: 'RegistrationPage'})
    console.log('change page');
  }

  render() {
    let page;
    switch (this.state.page) {
      case 'StartPage':
        page = <StartPage nextPage={this.goToRegistrationPage.bind(this)} /> 
        break;
      case 'RegistrationPage':
        page = <RegistrationPage />
        break;
    }

    return (
      <div className="App">
        <img className="wave-top" alt=' ' src={waveTop}></img>
        <img className="wave-bottom" alt=' ' src={waveBottom}></img>
        <Header />
        {/* <Container /> */}
        <div className="container">
          {/* <StartPage /> */}
          {/* <RegistrationPage /> */}
          {page}
        </div>
      </div>
    );
  }
}

export default App;
