import React from 'react';

export default function Input({ label, type = 'text', value, onChange, placeholder, required = false }) {
  return (
    <div className="flex flex-col space-y-1.5 w-full">
      {label && (
        <label className="text-sm font-semibold text-zinc-700 tracking-wide">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-2.5 text-zinc-900 bg-white border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder-zinc-400 shadow-sm text-sm"
      />
    </div>
  );
}