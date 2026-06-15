import { useState } from 'react';
import { useAuth } from './useAuth';

export function useLoginForm() {
  const { login } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      login(email);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit
  };
}