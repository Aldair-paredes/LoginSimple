import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  const login = (email) => {
    setUser({ email });
    setShowWelcomeModal(true);
  };

  const logout = () => {
    setUser(null);
    setShowWelcomeModal(false);
  };

  return (
    <AuthContext.Provider value={{ user, showWelcomeModal, setShowWelcomeModal, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}