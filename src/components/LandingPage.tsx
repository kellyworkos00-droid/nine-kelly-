import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function LandingPage() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default', color: 'text.primary' }}>
      <Typography variant="h2" gutterBottom>
        Welcome to kellyos
      </Typography>
      <Typography variant="h5" gutterBottom>
        Modern Next.js Dashboard Solution
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Powerful analytics, user management, and more—all in one place.
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Get Started
      </Button>
    </Box>
  );
}
