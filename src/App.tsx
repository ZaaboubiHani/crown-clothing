import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Routes, Route } from 'react-router-dom';

const HatPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/hats' Component={HatPage} />
      </Routes>
    );
  }
}

export default App;
