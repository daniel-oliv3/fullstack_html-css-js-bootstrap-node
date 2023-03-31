##
### FullStack - HTML, CSS, JavaScript, Bootstrap, Node.
##

<p align="center">
  <img alt="...." src="./assets/Full-Stack-Developer-980x462-1.png" width="80%">
</p>


### 1 - INTRODUÇÃO AO PROJETO

**Lista de tarefas**


- Lista de tarefas
    - Uma aplicação frontend com HTML, CSS e JS puro para gerir tarefas
    - No backend vamos ter uma API NodeJS + Express +MySQL para servir o frontend


### Ferramentas do programador

- Browser (Google Chrome)
    - Site: https://www.google.com/intl/pt-BR/chrome/
- Visual Studio Code
    - Site: https://code.visualstudio.com/download
- Laragon
    - Site: https://laragon.org/download/
- HeidiSQL
    - Site: https://www.heidisql.com/download.php


**Base de dados**


- Base de dados
    - id
    - username
    - password
    - created_at
    - updated_at

    tasks
    - id
    - id_user
    - task_text
    - task_status (new | in progress | canceled | done)
    - created_at
    - updated_at


**Tarefas a desenvolver no projeto**

- Criar a estrutura inicial
    - Base do frontend (html css js | bootstrap)
    - Base do backend (node + express + mysql) com uma resposta padrão


**Frontend**

- No frontend
    - Páginas necessárias para a navegação na nossa app
    - Pequenos testes de comunicação entre frontend e backend - utilização de Ajax (XMLhttprequest | fetchAPI)


- Exemplo
    - fullstack_01








### 2 - PREPARAÇÃO DA ESTRUTURA INICIAL DO FRONTEND

- Ver tarefas
    - Titulo
    - Filtro para escolher que tarefas queremos ver (select)
    - Botão para adicionar tarefas
    - Mensagem sobre o fato de não existirem tarefas
    - Caixa para tarefas
    - Possibilidade de alterar o status, editar tarefa e eliminar tarefa
    - Parágrafo com o total de tarefas disponíveis (de acordo com o filtro)

- Adicionar tarefa
    - Input:text com o texto da tarefa
    - Botão para cancelar
    - Botão para submeter tarefa

- Editar tarefa
    - Input:text para editar o texto da tarefa
    - Botão para cancelar
    - Botão para submeter tarefa

- Eliminar tarefa
    - Eliminar será feita com uma modal


- Estrutura base de cada página
    - Bootstrap (slate) bootswatch
    - Fontawesome


**Font Awesome**

- FontAwesome
    - Site: https://fontawesome.com/

**Bootstrap**

- Slate Bootstrap
    - Site: https://bootswatch.com/slate/


- Exemplo
    - fullstack_02








### 3 - ORGANIZAÇÃO DO LAYOUT DA PÁGINA PRINCIPAL PARTE 1


**Font Awesome**

- FontAwesome
    - Site: https://fontawesome.com/

**Favicon**

- Free Favicon
    - Site: http://freefavicon.com/freefavicons/

- Icon Icons
    - Site: https://icon-icons.com/pt/



**Emmet abbreviation**
- Teclas de atalho VSCode

- Exemplo 1
```html
<!-- comando/atalho

    .container.mt-5>.row>(.col)*2

-->

<!-- Resultado -->
<div class="container mt-5">
	<div class="row">
		<div class="col"></div>
		<div class="col"></div>
	</div>
</div>
```


- Exemplo 2
```html
<!-- comando/atalho

    .row>.col.text-center

-->

<!-- Resultado -->
<div class="row">
	<div class="col text-center"></div>
</div>
```


**Bootstrap**


- Bootstrap
    - Site: https://getbootstrap.com/
    - Forms: https://getbootstrap.com/docs/5.3/forms/select/


- Exemplo
    - fullstack_03









### 4 - ORGANIZAÇÃO DO LAYOUT DA PÁGINA PRINCIPAL PARTE 2

**Emmet abbreviation**
- Teclas de atalho VSCode

- Exemplo 3
```html
<!-- comando/atalho

    div.row>div.col-12

-->

<!-- Resultado -->
<div class="row">
	<div class="col-12"></div>
</div>
```

- Exemplo 4
```html
<!-- comando/atalho

    div.row>(div.col)*4

-->

<!-- Resultado -->
<div class="row">
    <div class="col"></div>
	<div class="col"></div>
	<div class="col"></div>
	<div class="col"></div>
</div>
```



**Bootstrap**

- Bootstrap
    - Site: https://getbootstrap.com/
    - Forms: https://getbootstrap.com/docs/5.3/forms/select/
    - Borders: https://getbootstrap.com/docs/5.3/utilities/borders/#border
    - Shadows: https://getbootstrap.com/docs/5.3/utilities/shadows/#examples


**Font Awesome**

- FontAwesome
    - Site: https://fontawesome.com/
    - Trash: https://fontawesome.com/icons/trash-can?s=solid&f=classic
    - Edit: https://fontawesome.com/icons/pen-to-square?s=regular&f=classic


- Exemplo
    - fullstack_04











### 5 - FINALIZAÇÃO DO LAYOUT DA PÁGINA PRINCIPAL


**Font Awesome**

- FontAwesome
    - Site: https://fontawesome.com/
    - Chevron: https://fontawesome.com/icons/circle-chevron-right?s=solid&f=classic



**Emmet abbreviation**
- Teclas de atalho VSCode


- Exemplo 5
```html
<!-- comando/atalho
    
    div.row>div.col>h4>span.text-info

-->

<!-- Resultado -->
<div class="row">
	<div class="col">
		<h4><span class="text-info"></span></h4>
	</div>
</div>
```


- Exemplo 6
```html
<!-- comando/atalho
    
    div.row>div.col.text-center

-->

<!-- Resultado -->
<div class="row">
	<div class="col text-center">

    </div>
</div>
```


- Exemplo
    - fullstack_05





### 6 - CONSTRUÇÃO DA BASE DE DADOS

- Criação da base de dados `fullstack_stck_db`


- Tabela `users`
```sql
/*Tabela users (usuários)*/
CREATE TABLE `users` (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`username` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`password` VARCHAR(100) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`created_at` DATETIME NULL DEFAULT NULL,
	`updated_at` DATETIME NULL DEFAULT NULL,
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8_unicode_ci'
ENGINE=InnoDB
;
```

- Tabela `tasks`
```sql
/*Tabela tasks*/
CREATE TABLE `tasks` (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`id_user` INT(11) NULL DEFAULT NULL,
	`task_text` VARCHAR(100) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`task_status` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8_unicode_ci',
	`created_at` DATETIME NULL DEFAULT NULL,
	`updated_at` DATETIME NULL DEFAULT NULL,
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8_unicode_ci'
ENGINE=InnoDB
;
```


- Exemplo
    - fullstack_06


### 7 - FINALIZAÇÃO DOS LAYOUTS RESTANTES


**Emmet abbreviation**
- Teclas de atalho VSCode

- Exemplo 3
```html
<!-- comando/atalho

    div.row>div.col

-->

<!-- Resultado -->
<div class="row">
	<div class="col">
        
	</div>
</div>
```



- Exemplo
    - fullstack_07




### 8 - CRIAÇÃO DO SERVIDOR NODEJS + EXPRESS + MYSQL

**Backend**

- Backend
- Criar um servidor NodeJS + Express + MySQL
- Criar um endpoint inicial - teste de comunicações



**Express**

- Instalar o Express
```
npm install express
```

**MySQL**

- Instalar o MySQL
```
npm install mysql
```

**Executar o backend**

- Roda o projeto backend
```
node --watch server.js
```

- Server.js
```js
/*Server.js*/
const express = require('express');
const mysql = require('mysql');

// Opções de conexão com o MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fullstack_stack_db'
});


const app = new express();
app.listen(3000, () => {
    console.log("Servidor iniciado na porta: http://localhost:3000");
});


// Rotas
app.get("/", (req, res) => {
    connection.query("SELECT COUNT(*) users FROM users", (err, results) => {
        if(err){
            res.send(err.message);
        }
        res.send(results);
    });
});
```

- Exemplo
    - fullstack_08







### 9 - REQUISIÇÃO DE AJAX E ERRO DE CORS

**Backend**

- Roda o projeto backend
```
node --watch server.js
```

- URLs
- http://localhost:3000
- http://localhost:3000/user/1


- Resolver erro
- Access-Control-Allow-Origin, header

```txt  

Access to fetch at 'http://localhost:3000/user/1' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled


```

```txt

O acesso para buscar em 'http://localhost:3000/user/1' da origem 'nulo' foi bloqueado pela política do CORS: Nenhum cabeçalho 'Access-Control-Allow-Origin' está presente no recurso solicitado. Se uma resposta opaca atender às suas necessidades, defina o modo da solicitação como 'no-cors' para buscar o recurso com o CORS desativado


```

- Exemplo
    - fullstack_09



### 10 - RESOLUÇÃO DO ERRO DE CORS

**Backend**

- Roda o projeto backend
```
node --watch server.js
```

**Cross-origin resource sharing**

- Wikipedia
    - Site: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
    - Site BR: https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing

**Cors**

- NPM Cors
    Site: https://www.npmjs.com/package/cors


- Instalação do **Cors** via terminal do `backend`

```
npm install cors
```

- Exemplo
    - fullstack_10



### 11 - REQUISIÇÕES DAS TAREFAS


**Font-Awesome**

- Font-Awesome
    - Site: https://fontawesome.com/
    - Icons: https://fontawesome.com/icons
    - Free: https://fontawesome.com/search?o=r&m=free

**Backend**

- Roda o projeto backend
```
node --watch server.js
```

- Plugin VSCode
    - `Separators`

- Exemplo
    - fullstack_11













### 12 - APRESENTAÇÃO DAS TAREFAS

- Roda o projeto backend
```
node --watch server.js
```

- Exemplo
    - fullstack_12



### 13 - RESOLUÇÃO DE ERRO DO VÍDEO ANTERIOR

- Roda o projeto backend
```
node --watch server.js
```

- Exemplo
    - fullstack_13










