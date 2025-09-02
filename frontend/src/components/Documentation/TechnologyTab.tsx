import React from 'react';
import { Box, Typography } from '@mui/material';

export const TechnologyTab: React.FC = () => {
  return (
    <Box sx={{ mt: 2, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Stack Tecnológico
      </Typography>
      <Typography paragraph>
        Detalhes sobre as tecnologias utilizadas no desenvolvimento do projeto.
      </Typography>
    </Box>
  );
};