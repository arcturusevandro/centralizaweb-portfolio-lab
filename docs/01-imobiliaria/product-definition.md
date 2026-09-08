# Projeto Conceito 01 — Imobiliária

**Fase:** Definição de produto antes do código  
**Data:** 08/09/2026  
**Responsável:** Evandro Bueno / CentralizaWeb

## Decisão de produto

Após a fase inicial de pesquisa, o primeiro Projeto Conceito público da CentralizaWeb será uma experiência digital para o mercado imobiliário.

A escolha não parte apenas da possibilidade de criar um layout visualmente atraente. O setor permite demonstrar competências de produto, UX/UI, organização de dados, busca e filtros, geração de leads, responsividade, confiança digital e conversão.

A pesquisa também reforçou que a presença digital do corretor vai além de simplesmente publicar imóveis. Fontes do Sistema COFECI-CRECI destacam o papel dos sites e portais na divulgação da carteira, a importância da comunicação orientada ao público e, mais recentemente, o peso de confiança, transparência e segurança em negociações imobiliárias.

## Problema que queremos explorar

Uma experiência imobiliária digital precisa atender pelo menos dois interesses diferentes:

1. pessoas que procuram um imóvel e querem encontrar rapidamente opções compatíveis;
2. proprietários que possuem um imóvel e podem se tornar novos leads de captação.

Ao mesmo tempo, o produto precisa transmitir confiança suficiente para que o visitante avance para uma conversa com o profissional.

Portanto, a hipótese do projeto é:

> Uma experiência digital clara, responsiva e orientada à intenção do visitante pode reduzir atrito na descoberta de imóveis e criar caminhos objetivos de contato tanto para interessados quanto para proprietários.

Esta é uma hipótese de produto para a demonstração, e não uma alegação de resultado comercial já comprovado.

## Personas de referência

### Persona A — Interessado em imóvel

Pessoa que deseja comprar ou alugar e chega ao site com critérios básicos em mente, como finalidade, localização, tipo de imóvel e faixa de preço.

**Necessidades principais:**
- entender rapidamente o que a empresa oferece;
- pesquisar sem navegar por páginas desnecessárias;
- comparar opções;
- visualizar informações essenciais do imóvel;
- conseguir contato de forma simples;
- perceber profissionalismo e segurança.

### Persona B — Proprietário

Pessoa que possui um imóvel e considera vender ou alugar, mas ainda não iniciou formalmente uma relação de intermediação.

**Necessidades principais:**
- entender como iniciar uma conversa;
- informar dados básicos do imóvel;
- solicitar contato ou avaliação;
- perceber que seus dados serão tratados com seriedade.

## Jornada principal

### Busca por imóvel

`Home → Comprar/Alugar → Filtros → Resultados → Detalhe do imóvel → Solicitar contato`

### Captação de proprietário

`Home → Anuncie seu imóvel → Informações iniciais → Solicitar avaliação/contato`

## MVP demonstrativo

A primeira versão deverá conter:

- página inicial;
- navegação clara entre comprar e alugar;
- campo de busca ou filtros essenciais;
- listagem de imóveis fictícios;
- página de detalhes de imóvel;
- galeria de imagens;
- informações como preço, localização aproximada, área, dormitórios, banheiros e vagas quando aplicável;
- CTA de contato;
- fluxo para proprietário solicitar avaliação/contato;
- seção institucional curta;
- elementos de confiança apresentados de forma ética;
- experiência responsiva para celular e desktop;
- aviso explícito de que se trata de projeto demonstrativo.

## O que ficará fora do MVP

Nesta fase não construiremos:

- CRM imobiliário completo;
- autenticação de usuários;
- painel administrativo complexo;
- pagamentos;
- assinatura eletrônica;
- integração oficial com COFECI/CRECI;
- consulta real de registro profissional;
- publicação automática em portais imobiliários;
- dados de imóveis reais sem autorização;
- métricas ou depoimentos inventados.

Esses recursos poderão aparecer futuramente como evolução técnica, desde que façam sentido para o objetivo do laboratório.

## Modelo inicial de dados do imóvel

Cada imóvel demonstrativo poderá conter:

- `id`
- `slug`
- `finalidade` — venda ou locação
- `tipo`
- `titulo`
- `cidade`
- `bairro`
- `preco`
- `area`
- `dormitorios`
- `suites`
- `banheiros`
- `vagas`
- `descricao`
- `caracteristicas[]`
- `imagens[]`
- `destaque`

Os dados serão fictícios e identificados como demonstração.

## Direção de UX/UI

A interface não deve parecer um template genérico nem um catálogo visual excessivamente carregado.

Princípios:

1. **Busca antes de decoração** — a intenção de comprar/alugar deve estar evidente logo no início.
2. **Imóvel como informação, não apenas fotografia** — imagens são importantes, mas preço, localização, características e CTA precisam ter hierarquia clara.
3. **Mobile first** — a experiência deve funcionar especialmente bem em telas pequenas.
4. **Contato contextual** — CTAs devem aparecer no momento em que fazem sentido, sem transformar toda a página em propaganda.
5. **Confiança sem fabricação** — nenhum selo, registro, avaliação ou número será inventado para aumentar artificialmente a credibilidade.
6. **Acessibilidade e legibilidade** — contraste, tamanho de texto, estados de foco e semântica deverão ser considerados desde a implementação.

## Confiança e conformidade como requisito de produto

A pesquisa encontrou razões para tratar confiança como requisito funcional, e não somente visual.

O CRECISP destaca que negociações imobiliárias envolvem patrimônio, documentação, contratos e planejamento financeiro e reforça a importância de transparência e segurança. Também alerta para golpes digitais, incluindo anúncios clonados e falsa intermediação.

Além disso, a Resolução COFECI nº 1.404/2018 estabelece que somente pode anunciar publicamente o corretor, pessoa física ou jurídica, que possua contrato escrito de intermediação imobiliária.

Por isso, este laboratório adotará as seguintes regras:

- não copiar anúncios reais de terceiros;
- não apresentar imóveis reais como carteira da marca fictícia;
- não inventar número de CRECI para simular regularidade;
- não usar selo oficial do Sistema COFECI-CRECI de forma a sugerir vínculo;
- identificar claramente a experiência como demonstração;
- usar dados e identidade fictícios na camada comercial.

## Critérios de aceite da primeira versão

A demo será considerada pronta para publicação quando:

- funcionar corretamente em celular e desktop;
- permitir chegar de Home a um imóvel em poucos passos;
- permitir filtrar ou selecionar imóveis por critérios essenciais;
- possuir ao menos um fluxo completo de detalhe → contato;
- possuir fluxo claro para proprietário → solicitação de contato;
- não contiver links quebrados na jornada principal;
- não depender de dados pessoais reais;
- não sugerir que a empresa fictícia possui autorização, registro ou carteira real;
- apresentar carregamento e navegação adequados para uma demonstração pública;
- possuir metadados básicos de título e descrição;
- registrar no GitHub as principais etapas de implementação e correção.

## Estratégia técnica inicial

A implementação deverá favorecer simplicidade, desempenho e facilidade de publicação. A stack final será registrada no primeiro commit de desenvolvimento, depois de validarmos a arquitetura da interface.

O objetivo técnico não é usar o maior número possível de tecnologias. É escolher ferramentas proporcionais ao problema e conseguir explicar por que foram utilizadas.

## Como este projeto será avaliado no laboratório

A demonstração terá dois tipos de resultado:

### Resultado comercial
- capacidade de gerar interesse no Instagram e no portfólio;
- acessos à demonstração;
- contatos ou pedidos de orçamento atribuíveis ao projeto, quando houver dados reais para isso.

### Resultado profissional/técnico
- qualidade do planejamento;
- clareza das decisões registradas;
- organização do código;
- responsividade;
- acessibilidade;
- qualidade dos commits;
- problemas encontrados e como foram corrigidos;
- evolução entre versões.

Nenhum resultado será antecipado ou fabricado. Métricas só serão documentadas depois que existirem.

## Próxima etapa

Criar a arquitetura de informação e o wireframe textual da experiência antes de iniciar o desenvolvimento visual.

Somente depois dessa etapa será realizado o primeiro commit de código do Projeto Conceito 01.

---

### Referências consultadas

- CRECISP — Corretor de imóveis: confiança e segurança nas negociações (21/08/2026)
- CRECISP — Golpes imobiliários: como identificar riscos e proteger o consumidor (30/01/2026)
- CRECISP — Palestra sobre anúncios para corretores de imóveis (27/05/2020)
- CRECISP — Disponibilização de site para corretores e importância da carteira digital (09/03/2018)
- COFECI — Resolução nº 1.404/2018, publicidade e contrato escrito de intermediação
