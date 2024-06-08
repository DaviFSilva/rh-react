# Sobre a aplicação

Esta aplicação foi feita para o desafio de contratação, focado em React, da RT Medical Systems.

O sistema foi construído usando o framework React. Para a manipulação de imagens Dicom, foi usado o framework CornerStoneJS. Além disso, ela é integrada ao Docker.

## Scripts Disponíveis

Com o terminal no diretório do projeto (rh-react/react-api):

### `npm start`

Roda a aplicação no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para ver o app no browser.

A página irá se atualizar a cada mudança feita no código.\
Você também poderá ver erros de lint no console.

### `npm test`

Roda o executor de testes no modo de observação interativo.\
Veja a secção sobre [running tests](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `npm run build`

Compila a aplicação para produção na pasta `build`.\
Ele empacota corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho.

O build é reduzido e os nomes dos arquivos incluem os hashes.\\
Seu aplicativo está pronto para deploy!

Veja a secção sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

### `npm run eject`

**Nota: esta é uma operação unidirecional. Uma vez que você `ejeta`, você não pode voltar atrás!**

Se você não estiver satisfeito com a ferramenta de compilação e as escolhas de configuração, você pode `ejetar` a qualquer momento. Este comando removerá a única dependência de compilação do seu projeto.

Ao invés disso, ele irá copiar todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc) diretamente para o seu projeto para que você tenha total controle sobre eles. Todos os comandos, exceto o `eject`, ainda funcionarão, mas eles apontarão para os scripts copiados para que você possa ajustá-los. Neste ponto, você está por sua conta.

Você não precisa nunca utilizar o `eject`. O conjunto de recursos curados é adequado para pequenas e médias implementações, e você não deve se sentir obrigado a usar este recurso. No entanto, nós entendemos que esta ferramenta não seria útil se você não pudesse personalizá-la quando estivesse pronto para isso.