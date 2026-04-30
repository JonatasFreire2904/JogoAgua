import React from 'react'
export default function Controls({ onRoll, disabled, diceValue, currentPlayer }){
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 items-center mb-2 sm:mb-4 text-center">
      <div>
        <span className="text-xs font-bold text-blue-400 uppercase">Turno</span>
        <div className="text-base sm:text-xl font-bold text-blue-800">Vez de: {currentPlayer?.name || '...'}</div>
      </div>
      <button id="dice-btn" onClick={onRoll} disabled={disabled} className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg sm:text-xl py-3 sm:py-4 px-5 sm:px-8 rounded-full shadow-lg flex items-center justify-center gap-3 sm:gap-4 mx-auto">
        <span>Lançar Dado</span>
        <span className="bg-white text-blue-600 w-11 h-11 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-2xl sm:text-3xl font-black shadow-inner">{diceValue}</span>
      </button>
      <div className="text-blue-800 font-bold uppercase text-xs tracking-widest">Hidrologia</div>
    </div>
  )
}
