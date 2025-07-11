import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import blurBg from '../../assets/images/background-blur.png';
import { COLORS } from '../../constants/colors';
import blog1 from '../../assets/images/blog-1.jpg'
import blog2 from '../../assets/images/blog-2.jpg'
import blog3 from '../../assets/images/blog-3.jpg'
import blog4 from '../../assets/images/blog-4.jpg'
import blog5 from '../../assets/images/blog-5.jpg'


export default function Blog() {
  return (
    <Box sx={{ position: 'relative', height: { xs: '18vh', sm: '24vh', md: '100vh' }, minHeight: { xs: 120, sm: 180, md: 600 }, overflow: 'hidden', py: { xs: 0, md: 20 } }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          backgroundImage:{xs:'none',md:`url(${blurBg})`},
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat:'no-repeat',
          opacity:'35%',
          zIndex: 1,
        }}
      />

      <Stack
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          px: { xs: 2, md: 10 },
        }}
      >
        {/* Top box */}
      <Box sx={{width:'94%',display:'flex',flexDirection:'column',gap: { xs: 0, md: 6 }}}>
        {/* Only Typography on xs, Typography with images on md+ */}
        <Box sx={{ width: '100%' }}>
          {/* xs: only Typography */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <Typography sx={{ color: COLORS.PRIMARY, fontSize: { xs: '1rem' }, textAlign: 'center', fontWeight: 600, fontFamily: 'Playfair Display', mb: 2 }}>
              More You Care About Yourself Makes You More Beautiful
            </Typography>
          </Box>
          {/* md+: Typography with images */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center', gap: 6, width: '100%' }}>
            <Box
              component="img"
              src={blog5}
              alt=""
              sx={{
                width: '26%',
                transition: 'transform 0.3s cubic-bezier(.4,2,.6,1)',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.08)',
                  zIndex: 3,
                },
              }}
            />
            <Typography sx={{ color: COLORS.PRIMARY, fontSize: '2rem', textAlign: 'center', fontWeight: 600, fontFamily: 'Playfair Display', mb: 2 }}>
              More You Care About Yourself Makes You More Beautiful
            </Typography>
            <Box
              component="img"
              src={blog4}
              alt=""
              sx={{
                width: '26%',
                position: 'relative',
                top: -30,
                transition: 'transform 0.3s cubic-bezier(.4,2,.6,1)',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.08)',
                  zIndex: 3,
                },
              }}
            />
          </Box>
        </Box>
      
        {/* Bottom box */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: { xs: 2, md: 6 } }}>
          <Box
            component="img"
            src={blog3}
            alt=""
            sx={{
              display:{xs:'none',md:'flex'},
              width: { xs: '10%', md: '28%' },
              position: 'relative',
              top: -30,
              transition: 'transform 0.3s cubic-bezier(.4,2,.6,1)',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.08)',
                zIndex: 3,
              },
            }}
          />
          <Box
            component="img"
            src={blog2}
            alt=""
            sx={{
             display:{xs:'none',md:'flex'},
              width: { xs: '10%', md: '26%' },
              transition: 'transform 0.3s cubic-bezier(.4,2,.6,1)',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.08)',
                zIndex: 3,
              },
            }}
          />
          <Box
            component="img"
            src={blog1}
            alt=""
            sx={{
             display:{xs:'none',md:'flex'},
              width: { xs: '10%', md: '26%' },
              position: 'relative',
              top: -40,
              transition: 'transform 0.3s cubic-bezier(.4,2,.6,1)',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.08)',
                zIndex: 3,
              },
            }}
          />
        </Box>
                </Box>  

      </Stack>
    </Box>
  );
}
