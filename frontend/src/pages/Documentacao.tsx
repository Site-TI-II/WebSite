import React, { useState } from 'react';
import { Paper, Box, Typography, Divider } from '@mui/material';
import { DocumentationTabs } from '../components/Documentation/DocumentationTabs';
import { OverviewTab } from '../components/Documentation/OverviewTab';
import { QuestionnaireTab } from '../components/Documentation/QuestionnaireTab';
import { TeamTab } from '../components/Documentation/TeamTab';
import { TechnologyTab } from '../components/Documentation/TechnologyTab';

const Documentacao: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [expandedPanel, setExpandedPanel] = useState<string | false>('panel0');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleExpansionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedPanel(isExpanded ? panel : false);
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

      <DocumentationTabs value={tabValue} onChange={handleTabChange} />

      <Box sx={{ p: 3 }}>
        {tabValue === 0 && <OverviewTab />}
        {tabValue === 1 && (
          <QuestionnaireTab
            expandedPanel={expandedPanel}
            onExpansionChange={handleExpansionChange}
          />
        )}
        {tabValue === 2 && <TeamTab />}
        {tabValue === 3 && <TechnologyTab />}
      </Box>
    </Paper>
  );
};

export default Documentacao;