import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { COLORS } from '../../constants/colors';
import logo from '../../assets/images/logo.jpg';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../redux/slices/apiSlice';

export default function LoginForm() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();
  const [login, { error, isLoading, isSuccess, isError }] = useLoginMutation();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit =async (e) => {
    console.log('hello')
    e.preventDefault();
    try{
    let response=await login(form).unwrap();
      localStorage.setItem('token', response.token);
      navigate('/')
    }catch(err){
      console.log('Login Fialed',err)
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${COLORS.PRIMARY} 0%, ${COLORS.GREY} 100%)`,
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        px:{xs:4,md:8},
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
            height:{md:'80vh'}
          }}
        >
          <img
            src={logo}
            alt="New Look Center Logo"
            style={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              marginBottom: 16,
              objectFit: 'cover',
              border: `2px solid ${COLORS.PRIMARY}`,
            }}
          />
          <Typography
            variant="h5"
            fontWeight={500}
            color={COLORS.PRIMARY}
            gutterBottom
            align="center"
          >
            Welcome to New Look Center
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            mb={2}
          >
            Please enter your details to login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: '100%',
            }}
          >
            <TextField
              label="Username"
              name="username"
              type="text"
              value={form.username}
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

            <TextField
              label="Password"
              name="password"
              type="password"
              value={form.password}
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
  disabled={isLoading}
  sx={{
    borderRadius: '16px',
    color: COLORS.PRIMARY,
    borderColor: COLORS.PRIMARY,
    fontWeight: 600,
    mt: 2,
    width: '100%',
    textTransform: 'none',
    transition: 'background 0.2s, color 0.2s',
    '&:hover': {
      background: COLORS.PRIMARY,
      color: '#fff',
      borderColor: COLORS.PRIMARY,
    },
  }}
>
  {isLoading ? 'Loading...' : 'Login'}
</Button>

          </Box>

          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            mt={2}
          >
            Don't have an account?{' '}
            <span
              style={{ color: COLORS.PRIMARY, cursor: 'pointer' }}
              onClick={() => navigate('/register')}
            >
              Sign Up
            </span>
          </Typography>
        </Box>
        {isLoading && <Typography color="primary">Logging in...</Typography>}

{isError && (
  <Typography
    variant="body2"
    color="error"
    align="center"
    mt={1}
  >
    {typeof error?.data === 'string'
      ? 'Login failed. Please check your credentials.'
      : error?.data?.message || 'Login failed. Please try again.'}
  </Typography>
)}

{isSuccess && (
  <Typography
    variant="body2"
    color="success.main"
    align="center"
    mt={1}
  >
    Login successful! Redirecting...
  </Typography>
)}
    </Box>
  );
}
