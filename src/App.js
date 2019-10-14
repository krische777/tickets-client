import React from 'react';
import './App.css';
import store from './store'
import Home from './components/Home'
import SignupFormContainer from './components/SignupFormContainer';
import {Route, Link} from 'react-router-dom'
import {Provider} from 'react-redux'
import LoginFormContainer from './components/LoginFormContainer';

class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <header className="header">
          <button><Link to="/">HOME</Link></button>
          <button><Link to="/signup">SIGN UP</Link></button>
          <button><Link to="/login">LOG IN</Link></button>

          </header>
          <main className='content'>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignupFormContainer}/>
          <Route path="/login" component={LoginFormContainer} />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
