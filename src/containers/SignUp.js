import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectErrorSignUp, signUp, signUpAsync } from '../reducers/userSlice';

function SignUp() {
  const errorSignUp = useSelector(selectErrorSignUp);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    setCookie('Email', email, {path: '/'})
    setCookie('Password', password, { path: '/' })
    
    const { user } = dispatch(signUpAsync({ email, password }));
    dispatch(signUp({payload: {userCredential: user.email}}))

    if (user) {
      setCookie('Token', user.stsTokenManager, {path:'/'} )
      navigate('/');
    }
  };

  return (
    <Box className='register-container'>
      <Typography component='h1' variant='h5'>
        Sign up
      </Typography>
      <Box component='form' noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              sx={{ color: 'black' }}
              required
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              variant='filled'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='new-password'
              variant='filled'
            />
          </Grid>
        </Grid>
        <Typography color='red'>{{errorSignUp.message}}</Typography>
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2 }}>
          Sign Up
        </Button>
        <Grid container justifyContent='flex-end'>
          <Grid item>
            <Link to='/sign_in'>Already have an account? Sign in</Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default SignUp;
