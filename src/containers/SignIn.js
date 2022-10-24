import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import {
  signInAsync,
  selectErrorSignUp,
  selectUserCredential,
  setCookie,
  removeCookie,
} from '../reducers/userSlice';

function SignIn() {
  const userCredential = useSelector(selectUserCredential);
  const errorSignUp = useSelector(selectErrorSignUp);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    dispatch(signInAsync({ email, password }));
    const user = userCredential;
    console.log(user);

    if (user) {
      // dispatch(removeCookie('user'));
      // dispatch(setCookie('user'));
      navigate('/');
    }
  };

  return (
    <Box>
      <Navbar />
      <Typography component='h1' variant='h5'>
        Sign in
      </Typography>
      <Box component='form' noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              sx={{ backgroundColor: '#1E293B' }}
              variant='filled'
              required
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ backgroundColor: '#1E293B' }}
              variant='filled'
              required
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='new-password'
            />
          </Grid>
        </Grid>
        <Typography color='red'>{errorSignUp}</Typography>
        <Button
          type='submit'
          variant='contained'
          sx={{ mt: 3, mb: 2, backgroundColor: '#334155' }}
        >
          Sign in
        </Button>
        <Grid container justifyContent='center'>
          <Grid>
            <Link
              className='sign-in-ask'
              to='/sign_in'
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              Don't have an account? <br />
              <Button
                variant='contained'
                sx={{ mt: 3, mb: 2, backgroundColor: '#334155' }}
              >
                Sign up
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default SignIn;
