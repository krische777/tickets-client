import React from 'react';
import './App.css';
import store from './store'
import Home from './components/Home'
import SignupFormContainer from './components/SignupFormContainer';
import { Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import LoginFormContainer from './components/LoginFormContainer';
import TicketsContainer from './components/TicketsContainer'
import TicketsDetails from './components/TicketsDetails'

class App extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="header">
            <button><Link to="/">HOME</Link></button>
            <button><Link to="/signup">SIGN UP</Link></button>
            {(() => {
              if (localStorage.getItem('user')) {
                return (
                  <button ><Link to="/login">LOG OUT</Link></button>
                )
              } else {
                return (
                  <button ><Link to="/login">LOG IN</Link></button>
                )
              }
            })()}
            {/* <button><Link to="/login">LOG IN</Link></button> */}

          </header>
          <main className='content'>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignupFormContainer} />
            <Route path="/login" component={LoginFormContainer} />
            <Route exact path={`/event/:eventId/tickets`} component={TicketsContainer} />
            <Route exact path={`/event/:eventId/tickets/:ticketId`} component={TicketsDetails} />

          </main>
        </div>
      </Provider>
    );
  }
}

export default App;

