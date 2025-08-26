import React, { useState } from 'react';
import { 
  Paper, 
  Box, 
  Typography, 
  Fab, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText 
} from '@mui/material';
import { 
  Add as AddIcon, 
  CalendarToday as CalendarIcon 
} from '@mui/icons-material';
import { EventoCalendario } from '../types'; // Importando o tipo

export default function Calendario() {
  const [eventos, setEventos] = useState<EventoCalendario[]>([
    { id: 1, titulo: 'Reunião de Equipe', data: new Date(2023, 5, 15), descricao: 'Reunião semanal de alinhamento' },
    { id: 2, titulo: 'Entrega do Módulo 1', data: new Date(2023, 5, 20), descricao: 'Prazo final para entrega do primeiro módulo' },
    { id: 3, titulo: 'Apresentação para Cliente', data: new Date(2023, 5, 25), descricao: 'Demonstração das funcionalidades implementadas' },
  ]);

  return (
    <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" color="primary">
          Calendário de Entregas
        </Typography>
        <Fab color="primary" aria-label="add" size="small">
          <AddIcon />
        </Fab>
      </Box>
      
      <List>
        {eventos.map((evento) => (
          <ListItem key={evento.id} divider>
            <ListItemIcon>
              <CalendarIcon color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary={evento.titulo} 
              secondary={`${evento.data.toLocaleDateString()} - ${evento.descricao}`} 
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}