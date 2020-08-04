# Testando Webpack

Um projeto simples, destinado para aprender e experimentar com o Webpack e suas funcionalidades.

## Inicializando projeto

- docker-compose up
- docker-compose run node npm install yarn
- docker-compose run yarn

**ou**

- npm install yarn
- yarn
- yarn start

## Passos

### Asset management

Levando em conta um projeto Webpack, sem configurações anterior (ou seja, do zero).

1) Por padrão, o Webpack irá procurar uma pasta 'src' ao ser inicializado. Logo, crie uma pasta 'src', com um arquivo "index.js" dentro.

2) Rode **npm run build** ou **docker-compose up** (se instalou Docker).

3) Irá gerar um dist com o arquivo 'index.js' buildado em produção.

4) Crie um arquivo HTML dentro de 'src'. A configuração padrão do Webpack não reconhece o arquivo HTML de cara. Agora para configurar o Webpack.

- Criar o arquivo 'webpack.config.js' na raiz.

- Rodar **yarn add -D html-webpack-plugin html-loader**.

5) Criar a variável "HtmlWebPackPlugin" dentro de **webpack.config.js**, que irá requerer o pacote desejado.

6) Criando o 'module.exports', com um array "rules".

- Dentro do array, temos um objeto com a propriedade "test" e uma expressão regular para ajudar o webpack a encontrar o arquivo HTML.

- Em "use", é definido o loader e suas opções.

- Dentro de module.exports mas fora de "rules", criamos um array "plugins". No mesmo, é indicado onde o template e o nome do arquivo se encontram, para o plugin específico.
No caso do "HtmlWebPackPlugin", os arquivos HTML necessários são definidos.

7) Rode **npm run build** ou **docker-compose up** novamente. Agora, o index.html será reconhecido e gerado apropriadamente após o build.

8) Agora, rode **yarn add webpack-dev-server**. Serve para hot-reload.

9) Instalando Babel, via **yarn add -D @babel/core babel-loader @babel/preset-env**. Volte ao **webpack.config.js** e 
adicione o objeto do mesmo ao array "rules", dentro de module.exports. Agora, transpilling está habilitado.

10) Trabalhando com assets: por padrão, webpack também não pega arquivos de imagem, independente do formato.
Então, rode **yarn add -D file-loader** e o inclua ao array "rules".

11) Agora, instalando sass. Rode **yarn add -D node-sass style-loader css-loader sass-loader mini-css-extract plugin** e o inclua ao array "rules".

Obs.1: Se estiver usando Docker, será necessário um redirecionamento do localhost, de 8080 para 9000, de acordo com o **docker-compose.yml**. O localhost padrão do webpack é 8080.

Obs.2: Por algum motivo, usar o terminal do VS Code funciona normalmente até o momento de usar o CTRL-C, o que congela o mesmo.
Portanto, opções como git bash ou cmder são recomendáveis.

### Opções para compilação do código em desenvolvimento.

1 - Watch Mode

É o mais básico, incluso no Webpack. Observa se houve alterações no código e compila automaticamente.
No entanto, ele requer F5 no browser para exibir as alterações.

2 - webpack-dev-server

É um plugin que faz o mesmo do Watch Mode, porém ele oferece live reload e um web server simples.

3 - webpack-dev-middleware

Útil para builds mais customizadas.

### Prefetching e preloading

São diretivas inline usadas ao declarar os imports. Permitem ao webpack transmitir ao browser que:

- Prefetch: é provável que tal recurso será necessário para alguma navegação futura.
- Preload: o recurso pode ser necessário durante a navegação atual.

Ex.: Em um componente **HomePage**, é renderizado um componente **LoginButton** que, por sua vez, carrega em
demanda um componente **LoginModal** após ser clicado.


