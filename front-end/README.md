Comandos:

npm run dev → testa o front-end em modo desenvolvimento (hot reload) e o backend separadamente para APIs, banco de dados e funcionalidades.

npm run build → compila o front-end para a pasta dist (ou build), transformando JSX/ES Modules em JavaScript puro, pronto para produção.

node index.js → roda o backend e serve a versão compilada do front-end da pasta dist, permitindo testar o projeto como se estivesse em produção ("lançado em um servidor").

1. A pasta Components servirá para colocar os componentes que forém criados para o site (meio obvio eu sei)

2. Dist será a pasta que ficara todo o projeto só que compilado, por conta de nem o express quanto o navegador em si não ter muito suporte para rodar arquivos.jsx se utiliza o comando npm run build para compilar tudo que foi feito e jogado para essa pasta para ser interpretado e executado pelo banco de dados e exibir para o usuario

3. Public (não o mercado) servirá para ficar as imagens que forem ser utilizadas no projeto

4. A src ficara os arquivos estaticos (arquivos html, css, js e jsx)

alteração somente pra teste :P
