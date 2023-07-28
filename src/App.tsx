import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Routes, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <Header />
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/shop' Component={ShopPage} />
        </Routes>
      </div>
    );
  }
}

export default App;
