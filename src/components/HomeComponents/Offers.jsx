import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import {
  section,
  sectionTitle,
  sectionDesc,
  sectionList,
} from '../../styles/homeStyles';
import offer1 from '../../assets/images/offer-1.jpg';
import offer2 from '../../assets/images/offer-2.jpg';
import offer3 from '../../assets/images/offer-3.jpg';
import offer4 from '../../assets/images/offer-4.jpg';
import { COLORS } from '../../constants/colors';

export default function Offers() {
    const offers=[
        {title:'Get 40% Discount Off just by Register Your Email to Our Website',subTitle:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',img:offer1},
        {title:'Get 40% Discount Off just by Register Your Email to Our Website',subTitle:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',img:offer2},
        {title:'Get 40% Discount Off just by Register Your Email to Our Website',subTitle:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',img:offer3},
        {title:'Get 40% Discount Off just by Register Your Email to Our Website',subTitle:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',img:offer4},

    ]
  return (
     <Box
      sx={{
        ...section,
        bgcolor:'white',
        mb:{xs:'50px',md:'100px'}
      }}
    >
      <Typography sx={sectionTitle}>Latest News</Typography>
      <Typography sx={sectionDesc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </Typography>
      <Box sx={{...sectionList,width:'90%',rowGap: 4}}>
        {offers.map((item) => (
          <Stack
        direction={{ xs: 'column', md: 'row' }} 
        spacing={2}
        alignItems="center"
        sx={{flexBasis:{xs:'100%',md:'48%'}}} >
        {/* الصورة */}
        <Box
          component="img"
          src={item.img}
          alt="image"
          sx={{
            width: { xs: '100%', md: '48%' },
            height: '100%',
          }}
        />

        {/* النص والزرار */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" mb={1}>
            {item.title}
          </Typography>
          <Typography variant="body2" mb={2} sx={{  color: '#B8B7C6',}}> 
            {item.subTitle}
          </Typography>
          <Button variant='outlined' sx={{ color: COLORS.PRIMARY,textTransform: 'none',fontSize:'.9rem',borderRadius:'20px',borderColor:COLORS.PRIMARY}}>
            Get Now 
          </Button>
        </Box>
        </Stack>
        ))}
      </Box>
    </Box>
  )
}
