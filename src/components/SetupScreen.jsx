import React, { useState } from 'react'
import { pawnColors } from '../gameData'

export default function SetupScreen({ onStart, onShowRules }){
  const [names, setNames] = useState(['Jogador 1','Jogador 2'])

  const setName = (i, v) => setNames(n => n.map((x,idx) => idx===i ? v : x))
  const add = () => { if(names.length<6) setNames(n => [...n, `Jogador ${n.length+1}`]) }
  const start = () => {
    const players = names.filter(n=>n.trim()).map((name,i)=>({ id:i, name, color: pawnColors[i]}))
    if(players.length < 2) return alert('Mínimo 2 jogadores')
    onStart(players)
  }

  return (
    <div className="fixed inset-0 bg-blue-100 z-[100] flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full text-center border-4 border-blue-200">
        <h1 className="text-4xl font-black text-blue-600 mb-4">💧 Jogo da Água 💧</h1>
        <button
          onClick={() => onShowRules && onShowRules()}
          className="text-sm text-blue-600 font-bold mb-4 hover:underline"
        >
          Ver Regras do Jogo
        </button>
        <div className="space-y-3 mb-6">
          {names.map((n,i)=> (
            <input key={i} value={n} onChange={e=>setName(i,e.target.value)} className="w-full p-3 rounded-xl border-2 border-blue-200" />
          ))}
        </div>
        <button onClick={add} className="text-sm text-blue-600 font-bold mb-6 hover:underline block mx-auto">+ Adicionar Jogador</button>
        <button onClick={start} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg text-xl">Iniciar Jogo</button>
      </div>
    </div>
  )
}
