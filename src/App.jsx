import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Box, Divider } from '@mui/material';
import { flexbox } from '@mui/system';
import Container from '@mui/material/Container';
import Calendar from './components/calendar';
import { render } from '@testing-library/react';

export default () => {
  const { t } = useTranslation();
  return (
    // Parent Element
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* The Title of The Page */}
      <Typography align="center" variant="h4" mt={2} sx={{ fontWeight: 'bold' }}>
        {t('Happy Chocolate Days!')}
      </Typography>
      <Typography align="center" variant="p" mb={2} sx={{ fontWeight: 'bold' }}>
        Try clicking on the days that are open to eat them!<br></br>Days that haven't passed yet
        will be closed as well as the days that have passed that have already been eaten.
      </Typography>
      {/* My Calendar Grid Component Inside The Box Component */}
      <Calendar />
    </Box>
  );
};
