// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  CssBaseline,
  Box
} from '@mui/material';

const drawerWidth = 240;

// Páginas
function Home() {
  return <Typography variant="h4">Bem-vindo ao Organizador</Typography>;
}

function Documentacao() {
  return <Typography variant="h4">Central de Documentação</Typography>;
}

function Tarefas() {
  return <Typography variant="h4">Gestão de Tarefas</Typography>;
}

function Calendario() {
  return <Typography variant="h4">Calendário de Entregas</Typography>;
}

function Informacoes() {
  return <Typography variant="h4">Portal de Informações</Typography>;
}

export default function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        {/* Barra Superior */}
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Organizador TI II
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Menu Lateral */}
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: 'border-box'
            }
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/">
                  <ListItemText primary="Início" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component={Link} to="/documentacao">
                  <ListItemText primary="Documentação" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component={Link} to="/tarefas">
                  <ListItemText primary="Tarefas" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component={Link} to="/calendario">
                  <ListItemText primary="Calendário" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component={Link} to="/informacoes">
                  <ListItemText primary="Informações" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>

        {/* Conteúdo Principal */}
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/documentacao" element={<Documentacao />} />
            <Route path="/tarefas" element={<Tarefas />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/informacoes" element={<Informacoes />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}
