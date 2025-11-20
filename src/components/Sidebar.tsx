import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon /> },
  { text: 'Accounting', icon: <BarChartIcon /> },
  { text: 'Inventory', icon: <WorkIcon /> },
  { text: 'Manufacturing', icon: <SettingsIcon /> },
  { text: 'HR Management', icon: <PeopleIcon /> },
  { text: 'CRM', icon: <PeopleIcon /> },
  { text: 'Sales', icon: <BarChartIcon /> },
  { text: 'Purchasing', icon: <WorkIcon /> },
  { text: 'Analytics', icon: <BarChartIcon /> },
  { text: 'Support', icon: <SettingsIcon /> },
];

export default function Sidebar({ onSelect }: { onSelect: (module: string) => void }) {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={item.text} onClick={() => onSelect(item.text)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
