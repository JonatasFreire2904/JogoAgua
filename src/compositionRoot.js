import { StaticPdfDocumentService } from './infrastructure/documents/StaticPdfDocumentService'
import { ViewGameRulesUseCase } from './application/usecases/ViewGameRulesUseCase'

// Ponto de composição das dependências da aplicação
const documentService = new StaticPdfDocumentService()

export const viewGameRulesUseCase = new ViewGameRulesUseCase(documentService)
