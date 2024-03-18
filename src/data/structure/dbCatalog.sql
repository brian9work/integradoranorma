--
-- Dumping data for table `cat_country`
--
INSERT INTO `cat_country` (`country`) VALUES
('estados unidos'),
('mexico');

--
-- Dumping data for table `address`
--
INSERT INTO `address` (`id_country`, `estado`, `localidad`, `calle_principal`, `calle1`, `calle2`, `detalles`, `created_at`) VALUES
(1, 'estado', 'localidad', 'calle', NULL, NULL, NULL, '2024-03-18 14:51:43');

--
-- Dumping data for table `cat_brand`
--
INSERT INTO `cat_brand` (`brand`, `description`, `id_address`) VALUES
('marca', 'sin descripcion', 1);

--
-- Dumping data for table `cat_category`
--
INSERT INTO `cat_category` (`category`) VALUES
('papeleria'),
('electronica'),
('moviliario'),
('ofertas');

--
-- Dumping data for table `cat_payment_method`
--
INSERT INTO `cat_payment_method` (`payment_method`) VALUES
('deposito'),
('paypal'),
('bbva'),
('nu'),
('santander'),
('banco azteca'),
('coppel');

--
-- Dumping data for table `cat_payment_status`
--
INSERT INTO `cat_payment_status` (`payment_status`) VALUES
('cancelado'),
('pagado'),
('pendiente'),
('rechazado');

--
-- Dumping data for table `cat_user`
--
INSERT INTO `cat_user` (`type_of_user`) VALUES
('admin'),
('empleado'),
('usuario');


--
-- Dumping data for table `user`
--
INSERT INTO `user` (`name`, `lastnameF`, `lastnameM`, `email`, `password`, `id_address`, `id_user`, `status`, `created_at`, `last_update`) VALUES
('brian', 'hernandez', 'garcia', 'email', '1234', 1, 1, 1, '2024-03-18 15:02:02', '2024-03-18 15:02:02');







