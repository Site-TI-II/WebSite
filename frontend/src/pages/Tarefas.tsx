import React, { useState } from 'react';
import { Paper, Typography, Box, Fab, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Add as AddIcon, Assignment as AssignmentIcon } from '@mui/icons-material';
import { Tarefa } from '../types'; // Importando o tipo

export default function Tarefas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([
    { id: 1, titulo: 'Criar layout principal', descricao: 'Desenvolver o layout base do aplicativo', concluida: true, data: new Date() },
    { id: 2, titulo: 'Implementar autenticação', descricao: 'Criar sistema de login e registro', concluida: false, data: new Date() },
    { id: 3, titulo: 'Testar responsividade', descricao: 'Garantir que funcione em todos os dispositivos', concluida: false, data: new Date() },
  ]);

  const toggleConcluida = (id: number) => {
    setTarefas(tarefas.map(tarefa =>
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    ));
  };

  return (
    <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" color="primary">
          Gestão de Tarefas
        </Typography>
        <Fab color="primary" aria-label="add" size="small">
          <AddIcon />
        </Fab>
      </Box>
      
      <List>
        {tarefas.map((tarefa) => (
          <ListItem key={tarefa.id} divider>
            <ListItemIcon>
              <AssignmentIcon
                color={tarefa.concluida ? "success" : "disabled"}
                onClick={() => toggleConcluida(tarefa.id)}
                sx={{ cursor: 'pointer' }}
              />
            </ListItemIcon>
            <ListItemText
              primary={tarefa.titulo}
              secondary={tarefa.descricao}
              sx={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}