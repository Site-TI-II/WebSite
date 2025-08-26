import React from 'react';
import { Link } from 'react-router-dom';
import {
  Toolbar,
  Avatar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  Home as HomeIcon,
  Description as DescriptionIcon,
  Assignment as AssignmentIcon,
  CalendarToday as CalendarIcon,
  Info as InfoIcon
} from '@mui/icons-material';
import ThemeSwitcher from './ThemeSwitcher';

interface DrawerMenuProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const menuItems = [
  { text: 'Início', icon: <HomeIcon />, path: '/' },
  { text: 'Documentação', icon: <DescriptionIcon />, path: '/documentacao' },
  { text: 'Tarefas', icon: <AssignmentIcon />, path: '/tarefas' },
  { text: 'Calendário', icon: <CalendarIcon />, path: '/calendario' },
  { text: 'Informações', icon: <InfoIcon />, path: '/informacoes' },
];

export default function DrawerMenu({ darkMode, toggleDarkMode }: DrawerMenuProps) {
  return (
    <div>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Avatar sx={{ bgcolor: 'primary.main', mr: 1 }}>T</Avatar>
        <Typography variant="h6" noWrap component="div">
          TI Organizer
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <ThemeSwitcher darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}