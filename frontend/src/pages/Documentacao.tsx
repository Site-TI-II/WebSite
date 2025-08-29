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
  AppBar,
  Card,
  Button
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

// Interface para membros da equipe
interface MembroEquipe {
  nome: string;
  funcao: string;
  contato: string;
  foto: string;
  whatsapp: string;
  github: string;
  linkedin: string;
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
        const semResposta = item.resposta === 'Não respondido ainda.';
        const painelId = `panel${index}`;
        
        return (
          <Accordion
            key={painelId}
            expanded={expandedPanel === painelId}
            onChange={handleExpansionChange(painelId)}
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
  // Dados da equipe
  const membrosEquipe: MembroEquipe[] = [
    {
      nome: "Ana Silva",
      funcao: "Desenvolvedora Front-end",
      contato: "ana.silva@messaway.com",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      whatsapp: "+55 (11) 99999-9999",
      github: "anadev",
      linkedin: "ana-silva-dev"
    },
    {
      nome: "Carlos Oliveira",
      funcao: "Desenvolvedor Back-end",
      contato: "carlos.oliveira@messaway.com",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      whatsapp: "+55 (11) 98888-8888",
      github: "carlosbackend",
      linkedin: "carlos-oliveira-dev"
    },
    {
      nome: "Mariana Santos",
      funcao: "Designer UX/UI",
      contato: "mariana.santos@messaway.com",
      foto: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      whatsapp: "+55 (11) 97777-7777",
      github: "maridesigner",
      linkedin: "mariana-santos-ux"
    },
    {
      nome: "Ricardo Ferreira",
      funcao: "Gerente de Projeto",
      contato: "ricardo.ferreira@messaway.com",
      foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      whatsapp: "+55 (11) 96666-6666",
      github: "ricardopm",
      linkedin: "ricardo-ferreira-pm"
    }
  ];

  const [flippedCards, setFlippedCards] = useState<boolean[]>(new Array(membrosEquipe.length).fill(false));

  const handleFlip = (index: number) => {
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = !newFlippedCards[index];
    setFlippedCards(newFlippedCards);
  };

  return (
    <Box sx={{ mt: 2, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Nossa Equipe
      </Typography>
      <Typography paragraph>
        Conheça os membros dedicados por trás do desenvolvimento do Mess Away.
      </Typography>
      
      {/* Grid responsivo para os cards da equipe */}
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
        gap: 3,
        mt: 1 
      }}>
        {membrosEquipe.map((membro, index) => (
          <Box
            key={index}
            sx={{
              perspective: '1000px',
              height: 350
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                transition: 'transform 0.6s',
                transformStyle: 'preserve-3d',
                transform: flippedCards[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                cursor: 'pointer'
              }}
              onClick={() => handleFlip(index)}
            >
              {/* Frente do Card */}
              <Card 
                className="hover-card" 
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
                {/* Foto do membro */}
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
                
                {/* Informações do membro */}
                <Box sx={{ p: 2, flexGrow: 1 }}>
                  <Typography variant="h6" component="div" gutterBottom>
                    {membro.nome}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {membro.funcao}
                  </Typography>
                </Box>
                
                {/* Botão para virar o card */}
                <Box sx={{ p: 2, pt: 0, width: '100%' }}>
                  <Button 
                    variant="outlined" 
                    fullWidth 
                    className="custom-button"
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleFlip(index);
                    }}
                  >
                    Ver Contatos
                  </Button>
                </Box>
              </Card>

              {/* Verso do Card (Contatos) */}
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
                  
                  {/* Email */}
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      Email
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      {membro.contato}
                    </Typography>
                  </Box>

                  {/* WhatsApp */}
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      WhatsApp
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      {membro.whatsapp}
                    </Typography>
                  </Box>

                  {/* GitHub */}
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      GitHub
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      @{membro.github}
                    </Typography>
                  </Box>

                  {/* LinkedIn */}
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      LinkedIn
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      {membro.linkedin}
                    </Typography>
                  </Box>
                </Box>

                {/* Botão para voltar */}
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
                      handleFlip(index);
                    }}
                  >
                    Voltar
                  </Button>
                </Box>
              </Card>
            </Box>
          </Box>
        ))}
      </Box>
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