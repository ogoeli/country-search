import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/main.scss';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <div className='container'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/:cid' component={Details} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
