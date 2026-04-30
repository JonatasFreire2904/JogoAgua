import { IDocumentService } from '../../application/ports/IDocumentService'
import { Document } from '../../domain/documents/Document'

// Implementação concreta para documentos estáticos em disco
export class StaticPdfDocumentService extends IDocumentService {
  async getById(id) {
    if (id !== 'game-rules') return null

    // Em Vite, arquivos estáticos em `docs/` na raiz podem ser servidos diretamente
    const pdfUrl = '/docs/AventuraNoDesafioDaAgua.pdf'

    return new Document({
      id: 'game-rules',
      name: 'Regras do Jogo',
      type: 'application/pdf',
      url: pdfUrl,
    })
  }
}
