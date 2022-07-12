# SGC - Sistema Gerenciador de Concessionária

# Requisitos

1. npm

2. mysql

Para instalar os rquisitos use:

```
npm i
```

# No mysql

Não é preciso mais fazer foward engeniring no workbench para criar o database. Basta copiar o conteudo de init-database.sql e executar uma query.

Liberar acesso:

```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '010203';
flush privileges;
```

Se não funcionar tente:

```
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY '010203';
flush privileges;
```

Setar uma chave como auto_increment:

```
SET FOREIGN_KEY_CHECKS = 0;
ALTER TABLE <databse name> 
CHANGE COLUMN <column name> <column name> INT NOT NULL AUTO_INCREMENT ;
SET FOREIGN_KEY_CHECKS = 1;
```

# Executar

```
node src/main.js
```
