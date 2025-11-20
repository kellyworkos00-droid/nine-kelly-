import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Accounting() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>Accounting</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Create Invoice</Typography>
            <TextField label="Customer Name" fullWidth sx={{ my: 1 }} />
            <TextField label="Amount (KES)" type="number" fullWidth sx={{ my: 1 }} />
            <TextField label="VAT (%)" type="number" fullWidth sx={{ my: 1 }} />
            <Button variant="contained" color="primary">Generate Invoice</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Record Expense</Typography>
            <TextField label="Expense Name" fullWidth sx={{ my: 1 }} />
            <TextField label="Amount (KES)" type="number" fullWidth sx={{ my: 1 }} />
            <Button variant="contained" color="secondary">Add Expense</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, mt: 2 }}>
            <Typography variant="h6">Payments</Typography>
            <TextField label="Payee" fullWidth sx={{ my: 1 }} />
            <TextField label="Amount (KES)" type="number" fullWidth sx={{ my: 1 }} />
            <Button variant="contained" color="success">Record Payment</Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
