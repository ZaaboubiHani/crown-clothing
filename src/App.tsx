import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';


class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div >
        <HomePage></HomePage>
      </div>
    );
  }
 
}

export default App;
