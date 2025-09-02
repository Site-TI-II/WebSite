import React from 'react';
import { Box, Typography } from '@mui/material';

export const OverviewTab: React.FC = () => {
  return (
    <Box sx={{ mt: 2, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Visão Geral do Projeto
      </Typography>
      <Typography paragraph>
        O Mess Away é um aplicativo inovador projetado para ajudar na organização e gerenciamento de tarefas domésticas.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Objetivos Principais
      </Typography>
      <Typography component="ul" sx={{ pl: 2 }}>
        <li>
          <Typography component="span">Simplificar a gestão de tarefas domésticas</Typography>
        </li>
        <li>
          <Typography component="span">Melhorar a produtividade e organização pessoal</Typography>
        </li>
        <li>
          <Typography component="span">Facilitar a divisão de tarefas entre membros da família</Typography>
        </li>
      </Typography>
    </Box>
  );
};