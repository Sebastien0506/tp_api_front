// src/components/LoginForm.js
import React, { useState } from 'react';
import { useLoginMutation } from '../../services/authApi';
import { useDispatch } from 'react-redux';


function LoginForm() : React.FC {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [login] = useLoginMutation();

  const handleSubmit = async (e : React.FormEvent) => {
    e.preventDefault();
    console.log("bonjour", email, password)

    try {
      const response  = await login({ email, password });
      
      console.log(response);
    } catch (error) {
      console.error('Failed to login:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email}/>
      <input type="password" placeholder='passwod' onChange={(e) => setPassword(e.target.value)} value={password}/>
      <button>Inscription</button>
    </form>
  );
}

export default LoginForm;