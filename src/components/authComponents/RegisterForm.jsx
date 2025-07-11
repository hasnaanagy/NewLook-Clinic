import React, { useState } from 'react';
import { COLORS } from '../../constants/colors';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';
import { useRegisterMutation } from '../../redux/slices/apiSlice';

export default function RegisterForm() {
    const [mobile,setMobile]=useState("");
    const navigate = useNavigate();
  const [register, { error, isLoading, isSuccess, isError }] = useRegisterMutation();


const handleChange=(e)=>{
    console.log(e.target.value)
    setMobile(e.target.value)
}
      const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
         let response=await register(mobile).unwrap()
         console.log(response)
         navigate('/login')
        }catch(err){
        console.log('Register Fialed',err)
        }
      }
  return (
    <Box
      sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${COLORS.PRIMARY} 0%, ${COLORS.GREY} 100%)`,
        px:{xs:4,md:8}

      }}
    >
        <Box
          sx={{
            bgcolor: '#fff',
            borderRadius: 3,
            boxShadow: 3,
            px: 4,
            py: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={logo} alt="New Look Center Logo" style={{ width: 100, height: 100, borderRadius: '50%', marginBottom: 16, objectFit: 'cover', border: `2px solid ${COLORS.PRIMARY}` }} />
          <Typography variant="h5" fontWeight={500} color={COLORS.PRIMARY} gutterBottom align="center">
            Create your account
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center" mb={2}>
            Please fill in your details to sign up for New Look Center
          </Typography>
            <Box
                      component="form"
                      onSubmit={handleSubmit}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        alignItems: 'center',
                        width: '100%',
                      }}
                    >
           <TextField
                      label="mobile"
                      name="mobile"
                      type="phone"
                      value={mobile}
                      onChange={handleChange}
                      required
                      fullWidth
                      variant="standard"
                      InputProps={{
                        disableUnderline: false,
                        sx: {
                          padding: '10px 0',
                          '&:hover:not(.Mui-disabled):before': {
                            borderBottom: `1px solid ${COLORS.PRIMARY}`,
                          },
                          '&:after': {
                            borderBottom: `1px solid ${COLORS.PRIMARY}`,
                          },
                          '&:before': {
                            borderBottom: `1px solid ${COLORS.PRIMARY}`,
                          },
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          color: COLORS.PRIMARY,
                          '&.Mui-focused': {
                            color: COLORS.PRIMARY,
                          },
                        },
                      }}
                    />
                         <Button
            type="submit"
            variant="outlined"
            sx={{
              borderRadius: '16px',
              color: COLORS.PRIMARY,
              borderColor: COLORS.PRIMARY,
              fontWeight: 600,
              mt: 2,
              width: '70%',
              textTransform: 'none',
              transition: 'background 0.2s, color 0.2s',
              '&:hover': {
                background: COLORS.PRIMARY,
                color: '#fff',
                borderColor: COLORS.PRIMARY,
              },
            }}
          >
            {isLoading?'Loading...':'Register'}
          </Button>
          {isError && (
            <Typography
              variant="body2"
              color="error"
              align="center"
              mt={1}
            >
              {typeof error?.data === 'string'
                ? 'Register failed. Please check your credentials.'
                : error?.data?.message || 'Register failed. Please try again.'}
            </Typography>
          )}
          
          {isSuccess && (
            <Typography
              variant="body2"
              color="success.main"
              align="center"
              mt={1}
            >
              Registered successfully! Redirecting...
            </Typography>
          )}
                  </Box>

          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            mt={2}
          >
            Already have an account?{' '}
            <span
              style={{ color: COLORS.PRIMARY, cursor: 'pointer' }}
              onClick={() => navigate('/login')}
            >
              Login
            </span>
          </Typography>
     
        </Box>
    </Box>
  );
}
