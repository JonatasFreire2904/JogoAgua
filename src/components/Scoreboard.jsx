import React from 'react'
export default function Scoreboard({ players, currentIndex, positions }){
  return (
    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2 bg-white p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-inner border border-blue-100">
      {players.map((p,i)=> (
        <div key={i} className={`text-center p-1 sm:p-2 rounded-lg sm:rounded-xl border ${i===currentIndex ? 'bg-blue-100 border-blue-300' : 'border-transparent'}`}>
          <div className={`w-3 h-3 rounded-full ${p.color} mx-auto`}></div>
          <div className="text-[9px] sm:text-[10px] font-bold truncate">{p.name}</div>
          <div className="text-xs sm:text-sm font-black">{positions[i]===0? 'Início' : `Casa ${positions[i]}`}</div>
        </div>
      ))}
    </div>
  )
}
