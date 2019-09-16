![N|Solid](./src/assets/logo_ioasys.png)

# Desafio React Native - ioasys by Gustavo Davi

---

### Dependencias Utilizadas:

**Redux e Redux-Saga**

- "@react-native-community/async-storage": "^1.6.1",
- "react-persist": "^1.0.2",
- "react-redux": "^7.1.1",
- "reactotron-react-native": "^3.6.5",
- "reactotron-redux": "^3.1.1",
- "reactotron-redux-saga": "^4.2.2",
- "redux": "^4.0.4",
- "redux-persist": "^6.0.0",
- "redux-saga": "^1.0.5",
- "immer": "^4.0.0",

**Navegação**

- "react-native-gesture-handler": "^1.4.1",
- "react-native-reanimated": "^1.2.0",
- "react-navigation": "^4.0.4",
- "react-navigation-stack": "^1.7.3",
- "react-navigation-tabs": "^2.5.2",

**API e PropTypes**

- "axios": "^0.19.0",
- "prop-types": "^15.7.2",

**Perfumaria**

- "intl": "^1.2.5",
- "polished": "^3.4.1",
- "react-native-linear-gradient": "^2.5.6",
- "react-native-vector-icons": "^6.6.0",
- "styled-components": "^4.3.2"

## Passo a Passo

### SignIn / SingUp

Na primeira tela do aplicativo é possivel se autenticar com e-mail e senha. A pagina SignUp é meramente ilustrativa, não é possivel se cadastrar.

### Aplicação

**Dashbord**

Na tela principal é possivel visualizar a lista das empresas em um card, com: Imagem, Nome da Empresa, Cidade, Pais e Segmento de atuação. Há, também, um link para obter mais informações sobre ela.

**About**

Precionando o botão _Ver Mais_ temos acesso as informações inerente a empresa selecionada, como: Nome, Imagem, Descrição, Email, Telefone, Redes Sociais, Cidade, Pais e Segmento de atuação.

**Find**

Nesta pagina o usuario pode pesquisar por seguimento de atuação e nome da empresa. Sendo localizada, mostrará um card com: Imagem, Nome da Empresa, Cidade, Pais e Segmento de atuação.

**Profile**

Tem acesso aos dados do usuario logado, como: Avatar, Nome, Email, Cidade, Pais, Investimentos, Saldo Disponivel e Total na Carteira.

Nessa parte é possivel sair da aplicação.

## Funcionalidades Faltantes ou Inacabadas

Das solicitações feitas no desafio, todas são possiveis de serem acessadas dentro da aplição. Contudo uma funcionalidade que não terá o desempenho esperado é a listagem das empresas.

Infelizmente com o tempo disponivel não consegui encontrar uma solução que fizesse os loads das empresas de forma satisfatoria.

Crei um Range para as 10 primeiras empresas da lista, pois além desse valor, o desempenho da aplicação cai e o layout não fica como esperado.

Outro ponto foi a lista de segmentos, não consegui configurar um estilo para a listagem e por isso a lista fica descentralizada e cobrindo todo o tamanho do display.

## Pages

## Ponto Importante

Gostaria de agradecer a participação neste teste tecnico, pois além de aprender muito, foi um otimo termometro de como está meus conhecimentos nessa stack que tanto amo. Javascript s2 React.

Caso passe desta fase, será um prazer gigantesco ter contato com a equipe de vocês. Sem dúvida irei aprender muito, mesmo que seja somente 5 min de conversa. Porque quando entrei no site de vocês e vi a forma como foi feito e saber que o app do meu banco, Inter, foi feito por vocês, percebi que se tratava de uma empresa que liga para cada detalhe e dá cada passo de forma certa.

Aproposito, o site de vocês é absurdo, massa pra caramba.

_Sem mais, mais uma vez obrigado._

![N|Solid](./src/assets/ioasys.png)
