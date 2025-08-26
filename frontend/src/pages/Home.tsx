import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { Description as DescriptionIcon, Assignment as AssignmentIcon, CalendarToday as CalendarIcon } from '@mui/icons-material';

export default function Home() {
  return (
    <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom color="primary">
        Bem-vindo ao Organizador TI II
      </Typography>
      <Typography variant="body1" paragraph>
        Este sistema foi desenvolvido para ajudar no gerenciamento de projetos, 
        documentação, tarefas e prazos da equipe.
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 4 }}>
        <Paper sx={{ p: 2, flex: '1 1 200px', textAlign: 'center' }}>
          <DescriptionIcon color="primary" sx={{ fontSize: 40 }} />
          <Typography variant="h6" gutterBottom>
            Documentação
          </Typography>
          <Typography variant="body2">
            Centralize toda a documentação do projeto em um único lugar.
          </Typography>
        </Paper>
        <Paper sx={{ p: 2, flex: '1 1 200px', textAlign: 'center' }}>
          <AssignmentIcon color="secondary" sx={{ fontSize: 40 }} />
          <Typography variant="h6" gutterBottom>
            Tarefas
          </Typography>
          <Typography variant="body2">
            Organize e acompanhe o progresso das tarefas da equipe.
          </Typography>
        </Paper>
        <Paper sx={{ p: 2, flex: '1 1 200px', textAlign: 'center' }}>
          <CalendarIcon color="success" sx={{ fontSize: 40 }} />
          <Typography variant="h6" gutterBottom>
            Calendário
          </Typography>
          <Typography variant="body2">
            Mantenha-se atualizado com os prazos e eventos importantes.
          </Typography>
        </Paper>
      </Box>
    </Paper>
  );
}