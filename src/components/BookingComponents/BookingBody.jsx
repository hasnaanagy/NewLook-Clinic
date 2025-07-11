import React from 'react'
import { COLORS } from '../../constants/colors'
import { Box, Typography } from '@mui/material'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import BookingForm from './BookingForm';
export default function BookingBody() {
  return (
    <Box sx={{height:{xs:'140vh',md:'50vh'},py:{xs:2,md:12},backgroundColor:COLORS.SECONDARY,display:'flex',flexDirection:{xs:'column',md:'row'},alignItems:'center',gap:2,position:'relative'}}>
        {/* left side box */}
        <Box sx={{flex:1,height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:{xs:'center',md:'start'},px:{xs:1,md:6},pl:{md:20},py:4,gap:6}}>
            <Typography sx={{fontSize:{xs:'1.2rem',md:'1.8rem'},textAlign:{xs:'center',md:'left'},maxWidth:{xs:'100%',md:'78%'},lineHeight:'1.2',fontFamily: 'Playfair Display',color:COLORS.PRIMARY
          }}>Submit your details to book an appointment</Typography>
            <Typography sx={{width:'90%',fontSize:{xs:'.8rem',md:'1rem'},color:COLORS.FONTCOLOR,textAlign:{xs:'center',md:'left'}}} >
                Our clinic is equipped with modern facilities and advanced medical technology to ensure accurate diagnoses and effective treatments.
            </Typography>
        {/* boxes */}
         <Box sx={{display:'flex',flexDirection:{xs:'column',md:'row'},width:'90%',height:'100%',gap:2}}>
            <Box 
              sx={{
                borderRadius: '8px',
                backgroundColor: 'white',
                flexBasis: { xs: '100%', md: '36%' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: {xs:'center',md:'start'},
                justifyContent:'center',
                p: 2,
                gap: .3,
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            >
              <Box
                sx={{
                  borderRadius: '50%',
                  backgroundColor: COLORS.PRIMARY,
                  p: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mb: 1.5,
                  transition: 'background 0.2s, transform 0.2s',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'black',
                    transform: 'scale(1.18)',
                  },
                }}
              >
                <PhoneOutlinedIcon style={{ color: 'white',width:'18px',height:'18px' }} />
              </Box>
              <Typography
                sx={{
                  fontSize: '.7rem',
                  fontWeight: 700,
                  transition: 'color 0.2s',
                  cursor: 'pointer',
                  '&:hover': {
                    color: COLORS.PRIMARY,
                  },
                }}
              >
                Contact Us
              </Typography>
              <Typography sx={{ fontSize: '.7rem', color: '#8c8c8c', cursor: 'pointer' }}>
                Call us: <span style={{ color: COLORS.PRIMARY, fontWeight: '700' }} >+1890 123 456</span>
              </Typography>
              <Typography sx={{ fontSize: '.7rem', color: '#8c8c8c', cursor: 'pointer' }}>
                Email: support@example.com
              </Typography>
            </Box>
               <Box 
              sx={{
                borderRadius: '8px',
                backgroundColor: 'white',
                flexBasis: { xs: '100%', md: '36%' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: {xs:'center',md:'start'},
                 justifyContent:'center',
                p: 2,
                gap: .3,
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            >
              <Box
                sx={{
                  borderRadius: '50%',
                  backgroundColor: COLORS.PRIMARY,
                  p: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mb: 1.5,
                  transition: 'background 0.2s, transform 0.2s',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'black',
                    transform: 'scale(1.18)',
                  },
                }}
              >
                <CalendarTodayOutlinedIcon style={{ color: 'white',width:'18px',height:'18px' }} />
              </Box>
              <Typography
                sx={{
                  fontSize: '.7rem',
                  fontWeight: 700,
                  transition: 'color 0.2s',
                  cursor: 'pointer',
                  '&:hover': {
                    color: COLORS.PRIMARY,
                  },
                }}
              >
             Opening Hours 
                </Typography>
              <Typography sx={{ fontSize: '.7rem', color: '#8c8c8c', cursor: 'pointer' }}>
                Mon - Sat: 7.00 am - 8.00 pm  
                            </Typography>
              <Typography sx={{ fontSize: '.7rem', color: '#8c8c8c', cursor: 'pointer' }}>
               Sunday: 8.00 am - 6.00 pm
              </Typography>
            </Box>
            </Box>
        </Box>


       {/* form */}

       <BookingForm/>
<Typography
  sx={{
    position: 'absolute',
    bottom: { xs: 10, md: 30 },
    right: { xs: 10, md: 50 },
    fontSize: { xs: '1.8rem', md: '2rem' },
    fontFamily: 'Pacifico, cursive',
    color:COLORS.PRIMARY,
    opacity: 0.8,
    transform: 'rotate(-14deg)',
    pointerEvents: 'none', // علشان ميأثرش على الضغط
    zIndex: 1,
  }}
>
  Book a visit
</Typography>

    </Box>
  )
}
