import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Sidebar from './Components/Sidebar';
import Twittes from './Components/Twittes';

function App() {
  return (
    <div className="twitter">
     <Sidebar></Sidebar>
     <Twittes></Twittes>
    </div>
  );
}

export default App;
