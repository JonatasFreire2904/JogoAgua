import React from 'react'

export default function Header({ onShowRules }) {
  return (
    <header className="bg-blue-600 px-6 py-4 text-white">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-wider">💧 Jogo da Água 💧</h1>
        <button
          onClick={onShowRules}
          className="mt-1 sm:mt-0 bg-white/10 hover:bg-white/20 border border-white/40 text-sm md:text-base font-bold px-4 py-2 rounded-full"
        >
          Regras
        </button>
      </div>
    </header>
  )
}
