<p align="center">
  <a href="https://diegoroso.github.io/consultacep">
    <img height="150" width="150" src="https://diegoroso.github.io/consultacep/icon.png">
  </a>
</p>

# Consulta CEP

![Build Status](https://travis-ci.com/diegoroso/consultacep.svg?branch=master)
[![dependencies Status](https://david-dm.org/diegoroso/consultacep/status.svg)](https://david-dm.org/diegoroso/consultacep)
[![devDependencies Status](https://david-dm.org/diegoroso/consultacep/dev-status.svg)](https://david-dm.org/diegoroso/consultacep?type=dev)

## O que é ?
O consulta CEP é um teste solicitado pelo laboratório de Tecnologia e Inovação do Magazine Luiza, para avaliar as pessoas que foram selecionadas para participar do processo seletivo para vaga de desenvolvedor(a) Front End.

## Requisitos
```
node -v
v8.10.0

npm -v
5.6.0
```

## Como executar o teste ?

Clone o projeto:
```
git clone https://github.com/diegoroso/consultacep.git && cd consultacep/
```

Instale as dependências:
```
npm install
```

Renomeie o arquivo `.env.example` para `.env` e substitua `SUA_CHAVE_AQUI` por sua [chave do google maps](https://developers.google.com/maps/documentation/javascript/geocoding):
```
REACT_APP_GOOGLEMAPS_KEY=SUA_CHAVE_AQUI
```

Execute o projeto:
```
npm start
```

> Por default, estará disponível em [http://localhost:3000/](http://localhost:3000/)

## Comandos para testes

Testes unitários (jest e enzyme)
```
npm test
```
Testes e2e
```
npm run cypress:run
```
> Obs.: Executar os testes e2e com o projeto sendo executado.
