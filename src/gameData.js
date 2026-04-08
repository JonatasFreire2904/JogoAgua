export const pawnColors = ['bg-cyan-400','bg-indigo-500','bg-orange-400','bg-green-500','bg-pink-500','bg-purple-500'];
export const specialTiles = [3,6,9,12,15,18];
export const bonusTiles = [5,11,17,19];
export const pollutedTiles = [7, 14, 21];
export const victoryWaterTiles = [2, 10, 20];
export const pathCoordinates = [
  // Espiral começando do exterior para o interior
  // Primeira volta: Borda externa (cima)
  [0,0], [0,1], [0,2], [0,3], [0,4], [0,5], [0,6], [0,7],
  // Lado direito
  [1,7], [2,7], [3,7], [4,7],
  // Parte inferior (direita para esquerda)
  [5,7], [5,6], [5,5], [5,4], [5,3], [5,2], [5,1], [5,0],
  // Lado esquerdo (baixo para cima)
  [4,0], [3,0], [2,0], [1,0]
];
export const totalTiles = pathCoordinates.length - 1;

export const quizData = [ 
    { q: "Qual destas atitudes ajuda a economizar água em casa?", a: ["Lavar a calçada com mangueira", "Tomar banhos longos", "Fechar a torneira ao escovar os dentes", "Deixar torneiras pingando"], correct: 2 },
    { q: "O que é água potável?", a: ["Água salgada", "Água própria para consumo humano", "Água de chuva sem tratamento", "Água usada na indústria"], correct: 1 },
    { q: "O saneamento básico envolve principalmente:", a: ["Transporte e energia", "Comunicação e internet", "Abastecimento de água, esgoto, drenagem e lixo", "Agricultura e pecuária"], correct: 2 },
    { q: "Qual destas práticas evita desperdício de água?", a: ["Lavar carro com balde", "Regar plantas ao meio-dia", "Deixar torneira aberta", "Usar mangueira continuamente"], correct: 0 },
    { q: "Qual é a principal função da água no corpo humano?", a: ["Produzir energia elétrica", "Produzir oxigênio", "Regular funções vitais do organismo", "Criar vitaminas"], correct: 2 },
    { q: "Qual destas atitudes ajuda a preservar a água?", a: ["Deixar torneira aberta", "Lavar carro diariamente", "Jogar lixo no rio", "Tomar banho rápido"], correct: 3 },
    { q: "Qual é a principal fonte de água doce do planeta?", a: ["Oceanos", "Rios e lagos", "Água subterrânea", "Chuvas"], correct: 2 },
    { q: "A água que bebemos normalmente passa por qual processo?", a: ["Evaporação", "Filtragem natural", "Tratamento em estação", "Congelamento"], correct: 2 },
    { q: "Qual destes é um exemplo de desperdício de água?", a: ["Reutilizar água da chuva", "Consertar vazamentos", "Escovar dentes com torneira aberta", "Usar balde para lavar carro"], correct: 2 },

    { q: "O saneamento básico ajuda principalmente a:", a: ["Melhorar a saúde da população", "Aumentar a poluição", "Produzir energia", "Diminuir a chuva"], correct: 0 },
    { q: "Qual destas ações ajuda a evitar poluição da água?", a: ["Jogar óleo no ralo", "Descartar lixo corretamente", "Jogar lixo no rio", "Jogar esgoto sem tratamento"], correct: 1 },
    { q: "A água cobre aproximadamente quanto da superfície da Terra?", a: ["30%", "50%", "70%", "90%"], correct: 2 },
    { q: "Qual destes locais armazena água subterrânea?", a: ["Aquíferos", "Vulcões", "Montanhas", "Nuvens"], correct: 0 },
    { q: "A falta de água pode causar:", a: ["Mais energia", "Crises de abastecimento", "Mais chuva", "Crescimento de rios"], correct: 1 },
    { q: "Qual atividade doméstica consome muita água?", a: ["Assistir TV", "Estudar", "Ler um livro", "Tomar banho longo"], correct: 3 },
    { q: "A chuva faz parte de qual processo natural?", a: ["Ciclo do carbono", "Ciclo da água", "Ciclo do solo", "Ciclo do fogo"], correct: 1 },
    { q: "A água pode ser economizada ao:", a: ["Reduzir tempo de banho", "Lavar calçada com mangueira", "Deixar torneira aberta", "Descartar água limpa"], correct: 0 },
    { q: "Qual destas é uma fonte natural de água doce?", a: ["Mar", "Rio", "Oceano", "Água salgada"], correct: 1 },
    { q: "A água contaminada pode causar:", a: ["Doenças", "Mais chuva", "Mais energia", "Crescimento de plantas"], correct: 0 },

    { q: "O que é um aquífero?", a: ["Reservatório de água subterrânea", "Lago artificial", "Usina de água", "Reservatório de chuva"], correct: 0 },
    { q: "Qual setor consome mais água no mundo?", a: ["Educação", "Transporte", "Agricultura", "Turismo"], correct: 2 },
    { q: "A água tratada chega às casas por meio de:", a: ["Lagoas", "Chuva", "Rios", "Rede de abastecimento"], correct: 3 },
    { q: "O tratamento de esgoto serve para:", a: ["Poluir rios", "Reduzir contaminação ambiental", "Aumentar o consumo", "Produzir chuva"], correct: 1 },
    { q: "Qual destes pode contaminar a água?", a: ["Plantio de árvores", "Lixo e produtos químicos", "Filtragem", "Tratamento de esgoto"], correct: 1 },
    { q: "A reutilização da água pode ser feita com:", a: ["Água da chuva", "Água salgada", "Água industrial tóxica", "Água contaminada"], correct: 0 },
    { q: "Qual destas doenças pode ser causada por água contaminada?", a: ["Dengue", "Asma", "Câncer", "Cólera"], correct: 3 },
    { q: "O consumo consciente da água ajuda a:", a: ["Aumentar poluição", "Diminuir rios", "Preservar recursos naturais", "Aumentar desperdício"], correct: 2 },
    { q: "Qual destes é um componente do saneamento básico?", a: ["Internet", "Tratamento de esgoto", "Energia solar", "Transporte público"], correct: 1 },
    { q: "Qual destas práticas ajuda na sustentabilidade hídrica?", a: ["Desperdiçar água", "Reutilizar água", "Poluir rios", "Jogar óleo no ralo"], correct: 1 },

    { q: "A falta de saneamento pode gerar:", a: ["Mais saúde", "Mais rios", "Mais água potável", "Doenças infecciosas"], correct: 3 },
    { q: "Qual destes é um impacto da poluição da água?", a: ["Perda da biodiversidade", "Aumento de peixes", "Mais água potável", "Crescimento de rios"], correct: 0 },
    { q: "Qual destes métodos pode economizar água na agricultura?", a: ["Irrigação excessiva", "Mangueira aberta", "Irrigação por gotejamento", "Desperdício de água"], correct: 2 },
    { q: "Qual destes poluentes domésticos prejudica rios?", a: ["Óleo de cozinha", "Água limpa", "Água da chuva", "Água filtrada"], correct: 0 },
    { q: "A preservação das nascentes é importante porque:", a: ["Aumenta o desperdício", "Garante fontes de água", "Diminui rios", "Reduz chuvas"], correct: 1 },
    { q: "A escassez hídrica ocorre quando:", a: ["Há muita chuva", "A demanda por água supera a disponibilidade", "Há excesso de rios", "A água evapora"], correct: 1 },
    { q: "Qual fator contribui para a crise hídrica?", a: ["Desperdício de água", "Uso consciente", "Tratamento de esgoto", "Preservação ambiental"], correct: 0 },
    { q: "A poluição da água pode afetar diretamente:", a: ["Apenas rios", "Apenas cidades", "Apenas indústrias", "Ecossistemas aquáticos"], correct: 3 },
    { q: "Qual destas ações ajuda a proteger recursos hídricos?", a: ["Preservar matas ciliares", "Desmatar margens de rios", "Jogar resíduos nos rios", "Impermeabilizar todo o solo"], correct: 0 },
    { q: "O crescimento urbano desordenado pode causar:", a: ["Melhoria da água", "Poluição e falta de saneamento", "Mais rios", "Mais nascentes"], correct: 1 }
];
export const bonusQuizData = [
    { q: "BONUS: A gestão sustentável da água envolve:", a: ["Uso ilimitado", "Planejamento e conservação", "Desperdício", "Poluição"], correct: 1 },
    { q: "BONUS: Qual destas práticas industriais reduz impacto hídrico?", a: ["Reuso da água", "Descarte em rios", "Desperdício", "Poluição"], correct: 0 },
    { q: "BONUS: A preservação ambiental contribui para:", a: ["Diminuição da chuva", "Aumento da poluição", "Manutenção do ciclo da água", "Falta de rios"], correct: 2 },
    { q: "BONUS: A drenagem urbana inadequada pode causar:", a: ["Mais rios", "Mais água potável", "Mais nascentes", "Enchentes"], correct: 3 },
    { q: "BONUS: A educação ambiental é importante porque:", a: ["Incentiva desperdício", "Promove consciência sustentável", "Aumenta poluição", "Diminui conhecimento"], correct: 1 },
    { q: "BONUS: A falta de água potável pode gerar:", a: ["Crises humanitárias", "Mais energia", "Mais rios", "Mais alimentos"], correct: 0 },
    { q: "BONUS: Qual destes elementos protege a qualidade da água?", a: ["Poluição", "Desmatamento", "Vegetação nas margens dos rios", "Resíduos industriais"], correct: 2 },
    { q: "BONUS: A reutilização de água reduz:", a: ["Pressão sobre recursos hídricos", "Qualidade da água", "Chuvas", "Rios"], correct: 0 },
    { q: "BONUS: A poluição por plástico na água pode causar:", a: ["Mais rios", "Mais água potável", "Mais chuva", "Morte de animais aquáticos"], correct: 3 },
    { q: "BONUS: A implementação da ODS 6 contribui para:", a: ["Desenvolvimento sustentável", "Aumento da poluição", "Redução da água potável", "Desperdício hídrico"], correct: 0 }
];