
Food Atlas in React 

Food Atlas in React é uma aplicação front-end desenvolvida em React cujo objetivo é permitir que usuários explorem pratos típicos de diferentes países e regiões do mundo, utilizando dados reais provenientes de uma API pública.

O projeto foi desenvolvido conforme o escopo do Projeto Final da TripleTen, com foco em clareza de escopo, boas práticas, organização e qualidade de portfólio.

Visão Geral

A aplicação permite que o usuário:

Navegue por uma lista de pratos internacionais;
Escolha diferentes formas de exploração (por país ou por categoria);
Visualize detalhes de um prato específico sob demanda;
Interaja com a interface sem recarregamento de página;

O projeto não possui back-end próprio e consome exclusivamente dados da API pública TheMealDB, utilizando apenas recursos de front-end.

 Objetivo do Projeto

- Explorar dados reais de uma API pública;
- Aplicar conceitos fundamentais de React;
- Trabalhar com componentes reutilizáveis;
- Implementar fluxo completo de requisição e renderização;
- Manter código simples, legível e dentro do escopo obrigatório;

Tecnologias Utilizadas

- React;
- Vite;
- JavaScript;
- React Router;
- CSS por componente;
- API pública **TheMealDB**

Decisões Técnicas Importantes

- Tipo de projeto: Aplicação Front-End;
- Linguagem: JavaScript (não TypeScript);
- Gerenciamento de rotas: React Router;
- Estilo: CSS separado por componente;
- Metodologia BEM aplicada à nomenclatura de classes;
- Idioma do código: inglês;
- Idioma do conteúdo: português;
- Sem backend próprio;
- Sem autenticação;
- Sem banco de dados;
- Sem Context API;

Funcionalidades Implementadas

Navegação:

Rotas configuradas com React Router;
Página inicial (/);
Página de pratos (/pratos);
Página sobre (/sobre);
Header e Footer persistentes;

Consumo de API:

Integração com a API pública TheMealDB;
Requisição realizada via fetch;
Função de API centralizada em utils/mealApi.js.

Gerenciamento de Estado:
Estado para lista de refeições;
Estado de carregamento (isLoading);
Estado de erro;
Estado de controle de quantidade exibida (visibleCount).

Fluxo de Carregamento:
Preloader exibido durante a requisição;
Mensagem de erro em caso de falha;
Mensagem de vazio quando nenhum dado é encontrado.

Renderização de Dados:
Renderização dinâmica dos pratos;
Componente reutilizável MealCard;
Exibição de imagem e nome do prato;
Layout em grid;
Botão “Mostrar mais”;
Exibe 3 pratos inicialmente;
Carrega mais 3 a cada clique;
Botão desaparece ao exibir todos os itens.

Fluxo de Navegação e Funcionalidades:
Página Inicial:

A página inicial apresenta o propósito do projeto e introduz o conceito do Food Atlas como uma ferramenta de exploração gastronômica.
Seu papel é contextualizar o usuário, sem antecipar instruções de uso ou detalhes técnicos.

Página de Pratos — Exploração de Dados:

A página de listagem de pratos é o núcleo funcional da aplicação.
Nela, foi implementado um menu exploratório, permitindo Exploração por País (Área Culinária)
No modo de exploração por país, o usuário pode selecionar uma área culinária e visualizar apenas os pratos associados àquela origem.
A lista de países exibida depende exclusivamente das áreas culinárias disponíveis na API. 
Nem todos os países do mundo estão representados, uma vez que apenas regiões que possuem pratos cadastrados são retornadas.

Essa limitação é inerente aos dados externos e é comunicada de forma transparente ao usuário na página About do projeto. O usuário escolhe como deseja navegar pelos dados, sem trocar de página ou perder o contexto.

As opções disponíveis são:

Explorar pratos por país (área culinária);

Explorar pratos por categoria;

A interface indica visualmente o modo ativo, garantindo uma navegação clara e previsível.


Exploração por Categoria:

No modo de exploração por categoria, o usuário pode navegar pelos pratos de acordo com seu tipo de preparo, como sobremesas, carnes, frutos do mar, entre outros.

A listagem é atualizada dinamicamente conforme a categoria selecionada, sem recarregamento da página, mantendo a experiência fluida e responsiva.

Refinamentos de Experiência do Usuário:

Para tornar a navegação mais clara e agradável, foram implementados diversos ajustes de usabilidade:

Indicação textual do filtro ativo;
Botão para limpar filtros e retornar à listagem inicial;
Mensagens contextuais quando nenhum prato é encontrado;
Preservação do funcionamento do botão “Mostrar mais”, mesmo após a aplicação de filtros.

Esses refinamentos garantem que o usuário sempre compreenda o estado atual da aplicação.

Visualização Detalhada do Prato:

Para evitar sobrecarregar a listagem principal e, ao mesmo tempo, permitir maior aprofundamento, foi implementada uma visualização expandida do prato.

A interação ocorre exclusivamente ao clicar na imagem de um card, abrindo um modal que exibe informações adicionais sem redirecionamento de página.

No modal, são apresentados:

Imagem do prato em tamanho maior;
Nome do prato;
Origem (área culinária);
Categoria.

Essa abordagem mantém os cards compactos e leves, enquanto permite que o usuário conheça melhor cada prato sob demanda.

Aspectos Técnicos:

Projeto desenvolvido exclusivamente em front-end;
React como biblioteca principal;
Vite como ferramenta de build e desenvolvimento;
Consumo de API pública utilizando fetch;
Renderização condicional e controle de estado com useState e useEffect;
Implementação de modal sem bibliotecas externas;
Código organizado de forma incremental, sem regressões;
Ausência de back-end próprio.




