import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Box from '@mui/material/Box';




import DashboardCards from './components/DashboardCards';
import DashboardChart from './components/DashboardChart';
import DashboardTable from './components/DashboardTable';
import UserManagement from './components/UserManagement';

export default function App() {
  const [page, setPage] = useState<'landing' | 'login' | 'dashboard'>('landing');

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
          <Sidebar />
          <Box sx={{ flexGrow: 1 }}>
            <Navbar />
            <DashboardCards />
            <DashboardChart />
            <DashboardTable />
            <UserManagement />
          </Box>
        </Box>
      )}
    </Box>
  );
}
  );
}
