import React from 'react'

export default function RulesModal({ open, document, loading, error, onClose, requireAck = false }) {
  if (!open) return null
  const cleanPdfUrl = document?.url
    ? `${document.url}#toolbar=0&navpanes=0&scrollbar=0&view=FitH&zoom=page-width`
    : ''

  return (
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[190] flex items-center justify-center p-0 sm:p-4">
      <div className="bg-white w-full h-[100dvh] sm:h-auto sm:max-h-[92vh] sm:max-w-3xl sm:rounded-3xl p-3 sm:p-6 md:p-8 shadow-2xl border-0 sm:border-4 border-blue-200 flex flex-col gap-3 sm:gap-4">
        <div className="flex items-center justify-between gap-3 shrink-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-blue-600">Regras do Jogo</h2>
          <button
            onClick={onClose}
            className="px-3 sm:px-4 py-2 rounded-full border-2 border-blue-200 text-sm font-bold text-blue-600 hover:bg-blue-50"
          >
            {requireAck ? 'Iniciar o jogo' : 'Fechar'}
          </button>
        </div>

        {loading && (
          <p className="text-center text-slate-600 font-medium py-10">
            Carregando regras...
          </p>
        )}

        {!loading && error && (
          <p className="text-center text-red-600 font-semibold py-10">
            {error}
          </p>
        )}

        {!loading && !error && document && (
          <div className="min-h-0 flex-1 sm:mt-2">
            <div className="h-full min-h-[calc(100dvh-5.25rem)] sm:min-h-0 sm:h-[70vh] rounded-xl sm:rounded-2xl border-2 border-blue-100 overflow-hidden bg-slate-100">
              <object
                data={cleanPdfUrl}
                type="application/pdf"
                className="w-full h-full"
                aria-label={document.name}
              >
                <div className="h-full flex flex-col items-center justify-center gap-3 p-6 text-center">
                  <p className="text-slate-700 font-semibold">
                    Não foi possível exibir o PDF neste navegador.
                  </p>
                  <a
                    href={document.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700"
                  >
                    Abrir PDF
                  </a>
                </div>
              </object>
            </div>
            {requireAck && (
              <div className="pt-3 text-center">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-black hover:bg-blue-700 shadow-lg"
                >
                  Iniciar o jogo
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
