import React from 'react';
import { AppBar, Tabs, Tab } from '@mui/material';
import { 
  Description as DescriptionIcon,
  Quiz as QuizIcon,
  Group as GroupIcon,
  Code as CodeIcon
} from '@mui/icons-material';

interface DocumentationTabsProps {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export const DocumentationTabs: React.FC<DocumentationTabsProps> = ({ value, onChange }) => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Tabs
        value={value}
        onChange={onChange}
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
  );
};