import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import branch1 from '../../assets/images/bg-hero-2x.png'; 
import petal1 from '../../assets/images/petal-1.png';
import petal2 from '../../assets/images/petal-2.png';
import branch2 from '../../assets/images/branch-2.png';
import modelImg from '../../assets/images/girl.png'; 
import { COLORS } from '../../constants/colors';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate=useNavigate()

  return (
    <Box
      id='header-section'
      sx={{
        height: {xs:'60vh',md:'100vh'},
        backgroundColor: COLORS.PRIMARY,
        backgroundImage: `url(${branch1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection:{xs:'column',md:'row'},
        gap:{xs:'6',md:'0'},
        px: { xs: 2, md: 10 },
        overflow: 'hidden',
      }}
    >
      {/* Decorative petals */}
      <Box
        component="img"
        src={petal1}
        alt=""
        sx={{
          position: 'absolute',
          top: 40,
          left: 60,
          width: 60,
          opacity: 0.8,
          zIndex: 1,
        }}
      />
      <Box
        component="img"
        src={petal2}
        alt=""
        sx={{
          position: 'absolute',
          top: 40,
          right: 120,
          width: 60,
          opacity: 0.8,
          zIndex: 1,
        }}
      />

      {/* Main Content - Responsive Order */}
      <Box
        sx={{
          zIndex: 2,
          width: '100%',
          maxWidth: { xs: '100%', md: '50%' },
          textAlign: { xs: 'center', md: 'left' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'center',
          mt: { xs: 4, md: 0 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '3rem' },
            fontFamily: 'Playfair Display',
            mb: 2,
            lineHeight: 1.1,
            color: 'white',
          }}
        >
          Care Your Skin,<br />Care Your Beauty
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontSize: { xs: '.85rem', md: '.9rem' },
            color: '#fff',
            maxWidth: 500,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </Typography>
        <Button
          variant="contained"
        onClick={()=>{navigate('/booking'),console.log('hello')}}
          sx={{
            background: '#fff',
            color: COLORS.PRIMARY,
            fontWeight: 500,
            px: 4,
            py: 1.5,
            fontSize: '1rem',
            borderRadius: 0,
            boxShadow: 'none',
            mb: { xs: 2, md: 0 },
            '&:hover': { background: COLORS.ACCENT },
          }}
        >
          Book Now
        </Button>       
      </Box>

      {/* Model Image at Bottom on Mobile, Right on Desktop */}
      <Box
        sx={{
          position: 'relative',
          width: { xs: '80%', sm: '60%', md: '50%' },
          maxWidth: 400,
          mt: { xs: 4, md: 0 },
          alignSelf: { xs: 'center', md: 'flex-end' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <Box
          component="img"
          src={modelImg}
          alt="Model"
          sx={{
            width: '100%',
            objectFit: 'cover',
            zIndex: 2,
            position: 'relative',
            mb: { xs: 0, md: 0 },
          }}
        />
        {/* Decorative branch overlay (desktop only) */}
        <Box
          component="img"
          src={branch2}
          alt=""
          sx={{
            display: { xs: 'none', md: 'block' },
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '50%',
            zIndex: 3,
          }}
        />
      </Box>
    </Box>
  );
}
