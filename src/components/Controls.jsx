import React from 'react'
export default function Controls({ onRoll, disabled, diceValue, currentPlayer }){
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-4 text-center">
      <div>
        <span className="text-xs font-bold text-blue-400 uppercase">Turno</span>
        <div className="text-xl font-bold text-blue-800">Vez de: {currentPlayer?.name || '...'}</div>
      </div>
      <button id="dice-btn" onClick={onRoll} disabled={disabled} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center justify-center gap-3 mx-auto">
        <span>Lançar Dado</span>
        <span className="bg-white text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-xl">{diceValue}</span>
      </button>
      <div className="text-blue-800 font-bold uppercase text-xs tracking-widest">Hidrologia</div>
    </div>
  )
}
