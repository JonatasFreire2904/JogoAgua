import React from 'react'
export default function QuizModal({ open, question, onAnswer, isBonus, playerName }){
  if(!open) return null
  const isBonusClass = isBonus ? 'bg-gradient-to-br from-red-100 to-red-50 border-red-300' : 'bg-white'
  const titleClass = isBonus ? 'text-red-600' : 'text-slate-800'
  const buttonClass = isBonus ? 'bg-red-50 hover:bg-red-100 border-red-200' : 'bg-blue-50 hover:bg-blue-100 border-blue-100'
  
  return (
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[110] flex items-center justify-center p-4">
      <div className={`rounded-3xl p-8 max-w-md w-full shadow-2xl border-2 ${isBonusClass}`}>
        <h3 className={`text-2xl font-black text-center mb-2 italic ${titleClass}`}>
          {isBonus ? '💎 CARTA BONUS DIFÍCIL! 💎' : 'Desafio da Gota!'}
        </h3>
        {playerName && (
          <p className="text-center text-sm font-semibold text-slate-500 mb-4">
            Carta para: <span className="text-slate-700">{playerName}</span>
          </p>
        )}
        <p className="text-slate-600 text-center text-lg mb-6">{question?.q}</p>
        <div className="grid gap-3">
          {question?.a?.map((opt,i)=> (
            <button key={i} onClick={()=>onAnswer(i)} className={`p-3 rounded-xl border-2 text-left font-bold transition-all ${buttonClass}`}>{opt}</button>
          ))}
        </div>
      </div>
    </div>
  )
}
