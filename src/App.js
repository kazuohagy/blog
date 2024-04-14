import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';s
// import Post from './pages/Post';
// import NotFound from './pages/NotFound';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <div> Este blog e deducado a passar um pouco dos meus estudos em programação.</div>
    </div>
  );
}

export default App;
