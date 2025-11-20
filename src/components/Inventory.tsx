import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Inventory() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Inventory</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Track and manage your inventory here. (Module placeholder)
      </Typography>
    </Box>
  );
}
