import React, { useEffect, useRef, useState } from 'react'
import { pathCoordinates, totalTiles, specialTiles, bonusTiles, pollutedTiles, victoryWaterTiles } from '../gameData'

export default function Board({ players, positions }){
  const boardRef = useRef(null)
  const [, setUpdateTrigger] = useState(0)

  useEffect(()=>{
    const handleResize = () => setUpdateTrigger(t => t+1)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  },[])

  const calculatePawnPosition = (tileIndex, playerIndex) => {
    const board = boardRef.current
    if(!board) return { x: 0, y: 0, z: 10 + playerIndex }
    
    const tile = board.querySelector(`#tile-${tileIndex}`)
    if(!tile) return { x: 0, y: 0, z: 10 + playerIndex }

    const tileRect = tile.getBoundingClientRect()
    const boardRect = board.getBoundingClientRect()
    
    const centerX = tileRect.left - boardRect.left + tileRect.width / 2 - 20
    const centerY = tileRect.top - boardRect.top + tileRect.height / 2 - 20
    
    const stackOffset = playerIndex * 2
    
    return {
      x: centerX + (playerIndex % 2 === 0 ? -stackOffset : stackOffset),
      y: centerY + (playerIndex > 2 ? stackOffset : -stackOffset),
      z: 10 + playerIndex
    }
  }

  return (
    <div className="p-4 md:p-8 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="board-grid relative" id="game-board" ref={boardRef}>
        {/* Decoração: Poças de água */}
        <div className="absolute water-drop" style={{top: '15%', left: '20%', width: '60px', height: '40px', opacity: 0.3}}></div>
        <div className="absolute water-drop" style={{top: '35%', right: '15%', width: '80px', height: '50px', opacity: 0.25}}></div>
        <div className="absolute water-drop" style={{bottom: '20%', left: '10%', width: '70px', height: '45px', opacity: 0.28}}></div>
        <div className="absolute water-drop" style={{bottom: '10%', right: '25%', width: '90px', height: '55px', opacity: 0.32}}></div>
        
        {/* Centro: Bolo de Cartas */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          <div className="relative w-32 h-40">
            {/* Cartas empilhadas */}
            {[0, 1, 2, 3].map((i) => (
              <div
                key={`card-${i}`}
                className="absolute w-20 h-28 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg border-2 border-white shadow-lg"
                style={{
                  transform: `translateX(${i * 4}px) translateY(${i * 4}px) rotateZ(${i * 3}deg)`,
                  zIndex: i,
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white text-3xl font-black">💧</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SVG para desenhar o caminho */}
        <svg className="board-path" viewBox="0 0 1200 900" preserveAspectRatio="none">
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#60a5fa', stopOpacity: 0.3}} />
              <stop offset="100%" style={{stopColor: '#0ea5e9', stopOpacity: 0.3}} />
            </linearGradient>
          </defs>
          
          {/* Desenhar linhas da cobra/caminho espiral */}
          {pathCoordinates.map((_, i) => {
            if (i >= pathCoordinates.length - 1) return null
            
            const fromCoord = pathCoordinates[i]
            const toCoord = pathCoordinates[i + 1]
            
            const colWidth = 1200 / 8
            const rowHeight = 900 / 6
            
            const x1 = (fromCoord[1] + 0.5) * colWidth
            const y1 = (fromCoord[0] + 0.5) * rowHeight
            const x2 = (toCoord[1] + 0.5) * colWidth
            const y2 = (toCoord[0] + 0.5) * rowHeight
            
            // Desenha curva suave entre as casas
            const ctrlX = (x1 + x2) / 2
            const ctrlY = (y1 + y2) / 2 + 20
            
            return (
              <path
                key={`path-${i}`}
                d={`M ${x1} ${y1} Q ${ctrlX} ${ctrlY} ${x2} ${y2}`}
                fill="none"
                stroke="url(#pathGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                opacity="0.5"
              />
            )
          })}
        </svg>
        {pathCoordinates.map((coord,index)=>{
          const isStart = index===0
          const isFinish = index===totalTiles
          const isBonus = bonusTiles.includes(index)
          const isSpecial = specialTiles.includes(index)
          const isPolluted = pollutedTiles.includes(index)
          const isVictoryWater = victoryWaterTiles.includes(index)
          
          let bg = 'bg-gradient-to-br from-blue-400 to-blue-500 text-white border-blue-700'
          let content = index
          
          if(isStart){ bg='bg-gradient-to-br from-gray-300 to-gray-500 text-white border-gray-700'; content='💧' }
          else if(isFinish){ bg='bg-gradient-to-br from-cyan-400 to-blue-600 text-white border-blue-800 scale-110'; content='🏁' }
          else if(isBonus){ bg='bg-gradient-to-br from-purple-500 to-indigo-600 text-white border-indigo-900 shadow-xl'; content='💎' }
          else if(isPolluted){ bg='bg-gradient-to-br from-orange-600 to-red-600 text-white border-red-800 shadow-2xl'; content='☠️' }
          else if(isVictoryWater){ bg='bg-gradient-to-br from-green-400 to-emerald-500 text-white border-emerald-700 shadow-lg'; content='✨' }
          else if(isSpecial){ bg='bg-gradient-to-br from-cyan-300 to-blue-400 text-white border-blue-700'; content='❓' }

          const style = { gridRow: coord[0]+1, gridColumn: coord[1]+1, zIndex: 5 }

          return (
            <div key={index} id={`tile-${index}`} className={`tile ${bg}`} style={style}>
              <span className="absolute top-1 left-1.5 text-[11px] font-bold opacity-70">{isStart? '': index}</span>
              <span className={`z-10 ${isStart? 'text-[14px]':'text-2xl'} font-black drop-shadow-lg`}>{content}</span>
            </div>
          )
        })}

        {/* Pawns positioned absolutely over board */}
        {players.map((p,i)=>{
          const pos = positions[i] || 0
          const { x, y, z } = calculatePawnPosition(pos, i)
          
          return (
            <div 
              key={i} 
              className={`pawn pawn-transition ${p.color}`} 
              style={{ 
                transform: `translate(${x}px, ${y}px)`,
                zIndex: z,
              }}
              title={p.name}
            >
              {p.name.substring(0,2).toUpperCase()}
            </div>
          )
        })}
      </div>
    </div>
  )
}
