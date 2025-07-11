import { COLORS } from '../constants/colors';

export const section = {
  backgroundColor: COLORS.SECONDARY,
  backgroundSize: 'contain',
  backgroundPosition: 'top center',
  backgroundRepeat: 'no-repeat',
  py: { xs: 6, md: 12 },
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 4,
};

export const sectionTitle = {
  fontWeight: 700,
  fontSize: { xs: '.8rem', md: '2rem' },
  color: COLORS.PRIMARY,
  fontFamily: 'Playfair Display',
};

export const sectionDesc = {
  width: { xs: '90%', md: '40%' },
  textAlign: 'center',
  fontSize: { xs: '.8rem', md: '1rem' },
  color: '#B8B7C6',
  mb: 4,
};

export const sectionList = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  rowGap: 8,
  columnGap: 3,
  width: '96%',
};

export const sectionCard = (img, flexBasis) => ({
  flexBasis: flexBasis,
  height: '260px',
  backgroundImage: `url(${img})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  position: 'relative',
});

export const sectionInfo = {
  position: 'absolute',
  bottom: -30,
  left: '60%',
  transform: 'translateX(-50%)',
  bgcolor: 'white',
  px: 3,
  py: 1,
  width: '50%',
  boxShadow: '0px 5px 15px rgba(0,0,0,0.15)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
};

export const sectionInfoTitle = {
  fontWeight: 600,
  fontSize: '1.1rem',
  fontFamily: 'Playfair Display',
};

export const sectionInfoBtn = {
  fontSize: '.75rem',
  color: COLORS.PRIMARY,
  textTransform: 'none',
  background: 'none',
  border: 'none',
  p: 0,
  boxShadow: 'none',
  minWidth: 0,
  '&:hover': {
    background: 'none',
    boxShadow: 'none',
  },
};
