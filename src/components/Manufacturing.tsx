import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Manufacturing() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>Manufacturing</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Create Production Order</Typography>
            <TextField label="Order Name" fullWidth sx={{ my: 1 }} />
            <TextField label="Product" fullWidth sx={{ my: 1 }} />
            <TextField label="Quantity" type="number" fullWidth sx={{ my: 1 }} />
            <Button variant="contained" color="primary">Create Order</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Add Material</Typography>
            <TextField label="Material Name" fullWidth sx={{ my: 1 }} />
            <TextField label="Quantity" type="number" fullWidth sx={{ my: 1 }} />
            <Button variant="contained" color="secondary">Add Material</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, mt: 2 }}>
            <Typography variant="h6">Workflow Step</Typography>
            <TextField label="Step Name" fullWidth sx={{ my: 1 }} />
            <TextField label="Assigned To" fullWidth sx={{ my: 1 }} />
            <Button variant="contained" color="success">Add Step</Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
