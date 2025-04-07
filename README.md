# Ebook Reader for Language Learning

## Getting Started

If you are using [VSCode](https://code.visualstudio.com/)/VSCodium, install the ESLint extensions.

As well, you can install [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) extensions.

- Fork the repo.

## Run `npm install` to install dependencies.
- `express` - TypeScript express module for local server development 
- `express-session` - Enables persistent user session (cookies) across different calls.
- `dotenv` - Reads environment variables from `.env` file.
- `ESLint` - TypeScript formatting check 
- `typescript` / `tsc` - TypeScript dev support 
- `cors` - Enables safe cross-origin (server other than own) HTTP requests - required for database access & translation API access.
- `concurrently` - Enables multiple npm script runs concurrently.
- `nodemon` - Automatically restarts server once change in source code is detected.
- `vite` - Frontend build framework. 
- `source-map-support`

## Scripts
- `npm run start` - starts the project
- `npm run lint` - typechecks TS code according to lint format
- `npm run build:server` - builds server-side code, converts TS -> JS
- `npm run build:client` - builds client-side code
- `npm run dev:server` - loads persistent server side watch (must reload if server changes made)
- `npm run dev:client` - starts port listening on client-side 
- `npm run test` - runs tests in test/main.ts

## File Rundown
- `package.json`: Rundown of repository info, terminal scripts, and dependencies. 
- `index.html`: Client-side MAIN page, loads entire app ecosystem. 

### dist
- Converts all the TypeScript code to working JS app. See below for details.

### server
- `tsconfig.json`: Build project with TypeScript configurations (converts TS->JS, specifies `dist` folder as source).
- `db.ts`: Configures database. 
- `routes.ts`: Routes all the API pathways. 
- `server.ts`: 

### client 
### api 
- `index.ts`: starts the server up on a listening port. 
### test
- `main.ts`: main test file, currently redundant.
