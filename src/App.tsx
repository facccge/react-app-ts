import React from 'react';
import UserForm from './containers/UserForm';
import UserTable from './containers/UserTable';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={UserForm} />
        <Route path="/list" component={UserTable} />
      </Router>
    </div >
  );
}

export default App;
