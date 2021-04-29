# INTRODUÇÃO
Projeto de gerenciamento de fotos desenvolvido em [Angular](https://angular.io/) e [TypeScript](https://www.typescriptlang.org/) 
durante os cursos da plataforma [Alura](https://www.alura.com.br/) com o professor [Flávio Henrique de Souza Almeida](http://cangaceirojavascript.com.br/sobre/)

## A respeito dos commits...
As mensagens de commit são feitas utilizando a nomenclatura `Angular Curso Alura | P#C#A#`, onde:
* P# - parte do curso
* C# - capítulo do curso
* A# - atividade do capítulo

## Requisitos
* [Node.js LTS](https://nodejs.org/en/)

Após a instalação, verifique as versões do Node e NPM respectivamente com os comandos `node -v` e `npm -v`.
* Node - v10.x.x ou superior
* NPM - v6.x.x ou superior

Feito isso, é necessário instalar o Angular CLI. Abra o terminal e execute o comando `npm i -g @angular/cli@11.2.9`. 
Isso fará com que o Angular versão 11.2.9 seja instalado globalmente na sua máquina.

Para verificar se foi instalada a versão informada, execute o comando `ng --version`

## Instalar dependências
Antes de tudo, é preciso instalar as dependências para que o projeto seja compilado. Dentro das pastas alurapic e api, 
rode o comando `npm i` pelo terminal.

## Para iniciar o projeto:
```
cd alurapic/
ng serve -o
```
<strong>Irá abrir na URL localhost:4200</strong>

## Para iniciar a API:
```
cd api/
npm start
```
<strong>Irá rodar na URL localhost:3000</strong>

Se a API não estiver funcionando, execute esses comandos no terminal:
```
npm un sqlite3
npm cache clean
npm i sqlite3
```

## Para iniciar o log server
```
cd log-server/
npm start
```
<strong>Irá rodar na URL localhost:7000/infra/log</strong>
