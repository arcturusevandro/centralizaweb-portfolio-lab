# Primeiro deploy na Vercel

**Data:** 08 de setembro de 2026

## Objetivo

Validar o primeiro build público do projeto conceito imobiliário da CentralizaWeb e registrar o comportamento real do processo de publicação.

## Primeira tentativa

O primeiro deploy foi criado na Vercel com o projeto `centralizaweb-horizonte-imoveis`, usando Vite como framework e `npm run build` como comando de build.

O build falhou durante a etapa TypeScript com o erro:

`TS2882: Cannot find module or type declarations for side-effect import of './styles.css'.`

A falha mostrou que a configuração do TypeScript não possuía a referência de tipos do Vite necessária para reconhecer imports de CSS no projeto.

## Correção

Foi criado o arquivo:

`src/vite-env.d.ts`

com a referência:

`/// <reference types="vite/client" />`

A correção foi registrada em commit separado, preservando o histórico do problema e da solução.

## Segunda tentativa

Após a correção, um novo deploy de produção foi executado e o build concluiu com status `READY`.

Projeto Vercel: `centralizaweb-horizonte-imoveis`

Framework detectado/configurado: `vite`

## Observação sobre publicação

A conta Vercel conectada está aplicando proteção de acesso ao deployment. A aplicação está compilada e publicada, mas a URL exige autenticação/compartilhamento temporário enquanto essa proteção permanecer habilitada.

Para a futura vitrine pública da CentralizaWeb, a proteção deverá ser removida no projeto antes da divulgação permanente.

## Aprendizado registrado

Este ciclo reforça um dos objetivos do laboratório: manter não apenas os resultados finais, mas também falhas de build, diagnóstico, correção e validação documentados. Esse histórico demonstra processo técnico real, em vez de apresentar somente uma versão final sem contexto.
