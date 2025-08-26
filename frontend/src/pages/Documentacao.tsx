import React, { useState } from 'react';
import { 
  Paper, 
  Box, 
  Typography, 
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip // Novo import para o "chip"
} from '@mui/material';
import { 
  ExpandMore as ExpandMoreIcon, 
  Quiz as QuizIcon // Novo ícone para as perguntas
} from '@mui/icons-material';

// Adicionei números às perguntas para um visual mais limpo
const questionarioData = [
  {
    pergunta: "1. Qual é o tema e o nome do projeto?",
    resposta: "Mess Away. Aplicativo que ajuda na organização e gerenciamento de tarefas e casa."
  },
  {
    pergunta: "2. Qual é o problema tratado pelo projeto?",
    resposta: "Dificuldade em organizar e gerenciar tarefas cotidianas."
  },
  {
    pergunta: "3. Para qual público o projeto se destina?",
    resposta: "O público alvo seriam pessoas que recentemente se mudaram ou tem dificuldade de gerenciamento da sua casa. Muitas das vezes, no meio de muita coisa pra fazer (trabalho, estudo), acabamos negligenciando as tarefas de casa e transformamos ela em algo muito maior do que deveria ser. Mess Away pretende ajudar com isso."
  },
  {
    pergunta: "4. Quais foram as principais motivações para o desenvolvimento do projeto?",
    resposta: "Queríamos algo único e que fosse relevante não só para a gente, como para nossos familiares e amigos. Algo que fosse universal e realista para pessoas de múltiplas idades."
  },
  {
    pergunta: "5. Qual é o objetivo do projeto?",
    resposta: "O objetivo do projeto é facilitar e organizar a casa e os objetivos dos ambientes em que você se encontra, tornando algo que à primeira vista pode ser trabalhoso em algo mais descomplicado."
  },
  {
    pergunta: "6. Que impacto o projeto trará para seu público e para a sociedade?",
    resposta: "Uma facilitação da vida de pessoas, da convivência, ajudando até mesmo no aspecto financeiro e na produtividade."
  },
  {
    pergunta: "7. Qual é o diferencial/inovação do projeto em relação ao que já existe?",
    resposta: "Não respondido ainda."
  },
  {
    pergunta: "8. Como o projeto se sustentará? Quais são os mecanismos de monetização?",
    resposta: "O projeto se sustentaria monetariamente por meio de propagandas que podem ser utilizadas para o desbloqueio de funcionalidades “premium” e por meio de uma mensalidade que melhoraria as funcionalidades."
  },
  {
    pergunta: "9. Como é o fluxo de usuários (User Flow) no sistema a ser desenvolvido?",
    resposta: "Não respondido ainda."
  },
  {
    pergunta: "10. Quais são as principais entidades, atributos, relacionamento e restrições do banco de dados do projeto?",
    resposta: "Não respondido ainda."
  },
  {
    pergunta: "11. Quais são os recursos de sistemas inteligentes e inteligência artificial a serem adotados no projeto?",
    resposta: "Não respondido ainda."
  }
];

export default function Documentacao() {
  // Estado para controlar qual painel está expandido
  // 'panel0' é o ID do primeiro painel, que começará aberto
  const [expandedPanel, setExpandedPanel] = useState<string | false>('panel0');

  // Função para lidar com a mudança de expansão
  const handleExpansionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedPanel(isExpanded ? panel : false);
  };

  return (
    // Adicionamos a classe 'fade-in' do seu App.css
    <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }} className="fade-in">
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" color="primary">
          Documentação do Projeto
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Questionário de Escopo e Definição
        </Typography>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {questionarioData.map((item, index) => {
        const isUnanswered = item.resposta === 'Não respondido ainda.';
        const panelId = `panel${index}`;
        
        return (
          <Accordion
            key={panelId}
            // Controla a expansão através do estado
            expanded={expandedPanel === panelId}
            onChange={handleExpansionChange(panelId)}
            // Estilo mais limpo, sem sombra e com bordas
            variant="outlined" 
            sx={{ mb: 1.5, '&:last-of-type': { mb: 0 } }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${panelId}-content`}
              id={`${panelId}-header`}
              sx={{
                // Cor de fundo sutil para o cabeçalho
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
              
              {isUnanswered && (
                <Chip label="Pendente" color="warning" size="small" variant="outlined" />
              )}
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: 'background.paper' }}>
              <Typography
                sx={{
                  color: isUnanswered ? 'text.disabled' : 'text.primary',
                  whiteSpace: 'pre-wrap',
                  lineHeight: 1.7 // Melhora a legibilidade da resposta
                }}
              >
                {item.resposta}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Paper>
  );
}