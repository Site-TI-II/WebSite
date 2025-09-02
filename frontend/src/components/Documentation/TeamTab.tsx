import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { TeamMemberCard } from './TeamMemberCard';
import { membrosEquipe } from '../../data/teamData';

export const TeamTab: React.FC = () => {
  return (
    <Box sx={{ mt: 2, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Nossa Equipe
      </Typography>
      <Typography paragraph>
        Conheça os membros dedicados por trás do desenvolvimento do Mess Away.
      </Typography>
      
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
        gap: 3,
        mt: 1 
      }}>
        {membrosEquipe.map((membro, index) => (
          <TeamMemberCard key={index} membro={membro} />
        ))}
      </Box>
    </Box>
  );
};