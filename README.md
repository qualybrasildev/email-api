## Como funciona o envio de e-mails 
- Estamos utilizando o nodemailer, enviando os e-mails através do SMTP do GMAIL
<br>
<br>

### Para isso, foi preciso:
 - Habilitar autenticação em 2 fatores no gmail
 - Criar uma senha de APP para esta API usar com o nodemailer

[Torial para gerar a senha que funciona no nodemailer](https://docs.google.com/document/d/1FugNvmTCsp9phAZreAdn6qJ1f1lJcovOYJWzpH6t19o/edit?usp=sharing "Tutorial de como gerar a senha para o nodemailer funcionar.")
<br>
<br>

## Conta do gmail usada para enviar e-mails
- username: naoresponda.qualybrasil@gmail.com 
- password: qualybrasilapp@10
<br>
<br>

## Para rodar esta API é simples
```yarn install```

```node index.js```

#### Obs: Não foi criada nenhum tipo de autenticação por que no momento não era necessário. Aqui não trafegam dados críticos ainda.