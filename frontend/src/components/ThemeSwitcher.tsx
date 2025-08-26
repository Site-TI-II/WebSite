import React from 'react';
import { Box, FormControlLabel, Switch } from '@mui/material';
import { LightMode as LightModeIcon, DarkMode as DarkModeIcon } from '@mui/icons-material';

interface ThemeSwitcherProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function ThemeSwitcher({ darkMode, toggleDarkMode }: ThemeSwitcherProps) {
  return (
    <Box sx={{ p: 2 }}>
      <FormControlLabel
        control={
          <Switch
            checked={darkMode}
            onChange={toggleDarkMode}
            icon={<LightModeIcon />}
            checkedIcon={<DarkModeIcon />}
          />
        }
        label={darkMode ? 'Tema Escuro' : 'Tema Claro'}
      />
    </Box>
  );
}