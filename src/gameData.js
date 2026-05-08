export const pawnColors = ['bg-cyan-400','bg-indigo-500','bg-orange-400','bg-green-500','bg-pink-500','bg-purple-500'];
export const specialTiles = [1,3,6,9,12,15,18,22];
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

// export const quizData = [ 
//     { q: "Qual destas atitudes ajuda a economizar água em casa?", a: ["Lavar a calçada com mangueira", "Tomar banhos longos", "Fechar a torneira ao escovar os dentes", "Deixar torneiras pingando"], correct: 2 },
//     { q: "O que é água potável?", a: ["Água salgada", "Água própria para consumo humano", "Água de chuva sem tratamento", "Água usada na indústria"], correct: 1 },
//     { q: "O saneamento básico envolve principalmente:", a: ["Transporte e energia", "Comunicação e internet", "Abastecimento de água, esgoto, drenagem e lixo", "Agricultura e pecuária"], correct: 2 },
//     { q: "Qual destas práticas evita desperdício de água?", a: ["Lavar carro com balde", "Regar plantas ao meio-dia", "Deixar torneira aberta", "Usar mangueira continuamente"], correct: 0 },
//     { q: "Qual é a principal função da água no corpo humano?", a: ["Produzir energia elétrica", "Produzir oxigênio", "Regular funções vitais do organismo", "Criar vitaminas"], correct: 2 },
//     { q: "Qual destas atitudes ajuda a preservar a água?", a: ["Deixar torneira aberta", "Lavar carro diariamente", "Jogar lixo no rio", "Tomar banho rápido"], correct: 3 },
//     { q: "Qual é a principal fonte de água doce do planeta?", a: ["Oceanos", "Rios e lagos", "Água subterrânea", "Chuvas"], correct: 2 },
//     { q: "A água que bebemos normalmente passa por qual processo?", a: ["Evaporação", "Filtragem natural", "Tratamento em estação", "Congelamento"], correct: 2 },
//     { q: "Qual destes é um exemplo de desperdício de água?", a: ["Reutilizar água da chuva", "Consertar vazamentos", "Escovar dentes com torneira aberta", "Usar balde para lavar carro"], correct: 2 },

//     { q: "O saneamento básico ajuda principalmente a:", a: ["Melhorar a saúde da população", "Aumentar a poluição", "Produzir energia", "Diminuir a chuva"], correct: 0 },
//     { q: "Qual destas ações ajuda a evitar poluição da água?", a: ["Jogar óleo no ralo", "Descartar lixo corretamente", "Jogar lixo no rio", "Jogar esgoto sem tratamento"], correct: 1 },
//     { q: "A água cobre aproximadamente quanto da superfície da Terra?", a: ["30%", "50%", "70%", "90%"], correct: 2 },
//     { q: "Qual destes locais armazena água subterrânea?", a: ["Aquíferos", "Vulcões", "Montanhas", "Nuvens"], correct: 0 },
//     { q: "A falta de água pode causar:", a: ["Mais energia", "Crises de abastecimento", "Mais chuva", "Crescimento de rios"], correct: 1 },
//     { q: "Qual atividade doméstica consome muita água?", a: ["Assistir TV", "Estudar", "Ler um livro", "Tomar banho longo"], correct: 3 },
//     { q: "A chuva faz parte de qual processo natural?", a: ["Ciclo do carbono", "Ciclo da água", "Ciclo do solo", "Ciclo do fogo"], correct: 1 },
//     { q: "A água pode ser economizada ao:", a: ["Reduzir tempo de banho", "Lavar calçada com mangueira", "Deixar torneira aberta", "Descartar água limpa"], correct: 0 },
//     { q: "Qual destas é uma fonte natural de água doce?", a: ["Mar", "Rio", "Oceano", "Água salgada"], correct: 1 },
//     { q: "A água contaminada pode causar:", a: ["Doenças", "Mais chuva", "Mais energia", "Crescimento de plantas"], correct: 0 },

//     { q: "O que é um aquífero?", a: ["Reservatório de água subterrânea", "Lago artificial", "Usina de água", "Reservatório de chuva"], correct: 0 },
//     { q: "Qual setor consome mais água no mundo?", a: ["Educação", "Transporte", "Agricultura", "Turismo"], correct: 2 },
//     { q: "A água tratada chega às casas por meio de:", a: ["Lagoas", "Chuva", "Rios", "Rede de abastecimento"], correct: 3 },
//     { q: "O tratamento de esgoto serve para:", a: ["Poluir rios", "Reduzir contaminação ambiental", "Aumentar o consumo", "Produzir chuva"], correct: 1 },
//     { q: "Qual destes pode contaminar a água?", a: ["Plantio de árvores", "Lixo e produtos químicos", "Filtragem", "Tratamento de esgoto"], correct: 1 },
//     { q: "A reutilização da água pode ser feita com:", a: ["Água da chuva", "Água salgada", "Água industrial tóxica", "Água contaminada"], correct: 0 },
//     { q: "Qual destas doenças pode ser causada por água contaminada?", a: ["Dengue", "Asma", "Câncer", "Cólera"], correct: 3 },
//     { q: "O consumo consciente da água ajuda a:", a: ["Aumentar poluição", "Diminuir rios", "Preservar recursos naturais", "Aumentar desperdício"], correct: 2 },
//     { q: "Qual destes é um componente do saneamento básico?", a: ["Internet", "Tratamento de esgoto", "Energia solar", "Transporte público"], correct: 1 },
//     { q: "Qual destas práticas ajuda na sustentabilidade hídrica?", a: ["Desperdiçar água", "Reutilizar água", "Poluir rios", "Jogar óleo no ralo"], correct: 1 },

//     { q: "A falta de saneamento pode gerar:", a: ["Mais saúde", "Mais rios", "Mais água potável", "Doenças infecciosas"], correct: 3 },
//     { q: "Qual destes é um impacto da poluição da água?", a: ["Perda da biodiversidade", "Aumento de peixes", "Mais água potável", "Crescimento de rios"], correct: 0 },
//     { q: "Qual destes métodos pode economizar água na agricultura?", a: ["Irrigação excessiva", "Mangueira aberta", "Irrigação por gotejamento", "Desperdício de água"], correct: 2 },
//     { q: "Qual destes poluentes domésticos prejudica rios?", a: ["Óleo de cozinha", "Água limpa", "Água da chuva", "Água filtrada"], correct: 0 },
//     { q: "A preservação das nascentes é importante porque:", a: ["Aumenta o desperdício", "Garante fontes de água", "Diminui rios", "Reduz chuvas"], correct: 1 },
//     { q: "A escassez hídrica ocorre quando:", a: ["Há muita chuva", "A demanda por água supera a disponibilidade", "Há excesso de rios", "A água evapora"], correct: 1 },
//     { q: "Qual fator contribui para a crise hídrica?", a: ["Desperdício de água", "Uso consciente", "Tratamento de esgoto", "Preservação ambiental"], correct: 0 },
//     { q: "A poluição da água pode afetar diretamente:", a: ["Apenas rios", "Apenas cidades", "Apenas indústrias", "Ecossistemas aquáticos"], correct: 3 },
//     { q: "Qual destas ações ajuda a proteger recursos hídricos?", a: ["Preservar matas ciliares", "Desmatar margens de rios", "Jogar resíduos nos rios", "Impermeabilizar todo o solo"], correct: 0 },
//     { q: "O crescimento urbano desordenado pode causar:", a: ["Melhoria da água", "Poluição e falta de saneamento", "Mais rios", "Mais nascentes"], correct: 1 }
// ];
// export const bonusQuizData = [
//     { q: "BONUS: A gestão sustentável da água envolve:", a: ["Uso ilimitado", "Planejamento e conservação", "Desperdício", "Poluição"], correct: 1 },
//     { q: "BONUS: Qual destas práticas industriais reduz impacto hídrico?", a: ["Reuso da água", "Descarte em rios", "Desperdício", "Poluição"], correct: 0 },
//     { q: "BONUS: A preservação ambiental contribui para:", a: ["Diminuição da chuva", "Aumento da poluição", "Manutenção do ciclo da água", "Falta de rios"], correct: 2 },
//     { q: "BONUS: A drenagem urbana inadequada pode causar:", a: ["Mais rios", "Mais água potável", "Mais nascentes", "Enchentes"], correct: 3 },
//     { q: "BONUS: A educação ambiental é importante porque:", a: ["Incentiva desperdício", "Promove consciência sustentável", "Aumenta poluição", "Diminui conhecimento"], correct: 1 },
//     { q: "BONUS: A falta de água potável pode gerar:", a: ["Crises humanitárias", "Mais energia", "Mais rios", "Mais alimentos"], correct: 0 },
//     { q: "BONUS: Qual destes elementos protege a qualidade da água?", a: ["Poluição", "Desmatamento", "Vegetação nas margens dos rios", "Resíduos industriais"], correct: 2 },
//     { q: "BONUS: A reutilização de água reduz:", a: ["Pressão sobre recursos hídricos", "Qualidade da água", "Chuvas", "Rios"], correct: 0 },
//     { q: "BONUS: A poluição por plástico na água pode causar:", a: ["Mais rios", "Mais água potável", "Mais chuva", "Morte de animais aquáticos"], correct: 3 },
//     { q: "BONUS: A implementação da ODS 6 contribui para:", a: ["Desenvolvimento sustentável", "Aumento da poluição", "Redução da água potável", "Desperdício hídrico"], correct: 0 }
// ];
export const quizData = [ 
    { q: "Qual destas atitudes ajuda a economizar água em casa?", a: ["Lavar a calçada com a mangueira", "Tomar banhos muito demorados", "Fechar a torneira enquanto escova os dentes", "Deixar as torneiras pingando"], correct: 2 },
    { q: "O que significa dizer que a água é 'potável'?", a: ["É a água salgada do mar", "É a água limpinha e segura para bebermos", "É a água da chuva antes de ser tratada", "É a água usada nas fábricas"], correct: 1 },
    { q: "O saneamento básico cuida da nossa cidade. Ele inclui:", a: ["Transporte público e energia elétrica", "Internet e telefone", "Água encanada, coleta de lixo e tratamento de esgoto", "Plantações e criação de animais"], correct: 2 },
    { q: "Qual dessas ideias ajuda a não desperdiçar água?", a: ["Lavar o carro usando um balde", "Regar as plantas no sol do meio-dia", "Deixar a torneira aberta sem usar", "Brincar com a mangueira ligada"], correct: 0 },
    { q: "Para que a água serve no nosso corpo?", a: ["Para dar choque elétrico", "Para produzir oxigênio", "Para manter o corpo funcionando e saudável", "Para criar vitaminas do zero"], correct: 2 },
    { q: "Como você pode ser um herói e proteger a água?", a: ["Deixando a torneira aberta à toa", "Lavando o carro todos os dias", "Jogando lixinho no rio", "Tomando banhos mais rápidos"], correct: 3 },
    { q: "De onde vem a maior parte da água doce do nosso planeta?", a: ["Dos oceanos", "Dos rios e lagos", "Da água que fica escondida embaixo da terra", "Das nuvens"], correct: 2 },
    { q: "Antes de chegar na nossa torneira, a água passa por qual processo?", a: ["Evaporação", "Filtração mágica da natureza", "Tratamento para tirar todas as sujeiras", "Congelamento no polo norte"], correct: 2 },
    { q: "Qual destas ações é um grande desperdício de água?", a: ["Guardar a água da chuva para lavar o quintal", "Consertar os canos que estão vazando", "Escovar os dentes com a torneira jorrando água", "Usar um balde para lavar o carro"], correct: 2 },

    { q: "Tratar o esgoto e ter água limpa ajuda principalmente a:", a: ["Melhorar a saúde de todas as pessoas", "Aumentar a sujeira nas ruas", "Gerar energia para a TV", "Fazer chover menos"], correct: 0 },
    { q: "Como podemos evitar que a água dos rios fique poluída?", a: ["Jogando resto de óleo de cozinha no ralo", "Jogando o lixo sempre na lixeira", "Deixando embalagens caírem no rio", "Soltando esgoto direto na água"], correct: 1 },
    { q: "Se olharmos a Terra do espaço, ela é bem azul. A água cobre quanto do planeta?", a: ["Apenas 30%", "Metade (50%)", "A maior parte (70%)", "Quase tudo (90%)"], correct: 2 },
    { q: "O que é um 'aquífero'?", a: ["Uma piscina gigante de água escondida embaixo da terra", "Um tipo de vulcão", "Uma montanha muito alta", "Uma nuvem carregada de chuva"], correct: 0 },
    { q: "O que acontece se faltar água na nossa cidade?", a: ["Teremos mais energia", "Faltará água nas torneiras para beber e tomar banho", "Choverá muito mais", "Os rios vão transbordar"], correct: 1 },
    { q: "Qual dessas atividades gasta muita água em casa?", a: ["Assistir desenho na TV", "Fazer a lição de casa", "Ler um gibi", "Tomar um banho bem demorado"], correct: 3 },
    { q: "A água que sobe para as nuvens e cai como chuva faz parte do:", a: ["Ciclo do fogo", "Ciclo da água", "Ciclo da terra", "Ciclo do vento"], correct: 1 },
    { q: "Nós economizamos água de verdade quando:", a: ["Tomamos banhos mais rápidos", "Lavamos o quintal com a mangueira", "Deixamos a torneira aberta enquanto ensaboamos a mão", "Jogamos água limpa fora"], correct: 0 },
    { q: "Onde podemos encontrar água doce na natureza?", a: ["No mar", "Nos rios", "No oceano", "Nas praias salgadas"], correct: 1 },
    { q: "Beber água suja ou contaminada pode causar:", a: ["Dor de barriga e doenças", "Mais vontade de brincar", "Superpoderes", "Crescimento das plantas"], correct: 0 },

    { q: "Você sabia? Quem gasta mais água no mundo hoje em dia é a:", a: ["Escola", "Frota de carros e ônibus", "Agricultura (para regar as plantações)", "Turismo e viagens"], correct: 2 },
    { q: "Como a água limpinha chega até a torneira da sua casa?", a: ["Voando", "Caindo direto da chuva", "Pelos rios", "Pelos canos da rede de abastecimento da cidade"], correct: 3 },
    { q: "Para que serve tratar o esgoto (a água suja que sai das casas)?", a: ["Para sujar os rios", "Para limpar a água antes de devolvê-la para a natureza", "Para gastarmos mais", "Para fazer chover"], correct: 1 },
    { q: "O que é muito perigoso e pode envenenar a água dos rios?", a: ["Plantar árvores", "Lixo e produtos químicos jogados de forma errada", "Filtrar a água", "Tirar o lixo da rua"], correct: 1 },
    { q: "Podemos reaproveitar a água para lavar o quintal usando:", a: ["A água que cai da chuva", "A água do mar", "Água com veneno de fábricas", "Água suja de esgoto"], correct: 0 },
    { q: "A água parada em potes ou pneus velhos no quintal pode ajudar a nascer o mosquito da:", a: ["Gripe", "Asma", "Dor de dente", "Dengue"], correct: 3 },
    { q: "Usar a água de forma consciente (sem desperdício) ajuda a:", a: ["Aumentar a poluição no mundo", "Secar os rios", "Proteger a natureza para não faltar água no futuro", "Gastar mais dinheiro"], correct: 2 },
    { q: "Um bairro bom e saudável precisa ter saneamento básico. O que é isso?", a: ["Internet rápida", "Tratamento de água e esgoto", "Energia solar", "Muitos ônibus"], correct: 1 },
    { q: "Qual atitude mostra que você é amigo da natureza?", a: ["Gastar água sem pensar", "Reaproveitar a água da máquina de lavar", "Jogar lixo na praia", "Jogar óleo na pia"], correct: 1 },

    { q: "Se a cidade não tiver água limpa e encanada, as pessoas podem ter:", a: ["Mais saúde e energia", "Mais rios para nadar", "Mais água de graça", "Doenças perigosas"], correct: 3 },
    { q: "O que acontece de triste quando um rio fica muito poluído?", a: ["Os peixes e as plantas que vivem lá acabam morrendo", "Aparecem mais peixes coloridos", "A água fica ótima para beber", "O rio cresce e fica mais forte"], correct: 0 },
    { q: "Como as fazendas podem economizar água na hora de molhar as plantas?", a: ["Jogando água até inundar tudo", "Deixando a mangueira aberta o dia todo", "Usando mangueiras que pingam água aos pouquinhos (gotejamento)", "Não molhando as plantas nunca"], correct: 2 },
    { q: "Qual produto que temos na cozinha faz muito mal se for jogado no ralo da pia?", a: ["Óleo de fritura", "Água gelada", "Resto de suco", "Água da chuva"], correct: 0 },
    { q: "Por que não podemos cortar as árvores que ficam na beira dos rios (matas ciliares)?", a: ["Para sobrar mais espaço", "Porque elas protegem a terra e não deixam o rio secar", "Porque elas bebem toda a água", "Para não chover"], correct: 1 },
    { q: "A falta de água no planeta acontece principalmente quando:", a: ["Chover muito sem parar", "Nós gastamos mais água do que a natureza consegue repor", "Temos rios demais", "A água evapora muito rápido"], correct: 1 },
    { q: "O que agrava ainda mais a crise de falta de água?", a: ["Desperdiçar água lavando calçadas e tomando banhos longos", "Usar só o necessário", "Tratar o esgoto direitinho", "Proteger as florestas"], correct: 0 },
    { q: "A poluição das águas afeta e machuca diretamente:", a: ["Só os peixes grandes", "Só quem mora nas cidades", "Só as fábricas", "Os animais, as plantas e nós mesmos"], correct: 3 },
    { q: "Qual dessas ações é como dar um 'abraço' na natureza e proteger a água?", a: ["Preservar as florestas ao redor das nascentes dos rios", "Desmatar e cortar todas as árvores", "Jogar lixo nos bueiros", "Cimentar a cidade inteira sem deixar terra"], correct: 0 },
    { q: "Quando a cidade cresce muito rápido e sem planejamento, o que pode acontecer?", a: ["A água fica mais limpinha", "Os rios ficam poluídos e falta tratamento de esgoto", "Nascem novos rios mágicos", "Brota mais água do chão"], correct: 1 },

    { q: "Cuidar bem da água do nosso planeta significa:", a: ["Usar o quanto quiser sem pensar no amanhã", "Planejar, economizar e proteger os rios", "Gastar bastante no banho", "Sujar as nascentes"], correct: 1 },
    { q: "O que as grandes fábricas podem fazer para não desperdiçar água?", a: ["Limpar e reutilizar a água várias vezes", "Jogar a água suja direto no rio", "Gastar sem controle", "Não se importar com os vazamentos"], correct: 0 },
    { q: "Cuidar do meio ambiente ajudando a proteger as matas faz com que:", a: ["Pare de chover", "A poluição aumente", "O ciclo da água continue funcionando perfeitamente", "Os rios sequem"], correct: 2 },
    { q: "O que acontece na cidade quando chove muito e os bueiros estão entupidos de lixo?", a: ["Nascem rios novos", "Temos mais água boa para beber", "Surgem novas nascentes", "Acontecem grandes enchentes"], correct: 3 },
    { q: "Estudar e aprender sobre a natureza (Educação Ambiental) é super importante porque:", a: ["Nos ensina a gastar mais água", "Nos ajuda a ter atitudes que salvam o planeta", "Aumenta a poluição", "Faz a gente esquecer do meio ambiente"], correct: 1 },
    { q: "Se não tivermos água limpa para todos no futuro, o que pode acontecer?", a: ["Grandes problemas no mundo inteiro (crises de saúde e falta de comida)", "Teremos mais energia", "Mais rios vão aparecer", "Teremos mais árvores"], correct: 0 },
    { q: "O que funciona como um escudo natural para proteger a água dos rios?", a: ["A fumaça", "Cortar as árvores", "As plantas e árvores que crescem na beira do rio", "Os lixos jogados na rua"], correct: 2 },
    { q: "Se a gente reaproveitar a água da chuva para lavar o quintal, nós ajudamos a:", a: ["Deixar sobrar mais água limpa nos rios e caixas d'água", "Sujar a água da cidade", "Parar de chover", "Secar as represas"], correct: 0 },
    { q: "Jogar sacolinhas e garrafas de plástico na praia ou nos rios pode causar:", a: ["O nascimento de mais peixes", "Mais água limpa para beber", "Mais chuva forte", "A morte de tartarugas e outros animais que vivem na água"], correct: 3 },
    { q: "O mundo tem um objetivo muito especial chamado 'Água Limpa para Todos'. Isso ajuda a:", a: ["Deixar o mundo mais justo e saudável", "Aumentar a poluição", "Diminuir a quantidade de rios", "Fazer as pessoas desperdiçarem água"], correct: 0 }
];

export const bonusQuizData = [
    { q: "BÔNUS: Você sabia que as plantas também 'suam'? Como os cientistas chamam o processo em que elas liberam água para o ar?", a: ["Condensação", "Evapotranspiração", "Precipitação", "Infiltração"], correct: 1 },
    { q: "BÔNUS: A maior parte do oxigênio que respiramos não vem das árvores! Quem produz a maior parte desse oxigênio na água?", a: ["Os tubarões", "As algas e os fitoplânctons nos oceanos", "As pedras do fundo do mar", "Os corais coloridos"], correct: 1 },
    { q: "BÔNUS: A 'Pegada Hídrica' é a água invisível gasta para fabricar as coisas. O que usa mais água para ser feito?", a: ["Uma calça jeans (gasta milhares de litros!)", "Um caderno escolar", "Uma maçã", "Uma garrafa de vidro"], correct: 0 },
    { q: "BÔNUS: Na ciência, a água é muito famosa e tem uma fórmula química que muitos conhecem. Qual é ela?", a: ["CO2", "H2O", "O2", "NaCl"], correct: 1 },
    { q: "BÔNUS: O Brasil guarda embaixo da terra um dos maiores e mais importantes aquíferos do mundo! Qual é o nome dele?", a: ["Aquífero do Deserto", "Aquífero do Himalaia", "Aquífero Guarani", "Aquífero Gigante"], correct: 2 },
    { q: "BÔNUS: Quando o gelo (água sólida) vira vapor direto, sem derreter e virar líquido antes, como chamamos essa transformação?", a: ["Fusão", "Sublimação", "Ebulição", "Congelamento"], correct: 1 },
    { q: "BÔNUS: Existe um processo muito difícil e caro para tirar o sal da água do mar e deixá-la pronta para beber. Qual o nome disso?", a: ["Dessalinização", "Fervura mágica", "Filtração simples", "Evaporação salgada"], correct: 0 },
    { q: "BÔNUS: Como se chama o grande berçário da natureza onde a água doce do rio se encontra com a água salgada do mar?", a: ["Cachoeira gigante", "Nascente", "Manguezal", "Deserto de sal"], correct: 2 },
    { q: "BÔNUS: De toda a água que existe no nosso planeta, qual é a porcentagem de água doce e líquida (que podemos beber)?", a: ["Metade (50%)", "Um quarto (25%)", "Menos de 1% (muito pouquinho!)", "Cerca de 10%"], correct: 2 },
    { q: "BÔNUS: Por que os cubos de gelo sempre flutuam no nosso copo de água em vez de afundarem como pedras?", a: ["Porque o gelo é mais pesado", "Porque o gelo é menos denso que a água líquida", "Porque o gelo tem bolhas de ar dentro", "Porque o copo empurra o gelo para cima"], correct: 1 },
    
    { q: "BÔNUS: A floresta Amazônica lança muita umidade no ar, formando gigantescas nuvens que viajam pelo Brasil levando chuva. Como os cientistas chamam isso?", a: ["Rios Voadores", "Nuvens Mágicas", "Cachoeiras Celestes", "Ventos de Água"], correct: 0 },
    { q: "BÔNUS: Alguns insetos conseguem andar por cima da água sem afundar! Qual propriedade da água cria uma 'pelinha' invisível que permite isso?", a: ["Gravidade", "Tensão Superficial", "Evaporação", "Magnetismo"], correct: 1 },
    { q: "BÔNUS: Como a água consegue subir pelas raízes até as folhas mais altas das árvores, vencendo a gravidade?", a: ["Com pequenos motores", "Através da Capilaridade", "Por causa do vento", "Porque a árvore empurra"], correct: 1 },
    { q: "BÔNUS: Em alguns lugares, a água brota do chão muito quente, formando as águas termais. O que aquece essa água debaixo da terra?", a: ["O sol que bate forte", "O calor do magma (rochas derretidas) no fundo da Terra", "Animais subterrâneos", "Correntes de eletricidade"], correct: 1 },
    { q: "BÔNUS: Um camelo pode passar dias sem beber água no deserto. Onde ele guarda a reserva de energia e água no corpo?", a: ["Na barriga", "Nas patas", "Nas corcovas (em forma de gordura)", "Nas bochechas"], correct: 2 }
];