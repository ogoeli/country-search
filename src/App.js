import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/main.scss';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';

const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/:cid' component={Details} />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
