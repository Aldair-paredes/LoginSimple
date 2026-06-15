import React from 'react';
import { useAuth } from '../hooks/useAuth';
import Modal from '../reusable/Modal';
import Button from '../reusable/Button';

export default function WelcomeModal() {
  const { user, showWelcomeModal, setShowWelcomeModal } = useAuth();

  return (
    <Modal
      isOpen={showWelcomeModal}
      onClose={() => setShowWelcomeModal(false)}
      title="¡Acceso Autorizado!"
    >
      <div className="text-center space-y-4 py-2">
        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
          ✓
        </div>
        
        <div className="space-y-1">
          <h4 className="font-bold text-zinc-900 text-lg">¡Bienvenido al sistema!</h4>
          <p className="text-sm text-zinc-500">
            Has iniciado sesión de manera correcta como: <br />
            <strong className="text-zinc-700">{user?.email}</strong>
          </p>
        </div>

        <Button 
          variant="secondary" 
          className="w-full mt-2" 
          onClick={() => setShowWelcomeModal(false)}
        >
          Entrar al Dashboard
        </Button>
      </div>
    </Modal>
  );
}