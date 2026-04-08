import React, { useEffect, useState } from 'react'

export default function VictoryModal({ open, playerName, onClose }) {
  const [drops, setDrops] = useState([])

  useEffect(() => {
    if (!open) return
    
    // Criar gotas animadas
    const newDrops = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 1,
    }))
    setDrops(newDrops)
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
      {/* Gotas caindo */}
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="fixed w-6 h-8 text-4xl pointer-events-none animate-bounce"
          style={{
            left: `${drop.left}%`,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
          }}
        >
          💧
        </div>
      ))}

      {/* Modal de Vitória */}
      <div className="bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl p-12 max-w-md w-full shadow-2xl border-4 border-white relative overflow-hidden">
        {/* Fundo com padrão de gotas */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-4 left-4 text-6xl">💧</div>
          <div className="absolute bottom-6 right-8 text-5xl">💧</div>
          <div className="absolute top-1/2 right-4 text-4xl">💧</div>
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 text-center">
          {/* Emoji celebração */}
          <div className="text-7xl mb-4 animate-bounce">🏆</div>

          {/* Título */}
          <h2 className="text-4xl font-black text-white mb-2">PARABÉNS!</h2>

          {/* Nome do jogador */}
          <p className="text-2xl font-bold text-white mb-6">{playerName}</p>

          {/* Mensagem */}
          <p className="text-lg font-bold text-white drop-shadow-lg mb-8">
            Você venceu a partida! 🎉
          </p>

          {/* Decoração de gotas */}
          <div className="flex justify-center gap-3 mb-8">
            <span className="text-3xl animate-bounce" style={{ animationDelay: '0s' }}>💧</span>
            <span className="text-3xl animate-bounce" style={{ animationDelay: '0.2s' }}>💧</span>
            <span className="text-3xl animate-bounce" style={{ animationDelay: '0.4s' }}>💧</span>
          </div>

          {/* Botão */}
          <button
            onClick={onClose}
            className="bg-white hover:bg-gray-100 text-blue-600 font-black py-3 px-8 rounded-2xl text-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg"
          >
            Jogar Novamente
          </button>
        </div>
      </div>
    </div>
  )
}
