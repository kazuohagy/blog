import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Post from './pages/Post';
// import NotFound from './pages/NotFound';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <div> dificil</div>
        <div>
          <p>
              O desempenho é um dos diversos fatores que podem influenciar a decisão de hospedar sua infraestrutura ou aplicativos no Azure. No entanto, simplesmente implantar recursos não marca o fim da sua interação:
               é crucial avaliar se você está realmente colhendo os benefícios da hospedagem no Azure e justificando o retorno sobre o investimento. É possível que certos aspectos dos seus aplicativos não estejam atendendo
                às expectativas de desempenho, tanto para você quanto para seus usuários.
          </p>
        </div>
    </div>
  );
}

export default App;
