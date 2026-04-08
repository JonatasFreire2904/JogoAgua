# Jogo da Água - React

Aplicação educativa de jogo de tabuleiro multijogador desenvolvida em React com Vite.

## 🎮 O Projeto

**Jogo da Água** é um jogo de tabuleiro digital para 2-6 jogadores que ensina conceitos sobre hidrologia e conservação de água de forma lúdica e interativa.

## 📁 Estrutura

```
├── index.html              # Entry point (servido por Vite)
├── package.json            # Dependências
├── tailwind.config.js      # Configuração Tailwind
├── postcss.config.js       # Configuração PostCSS
│
└── src/
    ├── App.jsx             # Componente raiz com lógica do jogo
    ├── gameData.js         # Dados estáticos (perguntas, tiles)
    ├── main.jsx            # Entry point React
    ├── styles.css          # Estilos customizados + Tailwind
    │
    └── components/
        ├── Header.jsx      # Cabeçalho do jogo
        ├── SetupScreen.jsx # Tela de configuração
        ├── Controls.jsx    # Botão de dado e turno
        ├── Scoreboard.jsx  # Placar
        ├── Board.jsx       # Tabuleiro principal
        ├── QuizModal.jsx   # Modal de perguntas
        └── VictoryModal.jsx# Modal de vitória
```

## ⚙️ Para Rodar

```bash
# Instalar dependências
npm install

# Desenvolvimento (hot reload)
npm run dev

# Build para produção
npm run build

# Visualizar build
npm run preview
```

Depois abra o navegador em **`http://localhost:5173`**

## ✨ Características

✅ React 18.2.0 com Hooks (useState, useEffect, useRef)  
✅ Tailwind CSS para estilização rápida  
✅ Vite para build otimizado e HMR  
✅ 8 componentes modularizados  
✅ 24 perguntas educativas (20 normal + 4 difícil)  
✅ Animações suaves e responsivas  
✅ Lógica de jogo bem estruturada  

## 🎯 Como Jogar

1. Configure os nomes dos jogadores (2-6)
2. Clique "Iniciar Jogo"
3. Cada jogador lança o dado
4. Responda perguntas para avançar no tabuleiro
5. Primeiro a chegar à casa final vence!

## 📚 Documentação

Veja `DOCUMENTACAO_FINAL.md` para documentação técnica completa.

