import { QuestionarioItem } from '../types/questionnaire';

export const questionarioData: QuestionarioItem[] = [
  {
    pergunta: "1. Qual é o tema e o nome do projeto?",
    resposta: "Mess Away. Aplicativo que ajuda na organização e gerenciamento de tarefas e casa."
  },  
  {
    pergunta: "2. Qual é o problema tratado pelo projeto?",
    resposta: "Dificuldade em organizar e gerenciar tarefas cotidianas adjascentes a casa e vida pessoal. Assim melhorando a produtividade e qualidade de vida."
  },
  {
    pergunta: "3. Para qual público o projeto se destina?",
    resposta: "O público alvo seriam pessoas que recentemente se mudaram ou pessoas com dificuldade de gerenciamento da sua casa. Muitas das vezes, no meio de muita coisa pra fazer (trabalho, estudo), acabamos negligenciando as tarefas de casa e transformamos ela em algo muito maior do que deveria ser. Mess Away pretende ajudar com isso."
  },
  {
    pergunta: "4. Quais foram as principais motivações para o desenvolvimento do projeto?",
    resposta: "Queríamos algo único e que fosse relevante não só para a gente, como para nossos familiares e amigos. Algo que fosse realista e palpável, fácil, para pessoas de múltiplas idades."
  },
  {
    pergunta: "5. Qual é o objetivo do projeto?",
    resposta: "O objetivo do projeto é facilitar e organizar a casa e os objetivos dos ambientes em que você se encontra, tornando algo que à primeira vista pode ser trabalhoso em algo mais descomplicado."
  },
  {
    pergunta: "6. Que impacto o projeto trará para seu público e para a sociedade?",
    resposta: "Uma facilitação da vida de pessoas, da convivência, ajudando até mesmo no aspecto financeiro e na produtividade. Além de grandes impactos na saúde mental e física, já que a organização do nosso ambiente é um fator muito importante para o bem-estar."
  },
  {
    pergunta: "7. Qual é o diferencial/inovação do projeto em relação ao que já existe?",
    resposta: "Interface user-friendly para usuários que não querem muitos toques e manutenções, IA para distribuição de tarefas baseada na rotina dos membros, diferentes tipos de sistemas de rotinas e  maior abrangência de funcionalidades, indo desde o gerenciamento das tarefas da casa em si, até no auxílio do em planos financeiro e de compras."
  },
  {
    pergunta: "8. Como o projeto se sustentará? Quais são os mecanismos de monetização?",
    resposta: "O projeto se sustentaria monetariamente por meio de propagandas que podem ser utilizadas para o desbloqueio de funcionalidades \"premium\" e por meio de uma mensalidade que melhoraria as funcionalidades, já impostas no app, como paletas de cores, temas, melhor assistência, entre outros."
  },
  {
    pergunta: "9. Como é o fluxo de usuários (User Flow) no sistema a ser desenvolvido?",
    resposta: "O usuário realiza o cadastro ou login, acessa o painel principal, onde pode visualizar tarefas, adicionar novas atividades, editar ou excluir tarefas existentes, acompanhar o progresso das tarefas, receber recomendações inteligentes, e gerenciar configurações do perfil e dos membros da residência."
  },
  {
    pergunta: "10. Quais são as principais entidades, atributos, relacionamento e restrições do banco de dados do projeto?",
    resposta: "As principais entidades do banco de dados do projeto incluem Usuário, Tarefa, Residência, Membro e Categoria. Cada entidade possui atributos específicos, como ID, nome, descrição, data de criação, status, entre outros. Os relacionamentos entre as entidades são estabelecidos para garantir a integridade dos dados e facilitar consultas eficientes. Restrições são aplicadas para assegurar que os dados inseridos estejam dentro dos parâmetros definidos, como formatos de data, valores obrigatórios e unicidade de certos campos."
  },
  {
    pergunta: "11. Quais são os recursos de sistemas inteligentes e inteligência artificial a serem adotados no projeto?",
    resposta: "Os recursos de sistemas inteligentes e Inteligência Artificial a serem adotados no projeto a princípio são vistos como recomendação de Tarefas Personalizadas, Assistente Virtual e Otimização de Recursos."
  }
];