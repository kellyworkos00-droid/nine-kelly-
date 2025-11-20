import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';

const stats = [
  { label: 'Employees', value: 96, icon: <PeopleIcon color="primary" /> },
  { label: 'Projects', value: 356, icon: <WorkIcon color="primary" /> },
  { label: 'Payroll', value: '$96k', icon: <AttachMoneyIcon color="primary" /> },
  { label: 'Reports', value: 59, icon: <BarChartIcon color="primary" /> },
];

export default function DashboardCards() {
  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {stats.map((stat) => (
        <Grid item xs={12} sm={6} md={3} key={stat.label}>
          <Card>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
              {stat.icon}
              <Typography variant="h6" sx={{ ml: 2 }}>
                {stat.label}
              </Typography>
              <Typography variant="h5" sx={{ ml: 'auto' }}>
                {stat.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
