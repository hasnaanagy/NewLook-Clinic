import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import serviceBg from '../../assets/images/service-bg.png';

import {
  section,
  sectionTitle,
  sectionDesc,
  sectionList,
  sectionCard,
  sectionInfo,
  sectionInfoTitle,
  sectionInfoBtn,
} from '../../styles/homeStyles';

export default function Services({title,subTitle,btnText,data:services}) {

  return (
    <Box
    id='services'
      sx={{
        ...section,
        backgroundImage: `url(${serviceBg})`,
      }}
    >
      <Typography sx={sectionTitle}>{title}</Typography>
      {subTitle&&<Typography sx={sectionDesc}>
        {subTitle}
      </Typography>}
      <Box sx={sectionList}>
        {services.map((item) => (
          <Box key={item.name} sx={sectionCard(item.img,{ xs: '100%', sm: '48%', md: '30%' })}>
            <Box sx={sectionInfo}>
              <Typography sx={sectionInfoTitle}>{item.name}</Typography>
              <Button sx={sectionInfoBtn} endIcon={<span>→</span>}>
                {btnText}
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
