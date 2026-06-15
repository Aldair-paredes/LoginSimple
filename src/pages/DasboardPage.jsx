import React from 'react';
import { useAuth } from '../hooks/useAuth';
import WelcomeModal from './WelcomeModal'; 
import Button from '../reusable/Button';

export default function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 flex flex-col">
      
      {/* NAVBAR */}
      <header className="bg-white border-b border-zinc-200 px-6 py-4 shadow-sm flex items-center justify-between">
        <h1 className="text-xl font-black tracking-tight">System<span className="text-amber-500 font-medium">Dashboard</span></h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-zinc-600 font-medium">
            Usuario: <strong className="text-zinc-900">{user?.email}</strong>
          </span>
          <Button variant="danger" onClick={logout}>
            Cerrar sesión
          </Button>
        </div>
      </header>

      {/* DASHBOARD */}
      <main className="flex-1 p-6 max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm h-32 flex flex-col justify-between">
          <h3 className="text-zinc-400 text-sm font-bold uppercase tracking-wider">Métrica de Control A</h3>
          <span className="text-3xl font-black">1,248</span>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm h-32 flex flex-col justify-between">
          <h3 className="text-zinc-400 text-sm font-bold uppercase tracking-wider">Balance Comercial B</h3>
          <span className="text-3xl font-black">$45,210</span>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm h-32 flex flex-col justify-between">
          <h3 className="text-zinc-400 text-sm font-bold uppercase tracking-wider">Rendimiento General C</h3>
          <span className="text-3xl font-black">98.4%</span>
        </div>
      </main>

      <WelcomeModal />

    </div>
  );
}