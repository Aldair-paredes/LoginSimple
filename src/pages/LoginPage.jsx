import React from 'react';
import { useLoginForm } from '../hooks/useLoginForm';
import Input from '../reusable/Input';
import Button from '../reusable/Button';

export default function LoginPage() {
  const { email, setEmail, password, setPassword, handleSubmit } = useLoginForm();

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
      <div className="bg-white border border-zinc-200 p-8 rounded-2xl max-w-md w-full shadow-xl space-y-6">
        
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-black tracking-tight text-zinc-900">Iniciar Sesión</h1>
          <p className="text-sm text-zinc-500">Ingresa tus credenciales para acceder</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Correo electrónico"
            type="email"
            placeholder="correo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="Contraseña"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" className="w-full">
            Iniciar Sesión
          </Button>
        </form>

      </div>
    </div>
  );
}