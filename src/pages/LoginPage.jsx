import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    try {
      const response = await axios.post('http://localhost:8000/api/login', user);
      console.log(response.data);
      // Save token or user data
      localStorage.setItem('token', response.data.token); // Adjust based on your backend response
      navigate('/dashboard'); // Redirect to another page if login is successful
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>

      {/* Signup link at the bottom */}
      <Typography variant="body2" align="center" marginTop={2}>
        Don't have an account?{' '}
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          Sign up here
        </Link>
      </Typography>
    </Container>
  );
};

export default LoginPage;
