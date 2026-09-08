# Arquitetura de Informação e Wireframe Textual — Demo Imobiliária

**Data:** 08/09/2026  
**Fase:** Produto / UX antes do código  
**Projeto:** Primeiro Projeto Conceito público da CentralizaWeb

## Objetivo desta etapa

Transformar a pesquisa e o escopo de produto em uma arquitetura navegável antes de iniciar a implementação. O objetivo é evitar desenvolver telas isoladas apenas por aparência e garantir que cada seção exista para atender uma necessidade da jornada.

## Evidências consideradas

A pesquisa de referências atuais do setor reforçou padrões recorrentes: separação clara entre comprar e alugar; busca por localização, tipo, preço e quartos; ficha detalhada do imóvel; contato direto; favoritos; e uma jornada específica para proprietários que desejam anunciar ou avaliar um imóvel.

Também observamos uma oportunidade de diferenciação: preservar a simplicidade da busca tradicional no MVP e deixar busca em linguagem natural/IA como hipótese futura, em vez de adicionar complexidade apenas para parecer tecnologicamente avançado.

## Princípio de experiência

O visitante deve conseguir responder rapidamente a uma destas perguntas:

1. Quero comprar — onde encontro opções compatíveis?
2. Quero alugar — onde encontro opções compatíveis?
3. Gostei deste imóvel — como vejo informações suficientes e entro em contato?
4. Tenho um imóvel — como solicito avaliação/anúncio?
5. Posso confiar nesta experiência — está claro que se trata de uma demonstração e quais dados são fictícios?

## Mapa de navegação

```text
HOME
├── Comprar
│   └── Resultados
│       └── Detalhe do imóvel
├── Alugar
│   └── Resultados
│       └── Detalhe do imóvel
├── Imóveis
│   └── Resultados com filtros
├── Anuncie seu imóvel
│   └── Formulário de captação
├── Sobre a demonstração
└── Contato / Solicitar projeto
```

## Wireframe textual — Home

### 1. Cabeçalho
- marca fictícia da imobiliária;
- navegação: Comprar, Alugar, Imóveis, Anuncie seu imóvel;
- CTA de contato;
- indicação discreta de “Projeto Conceito / Demonstração”.

### 2. Hero
- proposta de valor curta e específica;
- imagem imobiliária editorial, sem aparência de banco de template genérico;
- seletor principal: Comprar | Alugar;
- campo de localização;
- tipo de imóvel;
- faixa de preço;
- CTA “Buscar imóveis”.

Objetivo: permitir que a jornada principal comece sem rolagem excessiva.

### 3. Atalhos por intenção
- Quero comprar;
- Quero alugar;
- Quero anunciar meu imóvel.

Objetivo: atender também quem não quer preencher filtros imediatamente.

### 4. Imóveis em destaque
Cards com:
- foto;
- finalidade;
- tipo;
- bairro/cidade fictícios ou claramente demonstrativos;
- preço demonstrativo;
- quartos;
- banheiros;
- vagas;
- área;
- CTA “Ver imóvel”.

Nenhuma etiqueta de “mais vendido”, “imperdível” ou prova social será inventada.

### 5. Como funciona
Fluxo curto:
`Busque → Compare informações → Conheça o imóvel → Entre em contato`

### 6. Bloco para proprietários
Título orientado a intenção: “Tem um imóvel para vender ou alugar?”

- explicação curta;
- benefícios sem promessas numéricas inventadas;
- CTA “Quero anunciar meu imóvel”.

### 7. Confiança e transparência
- aviso de projeto demonstrativo;
- dados e imóveis fictícios;
- nenhuma associação com imobiliária ou conselho profissional real;
- espaço previsto para, em projeto comercial real, apresentar registro profissional e dados legítimos do cliente.

### 8. CTA final
- “Quer uma experiência como esta para sua imobiliária?”
- direcionamento para CentralizaWeb.

### 9. Rodapé
- marca fictícia;
- navegação;
- aviso de demonstração;
- crédito discreto: “Projeto Conceito desenvolvido pela CentralizaWeb”.

## Wireframe textual — Resultados de busca

### Cabeçalho da página
- termo/localização pesquisada;
- quantidade de resultados demonstrativos;
- Comprar | Alugar claramente selecionado.

### Filtros principais
MVP:
- finalidade;
- localização;
- tipo;
- faixa de preço;
- quartos.

Decisão: evitar excesso de filtros na primeira versão. Características secundárias ficam na ficha do imóvel.

### Resultados
- grade de cards responsiva;
- ordenação simples;
- estado vazio planejado;
- filtros persistentes durante a navegação quando tecnicamente adequado.

### Estado vazio
Não exibir tela morta. Mostrar:
- “Nenhum imóvel corresponde a estes filtros”;
- ação para limpar/refazer filtros;
- possibilidade de contato para informar o que procura.

## Wireframe textual — Detalhe do imóvel

### 1. Galeria
- imagem principal ampla;
- miniaturas ou navegação de galeria;
- contador de imagens.

### 2. Identificação
- título;
- localização;
- finalidade;
- preço;
- código fictício do imóvel;
- indicação de conteúdo demonstrativo.

### 3. Resumo objetivo
- área;
- quartos;
- suítes quando aplicável;
- banheiros;
- vagas.

### 4. Descrição
Texto específico e legível, evitando texto genérico de template.

### 5. Características
Exemplos demonstrativos:
- varanda;
- área de serviço;
- condomínio;
- pet friendly;
- elevador;
- lazer.

### 6. Localização
No MVP, localização contextual sem expor endereço de imóvel real. Mapa real só será usado quando houver dados apropriados/licenciamento e necessidade de integração.

### 7. CTA de conversão
- “Tenho interesse neste imóvel”;
- formulário curto ou ação de contato demonstrativa;
- contexto do imóvel deve acompanhar a intenção de contato em uma versão comercial real.

### 8. Imóveis semelhantes
Poucos cards relacionados para continuidade da navegação.

## Wireframe textual — Anuncie seu imóvel

### Hero
“Seu imóvel pode ser a próxima oportunidade do nosso catálogo.”

Deixar explícito que, nesta demo, o formulário demonstra uma jornada de captação.

### Formulário em etapas
**Etapa 1 — Sobre você**
- nome;
- telefone/WhatsApp;
- e-mail.

**Etapa 2 — Sobre o imóvel**
- finalidade: vender/alugar;
- tipo;
- cidade/região;
- quartos;
- faixa de valor esperada.

**Etapa 3 — Complemento**
- mensagem;
- consentimento adequado em implementação real;
- enviar solicitação.

Decisão: não solicitar documentação sensível em uma demonstração pública.

## Mobile first

A experiência deve ser projetada considerando o celular como cenário prioritário:
- busca utilizável com uma mão;
- filtros em painel/modal quando necessário;
- cards com informações essenciais sem poluição;
- CTA de contato acessível;
- galeria confortável por toque;
- formulários com campos e teclados apropriados;
- sem interações dependentes de hover.

## Acessibilidade mínima desde a primeira versão

- contraste adequado;
- hierarquia semântica de títulos;
- labels de formulário;
- navegação por teclado onde aplicável;
- foco visível;
- textos alternativos coerentes para imagens;
- botões com nomes claros;
- não depender apenas de cor para comunicar estado.

## Performance e SEO técnico previstos

Mesmo sendo demonstração, o projeto deverá permitir demonstrar práticas profissionais:
- HTML semântico;
- metadados por página;
- Open Graph;
- imagens dimensionadas e otimizadas;
- lazy loading onde fizer sentido;
- URLs legíveis;
- sitemap/robots conforme a estratégia de publicação;
- evitar dependências pesadas sem justificativa.

## Eventos que poderão ser medidos

Quando houver analytics configurado de forma legítima:
- `search_started`;
- `filters_applied`;
- `property_viewed`;
- `contact_clicked`;
- `owner_lead_started`;
- `owner_lead_submitted`;
- `centralizaweb_cta_clicked`.

Nenhum número será apresentado como resultado antes de existir coleta real.

## Critérios de aceite desta arquitetura

A arquitetura estará corretamente implementada quando:
- Comprar e Alugar forem jornadas distinguíveis;
- filtros alterarem os resultados demonstrativos de forma coerente;
- cada card abrir uma ficha correspondente;
- a ficha apresentar informações suficientes antes do contato;
- o proprietário possuir uma jornada própria de captação;
- estados vazios e erros básicos forem tratados;
- a experiência funcionar adequadamente em mobile e desktop;
- o caráter demonstrativo estiver claro;
- não houver empresa, CRECI, depoimento, imóvel ou resultado comercial apresentado falsamente como real.

## Decisões adiadas conscientemente

Não entram no primeiro MVP:
- login;
- favoritos persistentes em conta;
- CRM;
- painel administrativo;
- agendamento real de visita;
- mapa avançado;
- simulação financeira;
- chatbot;
- busca por IA;
- alertas automáticos;
- integração com portais imobiliários.

Esses recursos poderão virar ciclos posteriores se ajudarem a demonstrar competências adicionais ou se dados reais indicarem necessidade.

## Próxima etapa

Com arquitetura e wireframe definidos, o próximo passo é estabelecer **direção visual, identidade da marca fictícia, stack técnica e estrutura inicial do projeto**. Só então será iniciado o primeiro commit de código.
