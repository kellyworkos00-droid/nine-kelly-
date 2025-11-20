import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function HRManagement() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>HR Management</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Add Employee</Typography>
            <TextField label="Employee Name" fullWidth sx={{ my: 1 }} />
            <TextField label="Position" fullWidth sx={{ my: 1 }} />
            <TextField label="Salary (KES)" type="number" fullWidth sx={{ my: 1 }} />
            <Button variant="contained" color="primary">Add Employee</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Payroll</Typography>
            <TextField label="Employee" fullWidth sx={{ my: 1 }} />
            <TextField label="Amount (KES)" type="number" fullWidth sx={{ my: 1 }} />
            <Button variant="contained" color="secondary">Process Payroll</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, mt: 2 }}>
            <Typography variant="h6">Leave Management</Typography>
            <TextField label="Employee" fullWidth sx={{ my: 1 }} />
            <TextField label="Leave Type" fullWidth sx={{ my: 1 }} />
            <TextField label="Days" type="number" fullWidth sx={{ my: 1 }} />
            <Button variant="contained" color="success">Record Leave</Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
