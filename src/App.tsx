import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserNameForm from './UserNameForm';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Cheng Fei - 费城
        </p>
        <UserNameForm />
      </header>
    </div >
  );
}

export default App;
