import React from 'react';
import logo from './logo.svg';
import Card from '@mui/material/Card';
import './App.css';
import { Button, CardActions, CardContent, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <img src={logo} className="App-logo" alt="logo" />
            <Typography variant="body2">
            Healthcare, meet the operating system designed just for you.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant='outlined'>Learn More</Button>
          </CardActions>
        </Card>
      </header>
    </div>
  );
}

export default App;
