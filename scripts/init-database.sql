-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema sgc
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema sgc
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sgc` DEFAULT CHARACTER SET utf8mb3 ;
USE `sgc` ;

-- -----------------------------------------------------
-- Table `sgc`.`modelo_fabricante`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgc`.`modelo_fabricante` (
  `modelo` VARCHAR(45) NOT NULL,
  `fabricante` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`modelo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sgc`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgc`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `cpf` CHAR(11) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `telefone` VARCHAR(13) NOT NULL,
  `endereco` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 105
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sgc`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgc`.`cliente` (
  `u_id` INT NOT NULL,
  PRIMARY KEY (`u_id`),
  CONSTRAINT `fk_Cliente_Usuário`
    FOREIGN KEY (`u_id`)
    REFERENCES `sgc`.`usuario` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sgc`.`vendedor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgc`.`vendedor` (
  `u_id` INT NOT NULL,
  `gerente` TINYINT NOT NULL,
  PRIMARY KEY (`u_id`),
  CONSTRAINT `fk_Vendedor_Usuário1`
    FOREIGN KEY (`u_id`)
    REFERENCES `sgc`.`usuario` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sgc`.`venda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgc`.`venda` (
  `c_id` INT NOT NULL,
  `v_id` INT NOT NULL,
  `num_nota_fiscal` VARCHAR(45) NOT NULL,
  `data` DATE NOT NULL,
  `forma_pagamento` SMALLINT NOT NULL,
  PRIMARY KEY (`num_nota_fiscal`),
  INDEX `fk_Venda_Cliente1_idx` (`c_id` ASC) VISIBLE,
  INDEX `fk_Venda_Vendedor1_idx` (`v_id` ASC) VISIBLE,
  CONSTRAINT `fk_Venda_Cliente1`
    FOREIGN KEY (`c_id`)
    REFERENCES `sgc`.`cliente` (`u_id`),
  CONSTRAINT `fk_Venda_Vendedor1`
    FOREIGN KEY (`v_id`)
    REFERENCES `sgc`.`vendedor` (`u_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sgc`.`automovel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgc`.`automovel` (
  `chassi` VARCHAR(17) NOT NULL,
  `cor` VARCHAR(45) NOT NULL,
  `ano` INT NOT NULL,
  `valor` DOUBLE NOT NULL,
  `mf_modelo` VARCHAR(45) NOT NULL,
  `v_nf` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`chassi`),
  INDEX `fk_Automovel_modelo_fabricante1_idx` (`mf_modelo` ASC) VISIBLE,
  INDEX `fk_Automovel_Venda1_idx` (`v_nf` ASC) VISIBLE,
  CONSTRAINT `fk_Automovel_modelo_fabricante1`
    FOREIGN KEY (`mf_modelo`)
    REFERENCES `sgc`.`modelo_fabricante` (`modelo`),
  CONSTRAINT `fk_Automovel_Venda1`
    FOREIGN KEY (`v_nf`)
    REFERENCES `sgc`.`venda` (`num_nota_fiscal`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sgc`.`emplacamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgc`.`emplacamento` (
  `placa` INT NOT NULL,
  `valor` DOUBLE NOT NULL,
  `despachante_nome` VARCHAR(45) NOT NULL,
  `despachante_telefone` VARCHAR(13) NOT NULL,
  `a_chassi` VARCHAR(17) NOT NULL,
  PRIMARY KEY (`placa`),
  INDEX `fk_Emplacamento_Automóvel1_idx` (`a_chassi` ASC) VISIBLE,
  CONSTRAINT `fk_Emplacamento_Automóvel1`
    FOREIGN KEY (`a_chassi`)
    REFERENCES `sgc`.`automovel` (`chassi`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sgc`.`itens`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgc`.`itens` (
  `id` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `descricao` VARCHAR(45) NOT NULL,
  `a_chassi` VARCHAR(17) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Acessorios_Automóvel1_idx` (`a_chassi` ASC) VISIBLE,
  CONSTRAINT `fk_Acessorios_Automóvel1`
    FOREIGN KEY (`a_chassi`)
    REFERENCES `sgc`.`automovel` (`chassi`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '010203';
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY '010203';
flush privileges;
