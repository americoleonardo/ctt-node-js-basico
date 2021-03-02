## Iniciar o projeto

```
npm init
```

## Criar index.js e console.log("Hello world");

## Rodar o projeto em node

```
node index.js
```

## Instalar o nodemon

```
npm install -g nodemon
```

## Adicionar no package.json

```
"scripts": {
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

```
npm run dev
```

## Saída esperada

```
[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Hello World
[nodemon] clean exit - waiting for changes before restart
```