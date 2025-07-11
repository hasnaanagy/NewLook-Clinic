import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import petal1 from '../../assets/images/petal-1.png';
import petal2 from '../../assets/images/petal-2.png';
import storyBg from '../../assets/images/storyBg.jpg';
import storyModel from '../../assets/images/storyModel.jpg';
import { COLORS } from '../../constants/colors';

export default function OurStory() {
  return (
    <Box
        id='story'
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: 4, md: 6 },
        width: '100%',
        height: '70vh',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'space-between', 
        backgroundImage: `url(${storyBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'left center',
        mb:{xs:'70px',md:'130px'}
      }}
    >
      {/* Main image */}
      <Box
        component="img"
        src={storyModel}
        alt="main"
        sx={{
          flex: 1,
          width: { xs: '100%', md: '60%' },
          maxWidth: {xs:200,md:380},
          boxShadow: 3,
          position: { xs: 'relative', md: 'absolute' },
          top: { md: '50%' ,xs:'10%'},
          left: { md: '26%' }, 
          transform: { md: 'translate(-50%, -50%)' }, 
          zIndex: 2,
          height: { xs: '60%', md: '120%' },
          objectFit: 'cover',
          flexBasis: { xs: '100%', md: '48%' },
        }}
      />

      {/* Decorative petals */}
      <Box
        component="img"
        src={petal1}
        alt="petal"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 40,
          opacity: 0.7,
          zIndex: 4,
        }}
      />
      <Box
        component="img"
        src={petal2}
        alt="petal"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 30,
          width: 40,
          opacity: 0.7,
          zIndex: 4,
        }}
      />

      {/* Right text and button */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: { xs: 'center', md: 'flex-start' },
          px: { xs: 2, md: 4 },
          py: { xs: 4, md: 0 },
          minHeight: { xs: 240, md: '100%' },
          position: 'relative',
          ml: { xs: '0px', md: '600px' },
          flexBasis: { xs: '100%', md: '48%' },
          zIndex: 3, // Ensure text stays above background
          textAlign: { xs: 'center', md: 'left' }, // Center text on xs
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'Playfair Display',
            fontWeight: 700,
            color: '#fff',
            fontSize: { xs: '1.6rem', md: '3rem' },
            mb: 3,
            lineHeight: 1.1,
          }}
        >
          Our Story
        </Typography>
        <Typography
          sx={{
            color: '#fff',
            fontSize: { xs: '.95rem', md: '1.1rem' },
            mb: 4,
            maxWidth: 600,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit.
        </Typography>
      </Box>
    </Box>
  );
}