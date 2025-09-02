import React from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, Chip } from '@mui/material';
import { ExpandMore as ExpandMoreIcon, Quiz as QuizIcon } from '@mui/icons-material';
import { QuestionarioItem } from '../../types/questionnaire';
import { questionarioData } from '../../data/questionnaireData';

interface QuestionnaireTabProps {
  expandedPanel: string | false;
  onExpansionChange: (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
}

export const QuestionnaireTab: React.FC<QuestionnaireTabProps> = ({
  expandedPanel,
  onExpansionChange
}) => {
  return (
    <Box sx={{ mt: 2 }}>
      {questionarioData.map((item: QuestionarioItem, index: number) => {
        const semResposta = item.resposta === 'Não respondido ainda.';
        const painelId = `panel${index}`;
        
        return (
          <Accordion
            key={painelId}
            expanded={expandedPanel === painelId}
            onChange={onExpansionChange(painelId)}
            variant="outlined" 
            sx={{ mb: 1.5, '&:last-of-type': { mb: 0 } }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${painelId}-content`}
              id={`${painelId}-header`}
              sx={{
                backgroundColor: 'action.hover',
                '&:hover': {
                  backgroundColor: 'action.selected'
                }
              }}
            >
              <QuizIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography sx={{ fontWeight: 'bold', flexShrink: 0, mr: 2 }}>
                {item.pergunta}
              </Typography>
              {semResposta && (
                <Chip label="Pendente" color="warning" size="small" variant="outlined" />
              )}
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: 'background.paper' }}>
              <Typography
                sx={{
                  color: semResposta ? 'text.disabled' : 'text.primary',
                  whiteSpace: 'pre-wrap',
                  lineHeight: 1.7
                }}
              >
                {item.resposta}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};