// Caso de uso: obter documento de regras do jogo
export class ViewGameRulesUseCase {
  constructor(documentService) {
    this.documentService = documentService
  }

  async execute() {
    const documentId = 'game-rules'
    const document = await this.documentService.getById(documentId)

    if (!document) {
      throw new Error('Documento de regras não encontrado.')
    }

    return document
  }
}
