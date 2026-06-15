import React from 'react';

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Fondo translúcido */}
      <div 
        className="fixed inset-0 bg-zinc-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Caja del Modal */}
      <div className="bg-white border border-zinc-100 rounded-2xl max-w-md w-full p-6 shadow-2xl relative z-10">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-3 mb-4">
          <h3 className="text-lg font-bold text-zinc-900">{title}</h3>
          <button 
            onClick={onClose}
            className="text-zinc-400 hover:text-zinc-600 p-1 rounded-lg hover:bg-zinc-50 transition-colors"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}