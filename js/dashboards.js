/* ==========================================================================
   DASHBOARDS EM POWER BI  —  é aqui que você atualiza ou inclui dashboards.
   Cada bloco { ... } vira um card na seção "Projetos em destaque".

   Para INCLUIR: copie um bloco inteiro, cole abaixo (com vírgula entre eles) e troque os textos.
   Para ATUALIZAR O LINK: troque só o valor de "link" (o endereço público do Power BI:
     Arquivo > Incorporar relatório > Publicar na Web, e copie o link).
   As imagens ficam na pasta assets/projetos/ (use o mesmo nome do arquivo aqui).

   titulo  : nome que aparece no card
   resumo  : texto de "Objetivos principais e indicadores"
   link    : endereço público do relatório
   capa    : imagem da capa (aparece no notebook)
   prints  : duas imagens do relatório (visão geral e detalhe)
   ========================================================================== */
window.DASHBOARDS = [
  {
    titulo: "Dashboard de Vendas",
    resumo: "Acompanha o desempenho de vendas de uma rede de eletrônicos: faturamento, lucro, quantidade vendida e margem de lucro, com comparação mensal contra o ano anterior e cortes por tipo de loja, produto e continente. Uma segunda página mede o impacto das devoluções: faturamento perdido, percentual de devoluções ao longo do tempo, por região e por marca.",
    link: "https://app.powerbi.com/view?r=eyJrIjoiMjZkMGVkOTUtYWVhYy00Njc5LWI3YzEtZjU0ZTgyNTA0YTUwIiwidCI6ImM2MmIwYjIyLWY5MjMtNGVjZS1hOWUzLWM2Y2JlMmRkMzJkZSJ9&pageName=36bd72e72c405df17331",
    capa: "assets/projetos/eletro10-capa.png",
    prints: [
      { src: "assets/projetos/eletro10-visao.png", alt: "Página de análise de vendas: faturamento, lucro, vendas e margem, por mês, loja, produto e continente" },
      { src: "assets/projetos/eletro10-detalhe.png", alt: "Página de devoluções: faturamento perdido e percentual de devoluções por mês, continente e marca" }
    ]
  },
  {
    titulo: "Data Toys: Dashboard Comercial e de Produtos",
    resumo: "Acompanha as vendas de uma empresa de brinquedos: receita, pedidos e itens vendidos, atingimento de meta, evolução ao longo do tempo, ranking por categoria e distribuição por UF e região. A página de produtos detalha a origem (importado ou nacional), os fornecedores com vendas e quantidades, e a relação entre vendas e quantidade por categoria.",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNzU0NDU3ZDYtM2RhOC00MTM3LTliOTktMjc3YTE4NzUwOWE3IiwidCI6ImM2MmIwYjIyLWY5MjMtNGVjZS1hOWUzLWM2Y2JlMmRkMzJkZSJ9&pageName=a5480b22e32a83c7c8c6",
    capa: "assets/projetos/datatoys-capa.png",
    prints: [
      { src: "assets/projetos/datatoys-visao.png", alt: "Visão geral comercial: receita, pedidos, itens vendidos, meta e vendas por categoria e região" },
      { src: "assets/projetos/datatoys-detalhe.png", alt: "Detalhamento de produtos: origem, fornecedores e relação entre vendas e quantidade" }
    ]
  },
  {
    titulo: "Gestão de Indicadores: Visão da Diretoria",
    resumo: "Painel executivo com metas e indicadores para a diretoria de um e-commerce, organizado em visões de produto, pagamentos, pedidos, avaliações, vendedores e vendas. Reúne vendas por estado com curva de Pareto, taxa acumulada, desconto de frete, metas de vendas, análise de cohort e o desempenho dos vendedores.",
    link: "https://app.powerbi.com/view?r=eyJrIjoiMWJkYzExZTEtMGM5OS00YzJhLWIyMDEtNjEzN2E5Nzg2N2U1IiwidCI6ImM2MmIwYjIyLWY5MjMtNGVjZS1hOWUzLWM2Y2JlMmRkMzJkZSJ9&pageName=c7d9ac82c824415b3da6",
    capa: "assets/projetos/indicadores-capa.png",
    prints: [
      { src: "assets/projetos/indicadores-visao.png", alt: "Análise de vendas: total de vendas, Pareto por estado, meta e análise de cohort" },
      { src: "assets/projetos/indicadores-detalhe.png", alt: "Análise de vendedores: vendas por estado, mapa e desempenho contra a meta" }
    ]
  },
  {
    titulo: "NYC Airbnb: onde ficar e como reservar",
    resumo: "Analisa os anúncios de Airbnb de Nova York em 2019 em duas perguntas: onde ficar e como reservar. Mostra quantidade de anúncios, preço mediano, ocupação estimada, disponibilidade, noites mínimas e padrão de preço, por bairro, tipo de quarto e região.",
    link: "https://app.powerbi.com/view?r=eyJrIjoiMWRjODUyNzktNThhZC00NTcxLWE2ODItMzY5YTFiMmEyZmI4IiwidCI6ImM2MmIwYjIyLWY5MjMtNGVjZS1hOWUzLWM2Y2JlMmRkMzJkZSJ9",
    capa: "assets/projetos/nyc-capa.png",
    prints: [
      { src: "assets/projetos/nyc-visao.png", alt: "Onde ficar: anúncios, preço mediano, ocupação e preço por bairro e tipo de quarto" },
      { src: "assets/projetos/nyc-detalhe.png", alt: "Como reservar: preço mínimo final, noites mínimas, mapa por bairro e padrão de preço" }
    ]
  },
  {
    titulo: "People Analytics: TechPeople Brasil",
    resumo: "Transforma dados de Recursos Humanos em insumo para a diretoria: quadro de funcionários, taxa de turnover, salário médio e percentual de alta performance. Detalha o headcount por ano, departamento, cargo e estado, e o turnover por departamento, cargo e motivo de desligamento.",
    link: "https://app.powerbi.com/view?r=eyJrIjoiOWE0ZWZlODAtZWNhMi00ZGI3LTk4YjAtZDA3OTE4M2IwZjVmIiwidCI6ImM2MmIwYjIyLWY5MjMtNGVjZS1hOWUzLWM2Y2JlMmRkMzJkZSJ9&pageName=aa6480ae04303581dceb",
    capa: "assets/projetos/people-capa.png",
    prints: [
      { src: "assets/projetos/people-visao.png", alt: "Headcount ativo por ano, departamento, cargo e estado" },
      { src: "assets/projetos/people-detalhe.png", alt: "Taxa de turnover por ano, motivo, departamento e cargo" }
    ]
  },
  {
    titulo: "Alocação em projetos",
    resumo: "Controla as horas apontadas em projetos de consultoria e implantação: total de horas, projetos e colaboradores ativos e média de horas por colaborador ao dia. Mostra horas por projeto e colaborador, por mês e por função, além dos projetos ativos mês a mês e da alocação de recursos.",
    link: "https://app.powerbi.com/view?r=eyJrIjoiYzk3NzNlMTMtMDNlYi00MzNkLTk1ZDAtMTA3YzMxZDI0ZDY4IiwidCI6ImM2MmIwYjIyLWY5MjMtNGVjZS1hOWUzLWM2Y2JlMmRkMzJkZSJ9&pageName=dc95597ef53ea9b694c5",
    capa: "assets/projetos/projetos-capa.png",
    prints: [
      { src: "assets/projetos/projetos-visao.png", alt: "Visão das horas: total de horas por projeto, colaborador e mês" },
      { src: "assets/projetos/projetos-detalhe.png", alt: "Visão dos projetos: projetos ativos por mês e alocação de colaboradores" }
    ]
  },
  {
    categoria: "analise",
    emTodos: true,
    tag: "Análise de Dados & IA",
    botao: "Clique para ver o resumo do case",
    titulo: "Case Módena Móveis: Commercial Performance",
    resumo: "Análise com apoio de IA de dois anos de vendas (1.645 vendas, 2023 e 2024) de uma rede de móveis, do contexto de negócio às recomendações: 21 hipóteses testadas e um dashboard executivo que responde às 10 perguntas da diretoria. Principais achados: o crescimento de 17,6% cai para 9,8% sem uma venda corporativa atípica; ele veio de volume, não de ticket; a Loja ABC é a melhor aposta para 2025 e a logística de Campinas pede atenção.",
    /* Resumo visual (imagens com marca d'água). O PDF completo NÃO é publicado: é enviado por pedido. */
    galeria: [
      "assets/case-modena/pagina-1.jpg", "assets/case-modena/pagina-2.jpg", "assets/case-modena/pagina-3.jpg",
      "assets/case-modena/pagina-4.jpg", "assets/case-modena/pagina-5.jpg", "assets/case-modena/pagina-6.jpg"
    ],
    pedido: { texto: "Solicitar documentação completa", email: "fjscortese@gmail.com", assunto: "Documentação completa: Case Módena Móveis" },
    capa: "assets/projetos/modena-capa.png",
    prints: [
      { src: "assets/projetos/modena-visao.png", alt: "Faturamento acumulado mês a mês, 2023 contra 2024" },
      { src: "assets/projetos/modena-detalhe.png", alt: "Contribuição de cada loja, vendedor, categoria e canal para o crescimento" }
    ]
  },
  {
    categoria: "analise",
    emTodos: true,
    tag: "Análise de Dados & IA",
    botao: "Clique para ver o resumo do case",
    titulo: "Operação Cafeteria: Análise de Dados com IA",
    resumo: "Análise exploratória, com a IA como co-analista, do faturamento de uma rede de 3 cafeterias em Nova York (jan a jun de 2023, 149 mil transações): 12 hipóteses testadas e recomendações para o gerente de operações. O faturamento dobrou (+103,8%), puxado só por volume, com o ticket médio estagnado; 45,8% das vendas acontecem entre 7h e 10h; e Coffee Beans tem ticket 5 vezes maior, mas pesa só 5,7%.",
    /* Resumo visual (imagens com marca d'água). A documentação completa é enviada por pedido. */
    galeria: [
      "assets/case-cafeteria/pagina-1.jpg", "assets/case-cafeteria/pagina-2.jpg",
      "assets/case-cafeteria/pagina-3.jpg", "assets/case-cafeteria/pagina-4.jpg"
    ],
    pedido: { texto: "Solicitar documentação completa", email: "fjscortese@gmail.com", assunto: "Documentação completa: Projeto Cafeteria" },
    capa: "assets/projetos/cafeteria-capa.png",
    prints: [
      { src: "assets/projetos/cafeteria-visao.png", alt: "Decomposição do crescimento: volume de transações contra ticket médio" },
      { src: "assets/projetos/cafeteria-detalhe.png", alt: "Faturamento por loja, faixa horária, categoria e dia da semana" }
    ]
  },
  {
    categoria: "ml",
    emTodos: true,
    calculadora: true,
    tag: "Machine Learning",
    botao: "Clique para ver o case e a calculadora",
    titulo: "Modelagem Preditiva com Regressão Linear",
    resumo: "Case de educação online: prever o LTV (valor que o cliente gera ao longo do relacionamento) já na primeira compra, para orientar quanto investir em mídia em cada canal. Com 38.753 clientes e a metodologia CRISP-DM, a Regressão Linear superou o Polinomial e o Random Forest (R² = 0,848 e erro médio de R$ 404 no teste) e virou uma calculadora interativa: o LTV previsto muda conforme valor da 1ª compra, produto de entrada e estratégia de venda. No modelo, o valor da 1ª compra pesa mais; a recorrência reduz o LTV previsto em cerca de R$ 371.",
    /* Resumo visual (imagens com marca d'água) + calculadora interativa. A documentação completa é enviada por pedido. */
    galeria: [
      "assets/case-ltv/pagina-1.jpg", "assets/case-ltv/pagina-2.jpg", "assets/case-ltv/pagina-3.jpg",
      "assets/case-ltv/pagina-4.jpg", "assets/case-ltv/pagina-5.jpg"
    ],
    pedido: { texto: "Solicitar documentação completa", email: "fjscortese@gmail.com", assunto: "Documentação completa: Case LTV (Regressão Linear)" },
    capa: "assets/projetos/ltv-capa.png",
    prints: [
      { src: "assets/projetos/ltv-visao.png", alt: "Comparação dos modelos: validação cruzada e dados de teste" },
      { src: "assets/projetos/ltv-detalhe.png", alt: "Resumo do projeto e fases do CRISP-DM" }
    ]
  },
  {
    categoria: "ml",
    emTodos: true,
    tag: "Machine Learning",
    botao: "Clique para ver o resumo do case",
    titulo: "Classificação: Árvores, Ensemble e Boosting",
    resumo: "Case de crédito ao consumidor: prever a inadimplência em 2 anos de 150 mil clientes e transformar a probabilidade em decisão, considerando que aprovar um mau pagador custa R$ 5.000 e negar um bom pagador custa R$ 500. Seguindo o CRISP-DM, foram comparados Árvore de Decisão, Random Forest, XGBoost e LightGBM, com tratamento de base desbalanceada e dos códigos 96/98 de atraso, além de ponto de corte definido por custo. O XGBoost foi o vencedor, com limiar de 0,60, e virou um app em Streamlit que mostra a probabilidade, a decisão e as 5 principais causas (SHAP) de cada cliente.",
    /* Resumo visual (imagens com marca d'água). A documentação completa é enviada por pedido. */
    galeria: [
      "assets/case-credito/pagina-1.jpg", "assets/case-credito/pagina-2.jpg", "assets/case-credito/pagina-3.jpg",
      "assets/case-credito/pagina-4.jpg", "assets/case-credito/pagina-5.jpg", "assets/case-credito/pagina-6.jpg",
      "assets/case-credito/pagina-7.jpg", "assets/case-credito/pagina-8.jpg", "assets/case-credito/pagina-9.jpg",
      "assets/case-credito/pagina-10.jpg", "assets/case-credito/pagina-11.jpg"
    ],
    pedido: { texto: "Solicitar documentação completa", email: "fjscortese@gmail.com", assunto: "Documentação completa: Case Credit Scoring (Classificação)" },
    capa: "assets/projetos/credito-capa.png",
    prints: [
      { src: "assets/projetos/credito-visao.png", alt: "Taxa de inadimplência por número de atrasos registrados" },
      { src: "assets/projetos/credito-detalhe.png", alt: "SHAP: as 10 variáveis que mais influenciam a previsão de inadimplência" }
    ]
  },
  {
    categoria: "ml",
    emTodos: true,
    tag: "Machine Learning",
    botao: "Clique para ver o resumo do case",
    titulo: "Fila de Perícia: Modelo de Classificação",
    resumo: "Case de seguro de automóvel: priorizar quais sinistros vão para a perícia pela chance de fraude, com a mesma equipe de 900 perícias por mês. Em 60 mil sinistros (2,47% de fraude), o LightGBM, validado em sinistros mais recentes que os do treino, atingiu ROC AUC de 0,93 e PR AUC de 0,52, cerca de 22 vezes a taxa de fraude. Na fila do modelo, a perícia acha 189 fraudes por mês (a regra atual de valor acima de R$ 50 mil acha 13) e a economia chega a R$ 3,61 milhões por mês. O resumo executivo para o comitê também mostra por que ampliar a equipe além de cerca de 1.800 perícias não compensa e por que a coluna valor_indenizado ficou de fora (vazamento de informação).",
    /* Resumo visual (imagens com marca d'água): resumo executivo + principais gráficos da documentação. A documentação completa é enviada por pedido. */
    galeria: [
      "assets/case-pericia/pagina-1.jpg", "assets/case-pericia/pagina-2.jpg", "assets/case-pericia/pagina-3.jpg",
      "assets/case-pericia/pagina-4.jpg", "assets/case-pericia/pagina-5.jpg", "assets/case-pericia/pagina-6.jpg",
      "assets/case-pericia/pagina-7.jpg", "assets/case-pericia/pagina-8.jpg"
    ],
    pedido: { texto: "Solicitar documentação completa", email: "fjscortese@gmail.com", assunto: "Documentação completa: Case Fila de Perícia (Classificação)" },
    capa: "assets/projetos/pericia-capa.png",
    prints: [
      { src: "assets/projetos/pericia-visao.png", alt: "Taxa de fraude por tipo de sinistro, canal, tempo de apólice e faixa de valor" },
      { src: "assets/projetos/pericia-detalhe.png", alt: "Variáveis que mais pesam na priorização da fila (SHAP)" }
    ]
  },
  {
    categoria: "ml",
    emTodos: true,
    tag: "Machine Learning",
    botao: "Clique para ver o resumo do case",
    titulo: "Segmentação Estratégica (Clusterização)",
    resumo: "Case de varejo com 1.115 lojas: trocar a meta igual para todas (+5%) por metas definidas entre lojas realmente parecidas. A partir de 1 milhão de registros de loja por dia, o K-means (k = 5) agrupou as lojas por porte, ticket, resposta a promoção, volatilidade, sazonalidade e concorrência, sem usar o tipo de loja cadastrado. Os grupos se mantiveram estáveis nos testes (ARI médio acima de 0,92) e explicam o desempenho muito melhor que o cadastro atual. Cada grupo ganhou um nome e decisões para Comercial, Trade e Supply, o plano de metas por loja fecha em +5,00% ponderado por receita e a simulação aponta ganho anual teórico de R$ 58,2 milhões (recuperando 30% da distância até a mediana do grupo).",
    /* Resumo visual (imagens com marca d'água). A documentação completa é enviada por pedido. */
    galeria: [
      "assets/case-cluster/pagina-1.jpg", "assets/case-cluster/pagina-2.jpg", "assets/case-cluster/pagina-3.jpg",
      "assets/case-cluster/pagina-4.jpg", "assets/case-cluster/pagina-5.jpg", "assets/case-cluster/pagina-6.jpg",
      "assets/case-cluster/pagina-7.jpg", "assets/case-cluster/pagina-8.jpg", "assets/case-cluster/pagina-9.jpg",
      "assets/case-cluster/pagina-10.jpg", "assets/case-cluster/pagina-11.jpg", "assets/case-cluster/pagina-12.jpg",
      "assets/case-cluster/pagina-13.jpg", "assets/case-cluster/pagina-14.jpg", "assets/case-cluster/pagina-15.jpg",
      "assets/case-cluster/pagina-16.jpg", "assets/case-cluster/pagina-17.jpg"
    ],
    pedido: { texto: "Solicitar documentação completa", email: "fjscortese@gmail.com", assunto: "Documentação completa: Case Clusterização de Lojas" },
    capa: "assets/projetos/cluster-capa.png",
    prints: [
      { src: "assets/projetos/cluster-visao.png", alt: "Método do cotovelo e silhueta para escolher o número de grupos" },
      { src: "assets/projetos/cluster-detalhe.png", alt: "Matriz de correlação entre as variáveis das lojas" }
    ]
  },
  {
    categoria: "ml",
    emTodos: true,
    tag: "Machine Learning",
    botao: "Clique para ver o resumo do case",
    titulo: "Previsão de Demanda com Séries Temporais",
    resumo: "Case de varejo supermercadista com 144 lojas: prever a demanda de 28 dias (lead time de 14 dias mais ciclo de pedido de 14) e transformar a previsão em quantidade de compra, sabendo que faltar produto custa 15 vezes mais que sobrar. No produto piloto, uma escada de modelos (média de 4 semanas, naive sazonal, Holt-Winters, SARIMA e SARIMAX com promoção) foi testada em 12 janelas de backtest, e o estoque de segurança saiu do erro real dos modelos (nível de serviço de 93,75%). O SARIMAX foi o único a reduzir o custo em reais: de R$ 147,11 para R$ 91,25 por período (−38%), com o estoque de segurança caindo de 2.112 para 777 unidades. O resultado vale para um único produto e traz as limitações documentadas.",
    /* Resumo visual (imagens com marca d'água). A documentação completa é enviada por pedido. */
    galeria: [
      "assets/case-demanda/pagina-1.jpg", "assets/case-demanda/pagina-2.jpg", "assets/case-demanda/pagina-3.jpg",
      "assets/case-demanda/pagina-4.jpg", "assets/case-demanda/pagina-5.jpg", "assets/case-demanda/pagina-6.jpg",
      "assets/case-demanda/pagina-7.jpg", "assets/case-demanda/pagina-8.jpg", "assets/case-demanda/pagina-9.jpg",
      "assets/case-demanda/pagina-10.jpg", "assets/case-demanda/pagina-11.jpg", "assets/case-demanda/pagina-12.jpg",
      "assets/case-demanda/pagina-13.jpg", "assets/case-demanda/pagina-14.jpg", "assets/case-demanda/pagina-15.jpg",
      "assets/case-demanda/pagina-16.jpg", "assets/case-demanda/pagina-17.jpg", "assets/case-demanda/pagina-18.jpg",
      "assets/case-demanda/pagina-19.jpg"
    ],
    pedido: { texto: "Solicitar documentação completa", email: "fjscortese@gmail.com", assunto: "Documentação completa: Case Previsão de Demanda (Séries Temporais)" },
    capa: "assets/projetos/demanda-capa.png",
    prints: [
      { src: "assets/projetos/demanda-visao.png", alt: "Decomposição da série em tendência, sazonalidade semanal e resíduo" },
      { src: "assets/projetos/demanda-detalhe.png", alt: "Custo médio por período e estoque de segurança de cada modelo" }
    ]
  }
];
