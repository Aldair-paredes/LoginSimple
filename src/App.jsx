import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './hooks/useAuth';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function NavigationRouter() {
  const { user } = useAuth();

  // Si el usuario existe en el estado global (Context), mostramos el Dashboard.
  // Si es null (no ha iniciado sesión o cerró sesión), mostramos el Login.
  return user ? <DashboardPage /> : <LoginPage />;
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationRouter />
    </AuthProvider>
  );
}