import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Sidebar from './components/Sidebar';
import Accounting from './components/Accounting';
import Inventory from './components/Inventory';
import Manufacturing from './components/Manufacturing';
import HRManagement from './components/HRManagement';
import Navbar from './components/Navbar';
import Box from '@mui/material/Box';




import DashboardCards from './components/DashboardCards';
import DashboardChart from './components/DashboardChart';
import DashboardTable from './components/DashboardTable';
import UserManagement from './components/UserManagement';

export default function App() {
  const [page, setPage] = useState<'landing' | 'login' | 'dashboard'>('landing');
  const [module, setModule] = useState<string>('Dashboard');

  const handleGetStarted = () => setPage('login');
  const handleLoginSuccess = () => setPage('dashboard');

  function LandingPageWithButton({ onGetStarted }: { onGetStarted: () => void }) {
    return (
      <Box>
        <LandingPage />
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <button onClick={onGetStarted} style={{ padding: '12px 32px', fontSize: '1.2rem', background: '#1976d2', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
            Get Started
          </button>
        </Box>
      </Box>
    );
  }

  function LoginWithButton({ onLoginSuccess }: { onLoginSuccess: () => void }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Simple validation for demo
      if (email === 'admin@example.com' && password === 'password') {
        setError('');
        onLoginSuccess();
      } else {
        setError('Invalid credentials');
      }
    };

    return (
      <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8, p: 3, boxShadow: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: '100%', padding: '8px', marginBottom: '12px' }} />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required style={{ width: '100%', padding: '8px', marginBottom: '12px' }} />
          <button type="submit" style={{ width: '100%', padding: '12px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Login</button>
          {error && <p style={{ color: 'red', marginTop: '8px' }}>{error}</p>}
        </form>
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      {page === 'landing' && <LandingPageWithButton onGetStarted={handleGetStarted} />}
      {page === 'login' && <LoginWithButton onLoginSuccess={handleLoginSuccess} />}
      {page === 'dashboard' && (
        <Box sx={{ display: 'flex', height: '100vh' }}>
          <Sidebar onSelect={setModule} />
          <Box sx={{ flexGrow: 1 }}>
            <Navbar />
            {module === 'Dashboard' && <><DashboardCards /><DashboardChart /><DashboardTable /><UserManagement /></>}
            {module === 'Accounting' && <Accounting />}
            {module === 'Inventory' && <Inventory />}
            {module === 'Manufacturing' && <Manufacturing />}
            {module === 'HR Management' && <HRManagement />}
            {/* Add stubs for CRM, Sales, Purchasing, Analytics, Support as needed */}
            {module === 'CRM' && (
              <Box sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>CRM</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2 }}>
                      <Typography variant="h6">Add Customer</Typography>
                      <TextField label="Customer Name" fullWidth sx={{ my: 1 }} />
                      <TextField label="Contact Info" fullWidth sx={{ my: 1 }} />
                      <Button variant="contained" color="primary">Add Customer</Button>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2 }}>
                      <Typography variant="h6">Log Interaction</Typography>
                      <TextField label="Customer" fullWidth sx={{ my: 1 }} />
                      <TextField label="Notes" fullWidth sx={{ my: 1 }} />
                      <Button variant="contained" color="secondary">Log Interaction</Button>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
            )}
            {module === 'Sales' && (
              <Box sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>Sales</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} item>
                    <Paper sx={{ p: 2 }}>
                      <Typography variant="h6">Create Order</Typography>
                      <TextField label="Customer Name" fullWidth sx={{ my: 1 }} />
                      <TextField label="Product" fullWidth sx={{ my: 1 }} />
                      <TextField label="Quantity" type="number" fullWidth sx={{ my: 1 }} />
                      <Button variant="contained" color="primary">Create Order</Button>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={6} item>
                    <Paper sx={{ p: 2 }}>
                      <Typography variant="h6">Issue Receipt</Typography>
                      <TextField label="Order ID" fullWidth sx={{ my: 1 }} />
                      <TextField label="Amount (KES)" type="number" fullWidth sx={{ my: 1 }} />
                      <Button variant="contained" color="secondary">Issue Receipt</Button>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, mt: 2 }}>
                      <Typography variant="h6">Sales Report</Typography>
                      <Button variant="contained" color="success">Generate Report</Button>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
            )}
            {module === 'Purchasing' && <Box sx={{ p: 4 }}><h2>Purchasing</h2><p>Purchasing module placeholder.</p></Box>}
            {module === 'Analytics' && <Box sx={{ p: 4 }}><h2>Analytics</h2><p>Analytics module placeholder.</p></Box>}
            {module === 'Support' && <Box sx={{ p: 4 }}><h2>Support</h2><p>Support module placeholder.</p></Box>}
          </Box>
        </Box>
      )}
    </Box>
  );
}
  );
}
