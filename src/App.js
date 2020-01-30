import React from 'react';
import { Switch , Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import './App.css';

const HatsPage = () =>(
  <div>
    <h1>123</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
      <Route eaxct path='/' component={HomePage}/>
      <Route path='/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
