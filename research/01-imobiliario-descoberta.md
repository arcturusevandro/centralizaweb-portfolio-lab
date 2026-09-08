# Pesquisa 01 — Projeto Conceito para o Mercado Imobiliário

**Data:** 08 de setembro de 2026  
**Fase:** Descoberta / pré-desenvolvimento  
**Status:** Hipótese em validação

## Objetivo

Antes de desenhar ou programar a primeira demonstração pública da CentralizaWeb, esta etapa procura entender quais problemas uma presença digital própria pode resolver para um corretor ou pequena imobiliária e quais competências o projeto poderá demonstrar tecnicamente.

A intenção não é reproduzir portais imobiliários existentes. O projeto conceito deverá mostrar como um ativo digital próprio pode combinar apresentação profissional, descoberta de imóveis, geração de leads e captação de proprietários.

## Evidências observadas

### 1. Descoberta e distribuição de imóveis já são digitais

O próprio Sistema COFECI-CRECI mantém iniciativas digitais para cadastro, divulgação e relacionamento no setor. O Portal Creci Brasil foi apresentado pelo COFECI como ambiente de anúncios de corretores e imobiliárias, evidenciando a relevância da distribuição digital de imóveis.

Fonte consultada: COFECI — Portal Creci Brasil.
https://www.cofeci.gov.br/post/portal-creci-brasil-a-nossa-liberta%C3%A7%C3%A3o

### 2. O trabalho do corretor envolve perfis e necessidades diferentes

Uma iniciativa atual do COFECI, o Ei Colibri, coleta dados como cidade de atuação, compra e venda residencial/comercial, aluguel, tipologia de imóvel e perfil do cliente. Isso reforça que a experiência digital imobiliária precisa considerar segmentação, e não apenas exibir uma lista única de imóveis.

Fonte consultada: COFECI — Ei Colibri.
https://corretor.eicolibri.cofeci.gov.br/

### 3. Confiança e conformidade fazem parte do produto

O setor imobiliário é regulamentado. A Resolução COFECI nº 1.404/2018 reafirma que o anúncio público de oferta imobiliária depende de contrato escrito de intermediação. Portanto, uma demonstração responsável não deve inventar imóveis reais, autorizações, registros profissionais ou relações comerciais inexistentes.

Fonte consultada: Resolução COFECI nº 1.404/2018.
https://intranet.cofeci.gov.br/arquivos/legislacao/resolucao_1404_18.pdf

O Sistema de Governança e Registro (SGR) do COFECI também enfatiza contratos, documentos, assinatura, segurança jurídica e eficiência operacional, indicando que confiança documental é parte importante da jornada profissional do setor.

Fonte consultada: SGR/COFECI.
https://sgr.cofeci.gov.br/

## Problema que queremos explorar

Um corretor ou pequena imobiliária pode depender de redes sociais e grandes portais para exposição, mas ainda precisa de um espaço digital próprio que apresente sua marca, organize sua oferta e converta interesse em contato.

Nossa hipótese é que uma experiência própria pode atuar em quatro frentes:

1. **Credibilidade** — apresentar empresa/profissional, região de atuação e proposta de valor;
2. **Descoberta** — permitir que o visitante encontre imóveis por intenção e características;
3. **Conversão** — transformar interesse em contato contextualizado;
4. **Captação** — permitir que proprietários manifestem interesse em anunciar ou avaliar um imóvel.

## Jornada proposta para a demonstração

### Jornada A — Pessoa procurando imóvel

`Entrada → escolha de intenção → busca/filtros → imóvel → detalhes → contato`

A demonstração deverá reduzir o caminho entre encontrar um imóvel compatível e iniciar uma conversa.

### Jornada B — Proprietário

`Entrada → quero anunciar meu imóvel → informações básicas → solicitação de contato/avaliação`

Essa segunda jornada é importante porque demonstra que o site não precisa ser apenas catálogo: pode também captar oferta.

### Jornada C — Visitante ainda indeciso

`Entrada → imóveis em destaque / regiões / proposta de valor → exploração → contato`

## MVP conceitual

A primeira versão deverá priorizar:

- home responsiva;
- identidade de uma imobiliária fictícia;
- busca por compra ou locação;
- filtros essenciais;
- cards de imóveis;
- página de detalhes;
- CTA de contato contextualizado;
- formulário de interesse;
- jornada “anuncie seu imóvel”;
- apresentação institucional e elementos de confiança;
- experiência mobile consistente;
- aviso explícito de que se trata de demonstração/projeto conceito.

## O que não entra inicialmente

Para preservar foco e não simular capacidades que ainda não existem, o primeiro MVP não precisa ter:

- pagamentos;
- assinatura real de contratos;
- CRM completo;
- autenticação de clientes;
- imóveis reais de terceiros;
- integração real com CRECI/COFECI;
- métricas comerciais inventadas;
- avaliações ou depoimentos falsos.

Esses recursos poderão virar hipóteses de evolução em versões posteriores.

## Competências técnicas que o projeto pode demonstrar

O projeto foi escolhido não apenas por potencial comercial, mas porque permite evidenciar várias competências em um único produto:

- modelagem de dados de imóveis;
- busca e filtragem;
- gerenciamento de estado no front-end;
- componentes reutilizáveis;
- rotas e páginas dinâmicas;
- formulários e validação;
- design responsivo;
- UX orientada à conversão;
- SEO técnico básico;
- acessibilidade;
- performance de imagens;
- deploy e evolução contínua.

## Diretriz visual

Evitar aparência de template genérico e também evitar estética exageradamente futurista associada a “site feito por IA”. O visual deve se aproximar de uma empresa real: fotografia imobiliária forte, tipografia legível, hierarquia clara, espaço em branco, informações objetivas e ações previsíveis.

A interface deve transmitir patrimônio, confiança e facilidade, não tecnologia pela tecnologia.

## Integridade da demonstração

Todos os nomes, imóveis, valores e pessoas utilizados no projeto conceito deverão ser fictícios ou claramente licenciados para demonstração. Nenhum CRECI fictício será apresentado como registro verdadeiro. Não serão utilizadas marcas institucionais de forma que sugira vínculo com o Sistema COFECI-CRECI.

## Hipótese de produto

> Se criarmos uma experiência imobiliária própria que una descoberta de imóveis, contato contextualizado e captação de proprietários, conseguiremos demonstrar simultaneamente valor comercial para potenciais clientes e competências de produto/desenvolvimento para avaliação profissional.

## Critérios para considerar o MVP bem-sucedido

Como ainda será um projeto conceito sem tráfego comercial comprovado, não criaremos métricas fictícias de conversão. O primeiro sucesso será avaliado por critérios verificáveis de produto:

- funcionamento das jornadas principais;
- responsividade;
- clareza da navegação;
- qualidade dos filtros;
- performance e acessibilidade;
- deploy público funcional;
- documentação das decisões;
- capacidade de apresentar o projeto em vídeo e permitir navegação por terceiros.

## Próxima decisão

Antes do primeiro commit de código, definir:

1. persona primária (corretor autônomo ou pequena imobiliária);
2. cidade/região fictícia de atuação;
3. posicionamento e nome da marca fictícia;
4. arquitetura das páginas;
5. modelo mínimo de dados dos imóveis;
6. stack técnica;
7. critérios objetivos de aceite do MVP.

Somente depois dessas definições começará a implementação.