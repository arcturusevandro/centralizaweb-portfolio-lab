# Identidade e Stack — Projeto Conceito Imobiliário

**Data da decisão:** 08/09/2026  
**Fase:** Pré-desenvolvimento  
**Objetivo:** transformar pesquisa, produto e wireframe em uma direção visual e técnica executável antes do primeiro commit de código.

## 1. Marca fictícia de trabalho

Para separar claramente projeto conceito, cliente real e marcas de terceiros, a primeira demo utilizará uma identidade fictícia própria.

**Nome de trabalho:** Horizonte Imóveis  
**Assinatura:** Encontre o espaço para o seu próximo capítulo.

O nome é provisório até uma checagem de colisão de marca/nome antes da publicação. Ele não deve ser apresentado como empresa real, cliente da CentralizaWeb ou imobiliária registrada.

A demonstração deverá conter identificação discreta e inequívoca de que se trata de um **Projeto Conceito desenvolvido pela CentralizaWeb**, com imóveis e dados demonstrativos.

## 2. Personalidade da experiência

A interface deve transmitir:

- confiança sem aparência burocrática;
- sofisticação sem luxo artificial;
- clareza antes de efeitos visuais;
- proximidade humana sem linguagem informal excessiva;
- foco no imóvel e na decisão do usuário;
- sensação de produto real, não de template genérico.

A direção visual deve evitar clichês de projetos gerados automaticamente: excesso de gradientes, brilhos, cards flutuantes sem função, textos genéricos, números inventados e elementos decorativos que não apoiem a jornada.

## 3. Direção visual

### Fotografia

Imóveis serão o principal elemento visual. As imagens devem ter aparência editorial/natural e coerência entre si. Para a publicação pública, utilizaremos somente ativos com licença adequada ou imagens produzidas especificamente para o projeto.

### Tipografia

Priorizar legibilidade, hierarquia e boa renderização em dispositivos móveis. A escolha final será feita durante a implementação, evitando dependência desnecessária de fontes pesadas.

### Cores

A paleta final será validada visualmente durante a implementação. O conceito inicial trabalha com base neutra clara, texto de alto contraste e uma cor de ação sóbria. A cor deve ajudar a orientar CTAs e estados, não funcionar apenas como decoração.

### Componentes essenciais

- cabeçalho responsivo;
- busca principal;
- filtros;
- cards de imóveis;
- chips de características;
- galeria;
- bloco de informações do imóvel;
- CTAs de contato;
- formulário de captação de proprietário;
- estados vazios e feedback de interação;
- rodapé com transparência sobre a natureza demonstrativa.

## 4. Stack técnica escolhida

### Front-end

**React + TypeScript + Vite**.

Motivos:

1. React permite estruturar a interface em componentes reutilizáveis, adequado para cards, filtros, galeria e formulários.
2. TypeScript adiciona tipagem ao modelo de dados e às propriedades dos componentes, ajudando a documentar contratos e reduzir erros durante a evolução.
3. Vite fornece um ambiente enxuto de desenvolvimento e build para aplicações React e é adequado para uma demonstração predominantemente client-side.
4. A combinação mantém o projeto suficientemente simples para o MVP sem impedir evolução posterior.

### Estilos

CSS organizado por tokens e componentes, priorizando fundamentos da plataforma antes de adicionar bibliotecas de UI. Uma biblioteca só será incorporada se resolver um problema concreto e documentado.

### Dados do MVP

Dados locais tipados para os imóveis fictícios. Não haverá banco de dados no primeiro ciclo porque persistência remota não é necessária para validar a experiência central.

### Roteamento

Rotas client-side para home, listagem, detalhe do imóvel e captação de proprietário. A biblioteca de roteamento será definida na implementação conforme a necessidade real do primeiro corte.

### Deploy

**Vercel**, integrada ao GitHub. A documentação da Vercel confirma suporte a projetos React/Vite e integração com provedores Git para deploy contínuo e URLs de preview. Isso atende ao objetivo do laboratório de manter código, histórico e demonstração navegável conectados.

## 5. Por que não começar com backend

O objetivo do primeiro MVP é validar:

- arquitetura da informação;
- qualidade visual;
- busca e filtragem demonstrativas;
- navegação entre listagem e detalhe;
- experiência mobile;
- captação de intenção de contato;
- capacidade de apresentar o conceito publicamente.

Banco de dados, autenticação, painel administrativo e CRM adicionariam complexidade sem responder melhor às perguntas desta fase. Caso a demo evolua para produto ou gere demanda real, essas capacidades poderão ser planejadas em ciclos posteriores.

## 6. Modelo de engenharia

A implementação deve privilegiar:

- componentes pequenos e legíveis;
- dados separados da camada visual;
- tipos explícitos para entidades principais;
- HTML semântico;
- acessibilidade por teclado;
- labels e nomes acessíveis em formulários;
- imagens responsivas e otimizadas;
- ausência de segredos no repositório;
- commits pequenos e descritivos;
- nenhuma dependência adicionada sem finalidade clara.

## 7. Estratégia de Git

A partir do primeiro código, mudanças relevantes devem ser registradas por intenção, não por quantidade de arquivos.

Exemplos de commits desejados:

- `chore: inicializa aplicação React e TypeScript`
- `feat: cria estrutura responsiva da home`
- `feat: adiciona catálogo e modelo tipado de imóveis`
- `feat: implementa filtros da busca`
- `feat: cria página de detalhes do imóvel`
- `feat: adiciona jornada de captação de proprietário`
- `fix: corrige navegação e estados responsivos`
- `perf: otimiza carregamento das imagens`
- `docs: registra aprendizados do primeiro deploy`

Evitar commits artificiais criados apenas para aumentar atividade. O histórico deve refletir trabalho real.

## 8. Critérios para iniciar o código

A fase de desenvolvimento pode começar porque já existem registros de:

- origem e estratégia do laboratório;
- pesquisa inicial de nichos;
- aprofundamento do mercado imobiliário;
- definição de produto e MVP;
- arquitetura de informação e wireframe textual;
- direção de identidade;
- stack e princípios técnicos.

## 9. Decisão arquitetural registrada

**ADR-001 — MVP client-side antes de infraestrutura de dados**

Decisão: construir a primeira versão como aplicação React + TypeScript + Vite, com dados demonstrativos locais e deploy na Vercel.

Razão: o risco atual está na experiência, apresentação e capacidade de demonstrar valor, e não em persistência ou escala de backend.

Consequência positiva: ciclo de desenvolvimento menor, deploy simples, menos dependências e foco na qualidade do front-end.

Trade-off: dados não serão administráveis por usuário final neste primeiro ciclo. Essa limitação é intencional e será reavaliada somente quando houver necessidade comprovada.

## 10. Próximo marco

O próximo commit deverá ser o **primeiro commit de código do projeto conceito imobiliário**. Ele deve inicializar a aplicação e estabelecer a estrutura técnica mínima, sem tentar construir toda a interface de uma vez.

A partir desse ponto, cada funcionalidade deverá nascer como consequência das decisões documentadas anteriormente.
