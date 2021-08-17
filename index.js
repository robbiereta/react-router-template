import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Home from './routes/Home';
import Add from './routes/add';
import './style.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="flex-column app-frame">
          <div className="flex-row align-center header container">
            <Link to="/">Header</Link>
          </div>
          <div className="flex flex-row app-main">
            <div className="flex-column sidebar container">
              <Link to="/add">Agregar registro</Link>
            </div>
            <div className="app-body flex">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/add" component={Add} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
