// src/pages/NotFound.jsx
import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h3" component="h1">
        404 - Page Not Found
      </Typography>
      <Typography component="p">
        The page you’re looking for doesn’t exist.
      </Typography>
      <Link to="/">Go back to Home</Link>
    </Box>
  );
};

export default NotFound;
