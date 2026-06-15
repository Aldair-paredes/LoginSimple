import React from 'react';

export default function Button({ children, onClick, type = 'button', variant = 'primary', className = '' }) {
  const baseStyles = "px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-zinc-950 text-white hover:bg-zinc-800 focus:ring-zinc-950",
    secondary: "bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50 focus:ring-zinc-200",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}