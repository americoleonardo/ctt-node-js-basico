Iniciar o projeto

```
npm init
```

Criar index.js e console.log("Hello world");

```
node index.js
```

Instalar o nodemon

```
npm install -g nodemon
```

Adicionar no package.json

```
"scripts": {
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

```
npm run dev
```