import React from 'react';
import { Box, Typography, Button, Grid, IconButton, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import flower from '../../assets/images/branch-2.png';

import { COLORS } from '../../constants/colors'; 

export default function FooterComponent() {
  return (
    <Box sx={{height:'60vh',backgroundColor:COLORS.PRIMARY,display:'flex',flexDirection:'column', alignItems:'center',position:'relative'}}>
      <Box sx={{display:'flex',justifyContent:'center',gap:4,py:2,borderBottom:`1px solid rgb(236, 179, 142)`,width:'100%'}}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: 8 }}>
          <FacebookIcon sx={{ color: 'white' }} />
          <Typography sx={{ color: 'white', textTransform: 'none',fontSize:'.8rem', borderBottom: 'none' }}>Facebook</Typography>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: 8 }}>
          <InstagramIcon sx={{ color: 'white' }} />
          <Typography sx={{ color: 'white', textTransform: 'none',fontSize:'.8rem', borderBottom: 'none' }}>Instagram</Typography>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: 8 }}>
          <TwitterIcon sx={{ color: 'white' }} />
          <Typography sx={{ color: 'white', textTransform: 'none', fontSize:'.8rem', borderBottom: 'none' }}>Twitter</Typography>
        </a>
      </Box>

      <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100%'}}>
                        <Typography sx={{ color: 'white', textTransform: 'none',fontWeight: 500,  fontSize: { xs: '1.2rem', md: '2.2rem' },fontFamily: 'Playfair Display',}}>New Look Center</Typography>

            <Box sx={{display:'flex',justifyContent:'center',gap:2,py:2,width:'100%',}}>
        <a href="/"   style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Typography sx={{ color: 'white', textTransform: 'none',fontSize:'.7rem', borderBottom: 'none',fontFamily: 'Playfair Display' }}>Home</Typography>
        </a>
        <a href="#services"  style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Typography sx={{ color: 'white', textTransform: 'none',fontSize:'.7rem', borderBottom: 'none',fontFamily: 'Playfair Display' }}>Services</Typography>
        </a>
        <a href="#doctors"   style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Typography sx={{ color: 'white', textTransform: 'none', fontSize:'.7rem', borderBottom: 'none',fontFamily: 'Playfair Display' }}>Doctors</Typography>
        </a>
           <a href="#story"   style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Typography sx={{ color: 'white', textTransform: 'none', fontSize:'.7rem', borderBottom: 'none',fontFamily: 'Playfair Display' }}>Our Story</Typography>
        </a>
      </Box>
            <Typography sx={{ mt:'30px',color: 'white', textTransform: 'none', fontSize:'.7rem' }}>© 2021 Skinera by Jegtheme. All Right Reserved</Typography>

      </Box>
      <Box
          component="img"
          src={flower}
          alt=""
          sx={{
            display: { xs: 'none', md: 'block' },
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '18%',
            zIndex: 3,
          }}
        />
          <Box
          component="img"
          src={flower}
          alt=""
          sx={{
            display: { xs: 'none', md: 'block' },
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '18%',
            transform:'scaleX(-1)',
            zIndex: 3,
          }}
        />
    </Box>
  );
}