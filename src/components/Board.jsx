import React, { useMemo } from 'react'
import { pathCoordinates, totalTiles, specialTiles, bonusTiles, pollutedTiles, victoryWaterTiles } from '../gameData'

const VIEWBOX_WIDTH = 1000
const VIEWBOX_HEIGHT = 700
const VIEWBOX_PADDING_X = 90
const VIEWBOX_PADDING_Y = 70

const clamp = (value, min, max) => Math.max(min, Math.min(max, value))

const createTilePoint = ([row, col], index) => {
  const cols = 8
  const rows = 6
  const usableWidth = VIEWBOX_WIDTH - (VIEWBOX_PADDING_X * 2)
  const usableHeight = VIEWBOX_HEIGHT - (VIEWBOX_PADDING_Y * 2)

  const baseX = VIEWBOX_PADDING_X + (col / (cols - 1)) * usableWidth
  const baseY = VIEWBOX_PADDING_Y + (row / (rows - 1)) * usableHeight

  const waveX = Math.sin(index * 0.82) * 18
  const waveY = Math.cos(index * 0.74) * 14

  return {
    x: clamp(baseX + waveX, VIEWBOX_PADDING_X - 12, VIEWBOX_WIDTH - VIEWBOX_PADDING_X + 12),
    y: clamp(baseY + waveY, VIEWBOX_PADDING_Y - 10, VIEWBOX_HEIGHT - VIEWBOX_PADDING_Y + 10),
  }
}

const buildTrailPath = (points) => {
  if (points.length < 2) return ''

  let path = `M ${points[0].x} ${points[0].y}`
  for (let i = 1; i < points.length - 1; i += 1) {
    const midX = (points[i].x + points[i + 1].x) / 2
    const midY = (points[i].y + points[i + 1].y) / 2
    path += ` Q ${points[i].x} ${points[i].y} ${midX} ${midY}`
  }

  const last = points[points.length - 1]
  path += ` T ${last.x} ${last.y}`
  return path
}

const getTileShape = (index) => (
  index % 2 === 0
    ? '38% 62% 55% 45% / 48% 42% 58% 52%'
    : '58% 42% 46% 54% / 44% 56% 40% 60%'
)

const getPawnOffset = (stackIndex, stackTotal) => {
  const safeStackIndex = Math.max(0, stackIndex)
  const safeStackTotal = Math.max(1, stackTotal)

  if (safeStackTotal === 1) return { offsetX: 0, offsetY: 0 }

  const radius = safeStackTotal <= 3 ? 13 : 15
  const angle = ((Math.PI * 2) / safeStackTotal) * safeStackIndex - Math.PI / 2

  return {
    offsetX: Math.cos(angle) * radius,
    offsetY: Math.sin(angle) * radius,
  }
}

export default function Board({ players, positions, currentIndex }){
  const tilePoints = useMemo(() => pathCoordinates.map((coord, index) => createTilePoint(coord, index)), [])
  const trailPath = useMemo(() => buildTrailPath(tilePoints), [tilePoints])
  const playersByTile = useMemo(() => {
    return positions.reduce((acc, pos, playerIndex) => {
      const tile = Number.isInteger(pos) ? pos : 0
      if (!acc[tile]) acc[tile] = []
      acc[tile].push(playerIndex)
      return acc
    }, {})
  }, [positions])
  const occupiedByTile = useMemo(() => {
    return positions.reduce((acc, pos) => {
      const tile = Number.isInteger(pos) ? pos : 0
      acc[tile] = (acc[tile] || 0) + 1
      return acc
    }, {})
  }, [positions])

  return (
    <div className="p-4 md:p-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-50">
      <div className="board-grid relative" id="game-board">
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

        {/* SVG para desenhar o caminho sinuoso */}
        <svg className="board-path" viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`} preserveAspectRatio="none">
          <path d={trailPath} className="trail-ribbon-bg" />
          <path d={trailPath} className="trail-ribbon-dashed" />
        </svg>
        {pathCoordinates.map((_,index)=>{
          const isStart = index===0
          const isFinish = index===totalTiles
          const isBonus = bonusTiles.includes(index)
          const isSpecial = specialTiles.includes(index)
          const isPolluted = pollutedTiles.includes(index)
          const isVictoryWater = victoryWaterTiles.includes(index)
          const isActiveTile = index === (positions[currentIndex] ?? -1)
          const isOccupied = Boolean(occupiedByTile[index])
          const point = tilePoints[index]
          const rotation = ((index * 17) % 11) - 5
          
          let bg = 'bg-gradient-to-br from-blue-300 to-blue-500 text-white'
          let content = index
          
          if(isStart){ bg='bg-gradient-to-br from-slate-400 to-slate-600 text-white'; content='💧' }
          else if(isFinish){ bg='bg-gradient-to-br from-cyan-400 to-blue-600 text-white'; content='🏁' }
          else if(isBonus){ bg='bg-gradient-to-br from-violet-500 to-indigo-600 text-white'; content='💎' }
          else if(isPolluted){ bg='bg-gradient-to-br from-orange-500 to-red-600 text-white'; content='☠️' }
          else if(isVictoryWater){ bg='bg-gradient-to-br from-emerald-400 to-green-600 text-white'; content='✨' }
          else if(isSpecial){ bg='bg-gradient-to-br from-sky-300 to-blue-400 text-white'; content='❓' }

          const style = {
            left: `${(point.x / VIEWBOX_WIDTH) * 100}%`,
            top: `${(point.y / VIEWBOX_HEIGHT) * 100}%`,
            '--tile-rotation': `${rotation}deg`,
            borderRadius: getTileShape(index),
            zIndex: isActiveTile ? 32 : 20,
          }

          return (
            <div
              key={index}
              id={`tile-${index}`}
              className={`tile ${bg} ${isActiveTile ? 'tile-active' : ''} ${isOccupied ? 'tile-occupied' : ''}`}
              style={style}
            >
              <span className="absolute top-1.5 left-2 text-[10px] font-bold opacity-70">{isStart? '': index}</span>
              <span className={`z-10 ${isStart? 'text-sm':'text-2xl'} font-black drop-shadow-lg`}>{content}</span>
            </div>
          )
        })}

        {/* Pawns positioned absolutely over board */}
        {players.map((p,i)=>{
          const pos = positions[i] || 0
          const stack = playersByTile[pos] || []
          const stackIndex = stack.indexOf(i)
          const safeStackIndex = Math.max(0, stackIndex)
          const point = tilePoints[pos] || tilePoints[0]
          const centerXPercent = (point.x / VIEWBOX_WIDTH) * 100
          const centerYPercent = (point.y / VIEWBOX_HEIGHT) * 100
          const { offsetX, offsetY } = getPawnOffset(safeStackIndex, stack.length || 1)
          const z = 40 + safeStackIndex + i
          
          return (
            <div 
              key={i} 
              className={`pawn pawn-transition ${p.color}`} 
              style={{ 
                left: `calc(${centerXPercent}% + ${offsetX}px)`,
                top: `calc(${centerYPercent}% + ${offsetY}px)`,
                transform: 'translate(-50%, -50%)',
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
