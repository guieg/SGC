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
CREATE SCHEMA IF NOT EXISTS `sgc` DEFAULT CHARACTER SET utf8 ;
USE `sgc` ;

-- -----------------------------------------------------
-- Table `sgc`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgc`.`Usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `cpf` CHAR(11) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `telefone` VARCHAR(13) NOT NULL,
  `endereco` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sgc`.`Vendedor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgc`.`Vendedor` (
  `u_id` INT NOT NULL,
  `gerente` TINYINT NOT NULL,
  PRIMARY KEY (`u_id`),
  CONSTRAINT `fk_Vendedor_Usuário1`
    FOREIGN KEY (`u_id`)
    REFERENCES `sgc`.`Usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sgc`.`Cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgc`.`Cliente` (
  `u_id` INT NOT NULL,
  PRIMARY KEY (`u_id`),
  CONSTRAINT `fk_Cliente_Usuário`
    FOREIGN KEY (`u_id`)
    REFERENCES `sgc`.`Usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sgc`.`Venda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgc`.`Venda` (
  `c_id` INT NOT NULL,
  `v_id` INT NOT NULL,
  `num_nota_fiscal` VARCHAR(45) NOT NULL,
  `data` DATE NOT NULL,
  `forma_pagamento` SMALLINT NOT NULL,
  INDEX `fk_Venda_Cliente1_idx` (`c_id` ASC) VISIBLE,
  INDEX `fk_Venda_Vendedor1_idx` (`v_id` ASC) VISIBLE,
  PRIMARY KEY (`num_nota_fiscal`),
  CONSTRAINT `fk_Venda_Cliente1`
    FOREIGN KEY (`c_id`)
    REFERENCES `sgc`.`Cliente` (`u_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Venda_Vendedor1`
    FOREIGN KEY (`v_id`)
    REFERENCES `sgc`.`Vendedor` (`u_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sgc`.`modelo_fabricante`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgc`.`modelo_fabricante` (
  `modelo` VARCHAR(45) NOT NULL,
  `fabricante` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`modelo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sgc`.`Automovel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgc`.`Automovel` (
  `chassi` VARCHAR(17) NOT NULL,
  `cor` VARCHAR(45) NOT NULL,
  `ano` INT NOT NULL,
  `valor` DOUBLE NOT NULL,
  `modelo_fabricante_modelo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`chassi`),
  INDEX `fk_Automovel_modelo_fabricante1_idx` (`modelo_fabricante_modelo` ASC) VISIBLE,
  CONSTRAINT `fk_Automovel_modelo_fabricante1`
    FOREIGN KEY (`modelo_fabricante_modelo`)
    REFERENCES `sgc`.`modelo_fabricante` (`modelo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sgc`.`Emplacamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgc`.`Emplacamento` (
  `placa` INT NOT NULL,
  `valor` DOUBLE NOT NULL,
  `despachante_nome` VARCHAR(45) NOT NULL,
  `despachante_telefone` VARCHAR(13) NOT NULL,
  `a_chassi` VARCHAR(17) NOT NULL,
  PRIMARY KEY (`placa`),
  INDEX `fk_Emplacamento_Automóvel1_idx` (`a_chassi` ASC) VISIBLE,
  CONSTRAINT `fk_Emplacamento_Automóvel1`
    FOREIGN KEY (`a_chassi`)
    REFERENCES `sgc`.`Automovel` (`chassi`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sgc`.`Itens`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgc`.`Itens` (
  `id` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `descricao` VARCHAR(45) NOT NULL,
  `a_chassi` VARCHAR(17) NULL,
  INDEX `fk_Acessorios_Automóvel1_idx` (`a_chassi` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_Acessorios_Automóvel1`
    FOREIGN KEY (`a_chassi`)
    REFERENCES `sgc`.`Automovel` (`chassi`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sgc`.`possui`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sgc`.`possui` (
  `v_nf` VARCHAR(45) NOT NULL,
  `a_chassi` VARCHAR(17) NOT NULL,
  PRIMARY KEY (`v_nf`, `a_chassi`),
  INDEX `fk_possui_Automóvel1_idx` (`a_chassi` ASC) VISIBLE,
  CONSTRAINT `fk_possui_Venda1`
    FOREIGN KEY (`v_nf`)
    REFERENCES `sgc`.`Venda` (`num_nota_fiscal`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_possui_Automóvel1`
    FOREIGN KEY (`a_chassi`)
    REFERENCES `sgc`.`Automovel` (`chassi`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
