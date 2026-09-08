# ADR-002 — Arquitetura de marca dos projetos conceito

**Data:** 08 de setembro de 2026  
**Status:** Aprovado

## Contexto

Durante a primeira revisão pós-deploy da demonstração imobiliária, identificamos que utilizar uma marca fictícia independente para cada projeto poderia criar colisões com empresas reais, aumentar o trabalho de validação de nomes e enfraquecer a associação entre as demonstrações e a CentralizaWeb.

Além disso, o laboratório foi criado para funcionar simultaneamente como vitrine comercial e histórico técnico público. Portanto, é importante que cada demonstração seja reconhecida imediatamente como parte de um mesmo ecossistema de projetos.

## Decisão

Adotar a CentralizaWeb como marca-mãe de todos os projetos conceito públicos, utilizando o padrão:

**CentralizaWeb — Nome do Projeto**

Exemplos:

- CentralizaWeb — Imobiliária
- CentralizaWeb — Clínica
- CentralizaWeb — Contabilidade
- CentralizaWeb — Restaurante

Para identificadores técnicos, URLs e nomes de projetos, utilizar preferencialmente:

- `centralizaweb-imobiliaria`
- `centralizaweb-clinica`
- `centralizaweb-contabilidade`
- `centralizaweb-restaurante`

## Regra de transparência

A nomenclatura não deve sugerir que a CentralizaWeb atua profissionalmente no segmento demonstrado. Cada projeto deverá conter identificação visível e proporcional como **Projeto Conceito**, **Demonstração** ou expressão equivalente.

Exemplo de apresentação:

> **CentralizaWeb — Imobiliária**  
> Projeto conceito para o mercado imobiliário

Assim, a marca demonstra sua capacidade de projetar soluções para diferentes segmentos sem simular clientes, operações, credenciais ou resultados inexistentes.

## Razões da decisão

1. **Consistência de marca:** todas as demonstrações passam a ser reconhecidas como parte da CentralizaWeb.
2. **Profissionalismo:** estabelece uma arquitetura de nomenclatura previsível e escalável.
3. **Redução de risco de confusão:** evita criar deliberadamente marcas fictícias que possam coincidir com negócios reais.
4. **Força de portfólio:** cada nova demonstração contribui para fortalecer a mesma marca principal.
5. **Escalabilidade:** novos segmentos podem ser adicionados sem necessidade de criar uma nova identidade empresarial completa.
6. **Clareza para recrutadores:** o padrão facilita identificar os projetos como parte de um laboratório técnico estruturado.
7. **Visão de longo prazo:** o portfólio passa a ser tratado como um sistema de produtos demonstrativos, e não como uma coleção desconectada de páginas.

## Consequência para o primeiro projeto

O nome de trabalho **Horizonte Imóveis** será descontinuado e substituído por:

**CentralizaWeb — Imobiliária**

O código, metadados, textos, documentação e publicação deverão ser atualizados progressivamente para refletir o novo padrão.

## Princípio

> Cada projeto pode representar um mercado diferente, mas todos devem construir o mesmo ativo: a credibilidade da CentralizaWeb.
