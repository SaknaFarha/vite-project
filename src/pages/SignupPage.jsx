import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { email, password };
    try {
      const response = await axios.post('http://localhost:8000/api/register', newUser);
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Signup
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
          Signup
        </Button>
      </form>

      {/* Login link at the bottom */}
      <Typography variant="body2" align="center" marginTop={2}>
        Already have an account?{' '}
        <Link to="/" style={{ textDecoration: 'none' }}>
          Login here
        </Link>
      </Typography>
    </Container>
  );
};

export default SignupPage;
