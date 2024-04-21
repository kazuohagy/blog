import './App.css';
import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';s
// import Post from './pages/Post';
// import NotFound from './pages/NotFound';

import Confetti from 'react-confetti'
import Header from './components/Header';


function App() {
  const [confete, setConfete] = useState(true);
  const [windowSize, setWindowSize] = React.useState({
    x: window.innerWidth,
    y: window.innerHeight
  });
  function handleWindowSizeChange() {
    setWindowSize({ x: window.innerWidth, y: window.innerHeight });
  }
  //parar o confete depois de 5 segundos
  setTimeout(() => {
    setConfete(false);
  }, 5000);

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);
  return (
 
    <div className="App">
      {<Confetti
        width={windowSize.x}
        height={windowSize.y}
        recycle= {confete}
      />}
      <Header />
      <div> Este blog e deducado a passar um pouco dos meus estudos em programação.</div>
      <div>Estou estudando sobre arquitetura de software em dotNet.teste</div>
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
