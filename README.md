# A RESPEITO DOS COMMITS
As mensagens de commit são feitas utilizando a nomenclatura `NomeDoCurso | P#C#A#`, onde:
* P# - parte do curso
* C# - capítulo do curso
* A# - atividade do capítulo

## Para iniciar a API:
```
cd api/
npm start
```

## Para iniciar o projeto:
```
cd alurapic/
ng serve -o
```

Se a API não estiver funcionando, execute esses comandos no terminal:
```
npm un sqlite3
npm cache clean
npm i sqlite3
```