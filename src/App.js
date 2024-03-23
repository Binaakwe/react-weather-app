import React from "react";
import './App.css';
import Weather from './Weather.js';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
        This projected was coded by <a href='https://github.com/Binaakwe' target='_blank' rel='noreferrer'>Briana Lesage</a> and is <a href='/'>open-sourced on GitHub</a>
        </footer>
      </div>
    </div>
  );
}


