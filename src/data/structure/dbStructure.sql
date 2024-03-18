-- MySQL Script generated by MySQL Workbench
-- Mon Mar 18 15:13:16 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


-- -----------------------------------------------------
-- Table `cat_user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cat_user` ;

CREATE TABLE IF NOT EXISTS `cat_user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type_of_user` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `type_of_user_UNIQUE` (`type_of_user` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cat_country`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cat_country` ;

CREATE TABLE IF NOT EXISTS `cat_country` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `country` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `country_UNIQUE` (`country` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `address`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `address` ;

CREATE TABLE IF NOT EXISTS `address` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_country` INT NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  `localidad` VARCHAR(45) NOT NULL,
  `calle_principal` VARCHAR(45) NOT NULL,
  `calle1` VARCHAR(45) NULL,
  `calle2` VARCHAR(45) NULL,
  `detalles` LONGTEXT NULL,
  `created_at` DATETIME NOT NULL DEFAULT now(),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  CONSTRAINT `address-cat_country`
    FOREIGN KEY (`id_country`)
    REFERENCES 
  `cat_country` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `lastnameF` VARCHAR(45) NOT NULL,
  `lastnameM` VARCHAR(45) NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `id_address` INT NOT NULL,
  `id_user` INT NOT NULL,
  `status` INT NOT NULL DEFAULT '1',
  `created_at` DATETIME NULL DEFAULT now(),
  `last_update` DATETIME NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  CONSTRAINT `user-cat_user`
    FOREIGN KEY (`id_user`)
    REFERENCES 
  `cat_user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `user-address`
    FOREIGN KEY (`id_address`)
    REFERENCES 
  `address` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cat_category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cat_category` ;

CREATE TABLE IF NOT EXISTS `cat_category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `category_UNIQUE` (`category` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cat_brand`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cat_brand` ;

CREATE TABLE IF NOT EXISTS `cat_brand` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `brand` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `id_address` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  CONSTRAINT `cat_brand-address`
    FOREIGN KEY (`id_address`)
    REFERENCES 
  `address` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `product`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `product` ;

CREATE TABLE IF NOT EXISTS `product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_category` INT NOT NULL,
  `id_brand` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `imagen` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `specifications` VARCHAR(45) NOT NULL,
  `dimensions` VARCHAR(45) NULL,
  `stock` INT NOT NULL,
  `price` INT NOT NULL,
  `discount` FLOAT NULL DEFAULT 0.0,
  `status` INT NOT NULL DEFAULT 1,
  `created_at` DATETIME NOT NULL,
  `last_update` DATETIME NOT NULL DEFAULT now(),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  CONSTRAINT `product-cat_category`
    FOREIGN KEY (`id_category`)
    REFERENCES 
  `cat_category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `product-cat_brand`
    FOREIGN KEY (`id_brand`)
    REFERENCES 
  `cat_brand` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cart`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cart` ;

CREATE TABLE IF NOT EXISTS `cart` (
  `id_user` INT NOT NULL,
  `id_product` INT NOT NULL,
  `quantity` INT NULL DEFAULT 1,
  `last_update` DATETIME NULL DEFAULT now(),
  CONSTRAINT `cart-user`
    FOREIGN KEY (`id_user`)
    REFERENCES 
  `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `cart-product`
    FOREIGN KEY (`id_product`)
    REFERENCES 
  `product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cat_payment_method`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cat_payment_method` ;

CREATE TABLE IF NOT EXISTS `cat_payment_method` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `payment_method` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `payment_method_UNIQUE` (`payment_method` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cat_payment_status`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cat_payment_status` ;

CREATE TABLE IF NOT EXISTS `cat_payment_status` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `payment_status` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `payment_status_UNIQUE` (`payment_status` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `payment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `payment` ;

CREATE TABLE IF NOT EXISTS `payment` (
  `id` INT NOT NULL,
  `id_,method` INT NOT NULL,
  `id_status` INT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT now(),
  `last_update` DATETIME NOT NULL DEFAULT now(),
  PRIMARY KEY (`id`),
  CONSTRAINT `payment-payment_method`
    FOREIGN KEY (`id_,method`)
    REFERENCES 
  `cat_payment_method` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `payment-payment_status`
    FOREIGN KEY (`id_status`)
    REFERENCES 
  `cat_payment_status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sale`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sale` ;

CREATE TABLE IF NOT EXISTS `sale` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_user` INT NOT NULL,
  `id_product` INT NOT NULL,
  `id_payment` INT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT now(),
  `last_update` DATETIME NOT NULL DEFAULT now(),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  CONSTRAINT `sale-payment`
    FOREIGN KEY (`id_payment`)
    REFERENCES 
  `payment` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `sale-user`
    FOREIGN KEY (`id_user`)
    REFERENCES 
  `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `sale-product`
    FOREIGN KEY (`id_product`)
    REFERENCES 
  `product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
