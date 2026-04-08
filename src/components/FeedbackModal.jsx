import React from 'react'

export default function FeedbackModal({ open, title, message, variant = 'info', onClose }) {
  if (!open) return null

  const isSuccess = variant === 'success'
  const isError = variant === 'error'

  const bgClass = isSuccess
    ? 'from-green-100 to-emerald-50 border-emerald-300'
    : isError
    ? 'from-red-100 to-rose-50 border-red-300'
    : 'from-blue-50 to-slate-50 border-blue-200'

  const titleClass = isSuccess
    ? 'text-emerald-700'
    : isError
    ? 'text-red-700'
    : 'text-blue-700'

  const icon = isSuccess ? '✅' : isError ? '❌' : '💧'

  return (
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[150] flex items-center justify-center p-4">
      <div className={`bg-gradient-to-br rounded-3xl p-6 max-w-sm w-full shadow-2xl border-2 ${bgClass}`}>
        <div className="flex items-start gap-4 mb-4">
          <div className="text-3xl">{icon}</div>
          <div>
            <h3 className={`text-xl font-black mb-1 ${titleClass}`}>{title}</h3>
            <p className="text-slate-700 text-sm md:text-base font-medium">{message}</p>
          </div>
        </div>
        <div className="flex justify-end mt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-md"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
}
