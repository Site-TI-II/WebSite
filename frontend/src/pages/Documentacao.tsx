import React, { useState } from 'react';
import { 
  Paper, 
  Box, 
  Typography, 
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Tabs,
  Tab,
  AppBar
} from '@mui/material';
import { 
  ExpandMore as ExpandMoreIcon, 
  Quiz as QuizIcon,
  Description as DescriptionIcon,
  Code as CodeIcon,
  Group as GroupIcon
} from '@mui/icons-material';

// Interface para tipar os dados do questionário
interface QuestionarioItem {
  pergunta: string;
  resposta: string;
}

// Dados do questionário com tipagem adequada
const questionarioData: QuestionarioItem[] = [
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
    resposta: "O projeto se sustentaria monetariamente por meio de propagandas que podem ser utilizadas para o desbloqueio de funcionalidades \"premium\" e por meio de uma mensalidade que melhoraria as funcionalidades."
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

// Componente para a aba de Questionário
function QuestionarioTab() {
  const [expandedPanel, setExpandedPanel] = useState<string | false>('panel0');

  const handleExpansionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedPanel(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ mt: 2 }}>
      {questionarioData.map((item: QuestionarioItem, index: number) => {
        const isUnanswered = item.resposta === 'Não respondido ainda.';
        const panelId = `panel${index}`;
        
        return (
          <Accordion
            key={panelId}
            expanded={expandedPanel === panelId}
            onChange={handleExpansionChange(panelId)}
            variant="outlined" 
            sx={{ mb: 1.5, '&:last-of-type': { mb: 0 } }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${panelId}-content`}
              id={`${panelId}-header`}
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
              
              {isUnanswered && (
                <Chip label="Pendente" color="warning" size="small" variant="outlined" />
              )}
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: 'background.paper' }}>
              <Typography
                sx={{
                  color: isUnanswered ? 'text.disabled' : 'text.primary',
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
}

// Componente para a aba de Visão Geral
function VisaoGeralTab() {
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
}

// Componente para a aba de Equipe
function EquipeTab() {
  return (
    <Box sx={{ mt: 2, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Nossa Equipe
      </Typography>
      <Typography paragraph>
        Conheça os membros dedicados por trás do desenvolvimento do Mess Away.
      </Typography>
      {/* Aqui você pode adicionar informações sobre a equipe */}
    </Box>
  );
}

// Componente para a aba de Tecnologia
function TecnologiaTab() {
  return (
    <Box sx={{ mt: 2, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Stack Tecnológico
      </Typography>
      <Typography paragraph>
        Detalhes sobre as tecnologias utilizadas no desenvolvimento do projeto.
      </Typography>
      {/* Aqui você pode adicionar informações sobre a stack tecnológica */}
    </Box>
  );
}

// Componente principal com abas
export default function Documentacao() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Paper elevation={2} sx={{ borderRadius: 2 }} className="fade-in">
      <Box sx={{ p: 3, pb: 1 }}>
        <Typography variant="h4" color="primary">
          Documentação do Projeto
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Detalhes completos sobre o Mess Away
        </Typography>
      </Box>

      <Divider />

      <AppBar position="static" color="default" elevation={1}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="abas de documentação"
        >
          <Tab icon={<DescriptionIcon />} iconPosition="start" label="Visão Geral" />
          <Tab icon={<QuizIcon />} iconPosition="start" label="Questionário" />
          <Tab icon={<GroupIcon />} iconPosition="start" label="Equipe" />
          <Tab icon={<CodeIcon />} iconPosition="start" label="Tecnologia" />
        </Tabs>
      </AppBar>

      <Box sx={{ p: 3 }}>
        {tabValue === 0 && <VisaoGeralTab />}
        {tabValue === 1 && <QuestionarioTab />}
        {tabValue === 2 && <EquipeTab />}
        {tabValue === 3 && <TecnologiaTab />}
      </Box>
    </Paper>
  );
}