# Taqe-Marvel

Este projeto foi desenvolvido usando o Angular 7 e consome a api da Marvel para pesquisar as revistas que têm o Hulk como personagem principal ou secundário.

# Tabela de Conteúdo

* [Requisitos do Sistema](#requisitos-do-sistema)
* [Instalação](#instalação)
  * [Node.js](#node.js)
  * [Angular CLI](#angular-cli)
  * [Angular](#angular)
  * [Visual Studio Code](#visual-studio-code)
  * [Git](#git)
* [Execução](#execução)
  * [Clonagem do Repositório](#clonagem-do-repositório)
  * [Instalação de Dependências](#instalação-de-dependências)
  * [Execução em Máquina Local](#execução-em-máquina-local)
* [Testes Unitários](#testes-unitários)
* [Build](#build)
* [Ajuda Adicional](#ajuda-adicional)


## Requisitos do Sistema

Para executar este projeto é necessário que alguns programas estejam instalados e devidamente configurados. Os quais são:

* Node.js versão superior a 8.x
* NPM ou YARN
* Angular CLI e Angular 7
* Editor de Texto. Ex: Visual Studio Code
* Git

## Instalação

### Node.js

O Node.js é uma plataforma para execução de Javascript/ECMAScript no lado do servidor.

Para instalar o Node.js, vá para a página do [Node.js](https://nodejs.org/en/) e baixe a versão desejada.

### Angular CLI

Angular CLI é uma ferramenta de linha de comando que serve para criar, configurar e instalar dependências do Angular. 

Para instalar o Angular CLI usando o NPM, digite `npm install -g @angular/cli` no Windows ou macOS ou `sudo npm install -g @angular/cli` no Linux.

### Angular

Angular é um _framework_ _front-end_ para desenvolvimento _web_ baseado em _Single Page Applications_.

Não é necessário instalar o Angular a nível global do sistema, já que o Angular CLI instala como dependência no projeto local.

### Visual Studio Code

Para instalar o Visual Studio Code é necessário acessar o site do [Visual Studio Code](https://code.visualstudio.com/).

### Git

É uma ferramenta de controle de versão que serve para gerenciar o código-fonte de um ou mais projetos de forma distribuída.

Para instalar, vá na página do [Git](https://git-scm.com/downloads) e siga as instruções de acordo com a sua plataforma.

## Execução

Para executar o projeto é necessário seguir os seguintes passos:

* Clonagem do Repositório
* Instalação de Dependências
* Execução em Máquina Local

### Clonagem do Repositório

Para clonar o repositório, digite:  
`git clone https://github.com/marivaldosena/taqe-marvel` no terminal de sua plataforma.

### Instalação de Dependências

Após a clonagem do repositório digite `cd taqe-marvel` e instale as dependências com o comando `npm install`.

Aguarde o processo de instalação até o fim.

### Execução em Máquina Local

Após a instalação, digite `ng serve` ou `npm start` no terminal para executar o projeto e aguarde.

Ao términ, use o navegador de sua preferência e digite `http://localhost:4200/` na barra de endereço.

## Testes Unitários

Para execução de testes unitários via [Karma](https://karma-runner.github.io), digite `ng test` ou digite `ng e2e` para executar testes _end-to-end_ via [Protractor](http://www.protractortest.org/).

## Build

Para gerar arquivos para _deploy_ digite `ng build` usando a _flag_ `--prod`.

Os arquivos serão salvos no diretório `dist/`.

## Ajuda Adicional

Para obter ajuda adicional a respeito do Angular CLI digite `ng help` ou verifique no [Leia-me do Angular CLI](https://github.com/angular/angular-cli/blob/master/README.md) em inglês.
