import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

export default function Informacoes() {
  return (
    <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom color="primary">
        Portal de Informações
      </Typography>
      <Typography variant="body1" paragraph>
        Esta aplicação foi desenvolvida com React, TypeScript e Material-UI.
      </Typography>
      
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Funcionalidades Principais
        </Typography>
        <ul>
          <li><Typography variant="body2">Gerenciamento de tarefas com marcação de conclusão</Typography></li>
          <li><Typography variant="body2">Calendário de eventos e prazos</Typography></li>
          <li><Typography variant="body2">Central de documentação organizada</Typography></li>
          <li><Typography variant="body2">Interface responsiva e tema escuro/claro</Typography></li>
        </ul>
      </Box>
    </Paper>
  );
}