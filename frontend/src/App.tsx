import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Componente de Layout
import Layout from './components/Layout';

// Páginas
import Home from './pages/Home';
import Documentacao from './pages/Documentacao';
import Tarefas from './pages/Tarefas';
import Calendario from './pages/Calendario';
import Informacoes from './pages/Informacoes';

import './App.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // useMemo evita que o tema seja recalculado em cada renderização
  const appTheme = useMemo(() =>
    createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
        primary: {
          main: '#3f51b5',
        },
        secondary: {
          main: '#f50057',
        },
      },
    }), [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={appTheme}>
      <Router>
        <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/documentacao" element={<Documentacao />} />
            <Route path="/tarefas" element={<Tarefas />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/informacoes" element={<Informacoes />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}