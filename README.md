# Sistema bancário — desafio Thera

Frontend React com rotas de cadastro/login e backend Express com PostgreSQL. A autenticação depende de serviço externo; não há backend público confirmado para demonstração completa.

## Tecnologias

- React
- Create React App
- React Router
- Node.js
- Express
- PostgreSQL

## Funcionalidades e utilização

Configure o banco e o backend em backend/; execute node server.js nessa pasta. Execute npm start na raiz para a interface. Não use credenciais reais em demonstrações.

## Como executar

```bash
git clone https://github.com/EuGeanCarlos/Sistema_Banncario_Desafio_Thera.git
cd Sistema_Banncario_Desafio_Thera
npm ci
npm run start
```

Use Node.js 22.12 ou superior e o lockfile versionado. Para compilar, execute npm run build. Limitações descritas acima podem impedir o build.

## Demonstração e publicação

Execução local. Nenhuma demonstração nova foi confirmada nesta etapa.

GitHub Pages hospeda arquivos estáticos e não executa Java, Node.js, PHP ou Python. As dependências de servidor deste projeto devem ser executadas em ambiente apropriado.

## Estrutura versionada

```text
.gitignore
README.md
backend/package-lock.json
backend/package.json
backend/server.js
package-lock.json
package.json
public/index.html
public/manifest.json
src/App.css
src/App.js
src/components/BalanceCard.js
src/components/Header.js
src/components/QuickActions.js
src/components/Transacoes.js
src/index.css
src/index.js
src/pages/Cadastro.js
src/pages/Dashboard.js
src/pages/login.js
src/styles/Global.css
yarn.lock
```

## Status

Protótipo / projeto de estudo em desenvolvimento. A descrição acima distingue o que está implementado das dependências ou etapas pendentes.

## Autor e créditos

**Gean Carlos** — estudante de Engenharia de Computação, UEMA.

[GitHub](https://github.com/EuGeanCarlos)

Licenças, autoria compartilhada e atribuições existentes no código e nos materiais originais permanecem aplicáveis.

## Validação

O comando de testes não encontrou casos versionados. O build foi executado com CI=true; imports e avisos de acessibilidade que impediam a compilação foram corrigidos. O backend público não foi identificado, por isso não há demonstração completa publicada.

## Validação desta auditoria — 14/10/2026

Sem publicação nova confirmada. npm ci aprovado. O comando npm test não encontrou testes (0 casos). Build em CI=true aprovado após corrigir import com caixa incompatível no Linux, import não usado e link sem destino. Backend PostgreSQL/Express público não identificado; nenhuma demonstração completa foi publicada.
