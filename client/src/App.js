import React from 'react';
import './styles.css'
import Navbar from './Navbar'
import Welcome from "./Welcome"
import Placeholder from "./Placeholder"
import Webapp from "./Webapp"

function App() {
  return (
    <div>
      <Navbar/>
      <Welcome/>
      <Placeholder/>
      <Webapp/>
    </div>
  );
}

export default App;
