import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarComponent from '../components/shared/NavbarComponent';
import FooterComponent from '../components/shared/FooterComponent';
import { Box } from '@mui/material';

export function SharedLayout() {
  return (
    <>
      <NavbarComponent />
      <Box >
        <Outlet />
      </Box>
      <FooterComponent />
    </>
  );
}
