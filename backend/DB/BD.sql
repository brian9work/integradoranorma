-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 04-10-2024 a las 21:09:54
-- Versión del servidor: 8.3.0
-- Versión de PHP: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `integradora`
--


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cat_country`
--

DROP TABLE IF EXISTS `cat_country`;
CREATE TABLE IF NOT EXISTS `cat_country` (
  `id` int NOT NULL AUTO_INCREMENT,
  `country` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `country_UNIQUE` (`country`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `cat_country`
--

INSERT INTO `cat_country` (`country`) VALUES
('estados unidos'),
('mexico');


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `address`
--

DROP TABLE IF EXISTS `address`;
CREATE TABLE IF NOT EXISTS `address` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_country` int NOT NULL,
  `state` varchar(100) NOT NULL,
  `locality` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `main_street` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `street1` varchar(100) DEFAULT NULL,
  `street2` varchar(100) DEFAULT NULL,
  `references` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `address-cat_country` (`id_country`)
) ENGINE=InnoDB, DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `address`
--

INSERT INTO `address` (`id_country`, `state`, `locality`, `main_street`, `street1`, `street2`, `references`, `created_at`) VALUES
(1, 'estado', 'localidad', 'main street', 'street uno', 'street dos', NULL, '2024-03-23 20:17:11');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cart`
--

DROP TABLE IF EXISTS `cart`;
CREATE TABLE IF NOT EXISTS `cart` (
  `id_user` int NOT NULL,
  `id_product` int NOT NULL,
  `quantity` int DEFAULT '1',
  `last_update` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY `cart-user` (`id_user`),
  KEY `cart-product` (`id_product`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cat_brand`
--

DROP TABLE IF EXISTS `cat_brand`;
CREATE TABLE IF NOT EXISTS `cat_brand` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand` varchar(45) NOT NULL,
  `description` varchar(100) NOT NULL,
  `id_address` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `cat_brand-address` (`id_address`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `cat_brand`
--

INSERT INTO `cat_brand` (`brand`, `description`, `id_address`) VALUES
('marca', 'sin descripcion', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cat_category`
--

DROP TABLE IF EXISTS `cat_category`;
CREATE TABLE IF NOT EXISTS `cat_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `category_UNIQUE` (`category`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `cat_category`
--

INSERT INTO `cat_category` (`category`) VALUES
('electronica'),
('moviliario'),
('ofertas'),
('papeleria');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cat_history_process`
--

DROP TABLE IF EXISTS `cat_history_process`;
CREATE TABLE IF NOT EXISTS `cat_history_process` (
  `id` int NOT NULL AUTO_INCREMENT,
  `icon_process` longtext NOT NULL,
  `name_process` varchar(100) NOT NULL,
  `description` longtext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `process_name_UNIQUE` (`name_process`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `cat_history_process`
--

INSERT INTO `cat_history_process` (`icon_process`, `name_process`, `description`) VALUES
('<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"0\" viewBox=\"0 0 24 24\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z\" fill=\"currentColor\"></path><path d=\"M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z\" fill=\"currentColor\"></path><path d=\"M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H7Z\" fill=\"currentColor\"></path><path d=\"M6 18C6 17.4477 6.44772 17 7 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H7C6.44772 19 6 18.5523 6 18Z\" fill=\"currentColor\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM5 3H19C19.5523 3 20 3.44771 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44771 3 5 3Z\" fill=\"currentColor\"></path></svg>', 'Se creo tu orden', NULL),
('<svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 24 24\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke-width=\"2\" d=\"M16,16 C16,14.8954305 12.8659932,14 9,14 C5.13400675,14 2,14.8954305 2,16 C2,17.1045695 5.13400675,18 9,18 C12.8659932,18 16,17.1045695 16,16 Z M2,16 L2,20.9367547 C2,22.0762536 5.13400675,23 9,23 C12.8659932,23 16,22.0762537 16,20.9367548 L16,16 M9,5 C4.581722,5 1,5.8954305 1,7 C1,8.1045695 4.581722,9 9,9 M1,7 L1,12.0000002 C1,13.0128881 4.581722,14 9,14 M23,4 C23,2.8954305 19.9004329,2 16.0769231,2 C12.2534133,2 9.15384615,2.8954305 9.15384615,4 C9.15384615,5.1045695 12.2534133,6 16.0769231,6 C19.9004329,6 23,5.1045695 23,4 Z M16,16 C19.8235098,16 23.0000002,15.0128879 23.0000002,14 L23,4 M9.15384615,3.99999999 L9.15384615,14.1660042 M8.99999999,9.00000001 C8.99999999,10.0128879 12.2534135,11 16.0769233,11 C19.9004331,11 23.0000004,10.0128879 23.0000004,9.00000001\"></path></svg>', 'Se Recibio el pago', NULL),
('<svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 16 16\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z\"></path></svg>', 'Se envio tu orden a la marca', NULL),
('<svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 24 24\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21 11h-3V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-6a1 1 0 0 0-1-1zM5 19a1 1 0 0 1-1-1V5h12v13c0 .351.061.688.171 1H5zm15-1a1 1 0 0 1-2 0v-5h2v5z\"></path><path d=\"M6 7h8v2H6zm0 4h8v2H6zm5 4h3v2h-3z\"></path></svg>', 'La marca recibio la orden', NULL),
('<svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 256 256\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M225.6,62.64l-88-48.17a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.17A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.64ZM128,36.57,200,76,178.57,87.73l-72-39.42Zm0,78.83L56,76,81.56,62l72,39.41ZM44,96.79l72,39.4v76.67L44,173.44Zm96,116.07V136.19l24-13.13V152a12,12,0,0,0,24,0V109.92l24-13.13v76.65Z\"></path></svg>', 'Tu pedido se esta haciendo', NULL),
('<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"></path><path d=\"M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"></path><path d=\"M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5\"></path></svg>', 'La marca a enviado tu pedido', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cat_payment_method`
--

DROP TABLE IF EXISTS `cat_payment_method`;
CREATE TABLE IF NOT EXISTS `cat_payment_method` (
  `id` int NOT NULL AUTO_INCREMENT,
  `imagen` longtext NOT NULL,
  `payment_method` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `payment_method_UNIQUE` (`payment_method`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `cat_payment_method`
--

INSERT INTO `cat_payment_method` (`imagen`, `payment_method`) VALUES
('https://nu.com.mx/images/seo/nu-icon.png', 'Débito'),
('https://nu.com.mx/images/seo/nu-icon.png', 'Crédito');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cat_payment_status`
--

DROP TABLE IF EXISTS `cat_payment_status`;
CREATE TABLE IF NOT EXISTS `cat_payment_status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `payment_status` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `payment_status_UNIQUE` (`payment_status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `cat_payment_status`
--

INSERT INTO `cat_payment_status` (`payment_status`) VALUES
('apartado'),
('cancelado'),
('pagado'),
('pendiente'),
('rechazado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cat_user`
--

DROP TABLE IF EXISTS `cat_user`;
CREATE TABLE IF NOT EXISTS `cat_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type_of_user` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `type_of_user_UNIQUE` (`type_of_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `cat_user`
--

INSERT INTO `cat_user` (`type_of_user`) VALUES
('admin'),
('empleado'),
('usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gifs`
--

DROP TABLE IF EXISTS `gifs`;
CREATE TABLE IF NOT EXISTS `gifs` (
  `id_product` int NOT NULL,
  `gif` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `history_process`
--

DROP TABLE IF EXISTS `history_process`;
CREATE TABLE IF NOT EXISTS `history_process` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_process` int NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `history_process-cat_history_process_idx` (`id_process`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payment`
--

DROP TABLE IF EXISTS `payment`;
CREATE TABLE IF NOT EXISTS `payment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_method` int NOT NULL,
  `id_status` int NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `payment-payment_method` (`id_method`),
  KEY `payment-payment_status` (`id_status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_category` int NOT NULL,
  `id_brand` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `imagen` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `description` longtext NOT NULL,
  `specifications` longtext NOT NULL,
  `dimensions` longtext,
  `stock` int NOT NULL,
  `price` double NOT NULL,
  `discount` double DEFAULT '0',
  `status` int NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `product-cat_category` (`id_category`),
  KEY `product-cat_brand` (`id_brand`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id_category`, `id_brand`, `name`, `imagen`, `description`, `specifications`, `dimensions`, `stock`, `price`, `discount`, `status`, `created_at`, `last_update`) VALUES
(3, 1, 'VASAGLE Banco Zapatero', '/assets/products/67060aaea5f949.85022997.png', 'Banco de Almacenamiento, Zapatero', '10 Compartimentos, con Cojin.', '30 x 104 x 48 cm', 22, 1199.99, 0, 1, '2024-03-23 14:33:23', '2024-10-08 22:46:38'),
(2, 1, 'HP Laptop Gaming OMEN Trascend 14-fb0001la', '/assets/products/67060529069734.94421138.png', 'Intel Core Ultra 7, 16GB RAM, 1TB SSD, 14 W11', 'Graficos: NVIDIA GeForce RTX 4, M.14-fb0001la', '31.3 cm x 23.3 cm x 1.7 cm', 10, 41107.64, 0, 1, '2024-10-08 22:23:05', '2024-10-08 22:23:05'),
(2, 1, 'Acer Laptop Aspire Lite 14 Core i5', '/assets/products/67060633b59081.59508590.png', '512 GB SSD RAM 8 GB W11 Home Color Plata', 'Graficos integrados, modelo: ASPIRE LITE 14', '31.3 cm x 23.3 cm x 1.7 cm', 6, 8308, 0, 1, '2024-10-08 22:27:31', '2024-10-08 22:27:31'),
(2, 1, 'Apple iPhone 15 Pro MAX', '/assets/products/670606f5492a03.92232212.png', '(256 GB) - Titanio Azul', 'Pantalla: 6,7 Pulgadas', '15 cm x 8 cm x 2 cm', 4, 27256.23, 0, 1, '2024-10-08 22:30:45', '2024-10-08 22:30:45'),
(1, 1, 'Notebook', '/assets/products/670607962968a3.09508604.png', 'Cuaderno tapa dura A5 para escribir', 'Black', '15 cm x 8 cm x 2 cm', 3, 245, 0, 1, '2024-10-08 22:33:26', '2024-10-08 22:33:26'),
(1, 1, 'Mochila', '/assets/products/67060882d630e4.92486017.png', 'Mochila de viaje para hombres y mujeres', 'XL, compatible con la TSA con puerto USB', '60 cm x 30 cm', 8, 629.98, 0, 1, '2024-10-08 22:37:22', '2024-10-08 22:37:22'),
(3, 1, 'QEUUNEY Mesita de Noche', '/assets/products/67060981e33fa5.58579391.png', 'Moderna de 3 Pisos con Cajones y Piernas', 'Mesa Lateral Duradera, Estable y Encantadora', '50 cm x 30 cm x 61 cm', 15, 820.1, 0, 1, '2024-10-08 22:41:37', '2024-10-08 22:41:37');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sale`
--

DROP TABLE IF EXISTS `sale`;
CREATE TABLE IF NOT EXISTS `sale` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user` int NOT NULL,
  `id_product` int NOT NULL,
  `id_payment` int NOT NULL,
  `id_process` int NOT NULL DEFAULT '1',
  `total` double NOT NULL,
  `quantity` int NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `sale-payment` (`id_payment`),
  KEY `sale-user` (`id_user`),
  KEY `sale-product` (`id_product`),
  KEY `sale-history_process_idx` (`id_process`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `lastnameF` varchar(45) NOT NULL,
  `lastnameM` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `id_address` int NOT NULL DEFAULT '1',
  `id_user` int NOT NULL DEFAULT '3',
  `status` int NOT NULL DEFAULT '1',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `last_update` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `user-cat_user` (`id_user`),
  KEY `user-address` (`id_address`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`name`, `lastnameF`, `lastnameM`, `email`, `password`, `id_address`, `id_user`, `status`) VALUES
('admin', '', '', 'admin@admin.com', 'admin1234', 1, 1, 1),
('user', 'lastname', 'lastname2', 'correo@correo', '1234', 1, 3, 1);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `address-cat_country` FOREIGN KEY (`id_country`) REFERENCES `cat_country` (`id`);

--
-- Filtros para la tabla `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart-product` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `cart-user` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);

--
-- Filtros para la tabla `cat_brand`
--
ALTER TABLE `cat_brand`
  ADD CONSTRAINT `cat_brand-address` FOREIGN KEY (`id_address`) REFERENCES `address` (`id`);

--
-- Filtros para la tabla `history_process`
--
ALTER TABLE `history_process`
  ADD CONSTRAINT `history_process-cat_history_process` FOREIGN KEY (`id_process`) REFERENCES `cat_history_process` (`id`);

--
-- Filtros para la tabla `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `payment-payment_method` FOREIGN KEY (`id_method`) REFERENCES `cat_payment_method` (`id`),
  ADD CONSTRAINT `payment-payment_status` FOREIGN KEY (`id_status`) REFERENCES `cat_payment_status` (`id`);

--
-- Filtros para la tabla `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product-cat_brand` FOREIGN KEY (`id_brand`) REFERENCES `cat_brand` (`id`),
  ADD CONSTRAINT `product-cat_category` FOREIGN KEY (`id_category`) REFERENCES `cat_category` (`id`);

--
-- Filtros para la tabla `sale`
--
ALTER TABLE `sale`
  ADD CONSTRAINT `sale-history_process` FOREIGN KEY (`id_process`) REFERENCES `history_process` (`id`),
  ADD CONSTRAINT `sale-payment` FOREIGN KEY (`id_payment`) REFERENCES `payment` (`id`),
  ADD CONSTRAINT `sale-product` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `sale-user` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);

--
-- Filtros para la tabla `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user-address` FOREIGN KEY (`id_address`) REFERENCES `address` (`id`),
  ADD CONSTRAINT `user-cat_user` FOREIGN KEY (`id_user`) REFERENCES `cat_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
