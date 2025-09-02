import React, { useState } from 'react';
import { Card, Box, Typography, Button } from '@mui/material';
import { MembroEquipe } from '../../types/team';

interface TeamMemberCardProps {
  membro: MembroEquipe;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ membro }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Box sx={{ perspective: '1000px', height: 350 }}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transition: 'transform 0.6s',
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          cursor: 'pointer'
        }}
        onClick={handleFlip}
      >
        {/* Frente do Card */}
        <Card 
          sx={{ 
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            display: 'flex', 
            flexDirection: 'column',
            borderRadius: 2,
            overflow: 'hidden',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <Box sx={{ 
            width: 120,
            height: 120,
            borderRadius: '50%',
            overflow: 'hidden',
            marginTop: 3,
            border: '3px solid',
            borderColor: 'primary.main'
          }}>
            <img 
              src={membro.foto} 
              alt={membro.nome}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }} 
            />
          </Box>
          
          <Box sx={{ p: 2, flexGrow: 1 }}>
            <Typography variant="h6" component="div" gutterBottom>
              {membro.nome}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {membro.funcao}
            </Typography>
          </Box>
          
          <Box sx={{ p: 2, pt: 0, width: '100%' }}>
            <Button 
              variant="outlined" 
              fullWidth 
              onClick={(e) => {
                e.stopPropagation();
                handleFlip();
              }}
            >
              Ver Contatos
            </Button>
          </Box>
        </Card>

        {/* Verso do Card */}
        <Card 
          sx={{ 
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            display: 'flex', 
            flexDirection: 'column',
            borderRadius: 2,
            overflow: 'hidden',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: 'primary.main',
            color: 'white'
          }}
        >
          <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Contatos
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Email
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {membro.contato}
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                WhatsApp
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {membro.whatsapp}
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                GitHub
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                @{membro.github}
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                LinkedIn
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {membro.linkedin}
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ p: 2, width: '100%' }}>
            <Button 
              variant="contained" 
              fullWidth 
              sx={{ 
                backgroundColor: 'white',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'grey.100'
                }
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleFlip();
              }}
            >
              Voltar
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};