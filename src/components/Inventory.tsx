import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Inventory() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>Inventory</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Add Product</Typography>
            <TextField label="Product Name" fullWidth sx={{ my: 1 }} />
            <TextField label="SKU" fullWidth sx={{ my: 1 }} />
            <TextField label="Quantity" type="number" fullWidth sx={{ my: 1 }} />
            <Button variant="contained" color="primary">Add Product</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Add Supplier</Typography>
            <TextField label="Supplier Name" fullWidth sx={{ my: 1 }} />
            <TextField label="Contact" fullWidth sx={{ my: 1 }} />
            <Button variant="contained" color="secondary">Add Supplier</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, mt: 2 }}>
            <Typography variant="h6">Stock Movement</Typography>
            <TextField label="Product" fullWidth sx={{ my: 1 }} />
            <TextField label="Change (Qty)" type="number" fullWidth sx={{ my: 1 }} />
            <Button variant="contained" color="success">Record Movement</Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
