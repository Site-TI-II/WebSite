import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return <h2>Bem-vindo ao Organizador do Trabalho Interdisciplinar II</h2>;
}

function Documentacao() {
  return <h2>Central de Documentação</h2>;
}

function Tarefas() {
  return <h2>Gestão de Tarefas</h2>;
}

function Calendario() {
  return <h2>Calendário de Entregas</h2>;
}

function Informacoes() {
  return <h2>Portal de Informações</h2>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/documentacao">Documentação</Link></li>
            <li><Link to="/tarefas">Tarefas</Link></li>
            <li><Link to="/calendario">Calendário</Link></li>
            <li><Link to="/informacoes">Informações</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documentacao" element={<Documentacao />} />
          <Route path="/tarefas" element={<Tarefas />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/informacoes" element={<Informacoes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
