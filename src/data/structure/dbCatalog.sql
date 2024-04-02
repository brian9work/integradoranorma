--
-- Dumping data for table `address`
--
INSERT INTO `address` (`id_country`, `state`, `localidad`, `principal_street`, `street1`, `street2`, `detalles`) VALUES
(1, 'estado', 'localidad', 'calle', NULL, NULL, NULL);

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
('trasferencia'),
('paypal'),
('oxxo');

--
-- Dumping data for table `cat_payment_status`
--
INSERT INTO `cat_payment_status` (`payment_status`) VALUES
('pendiente'),
('cancelado'),
('pagado'),
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
INSERT INTO `user` (`name`, `lastnameF`, `lastnameM`, `email`, `password`, `id_address`, `id_user`) VALUES
('admin', 'hernandez', 'garcia', 'email', '1234', 1, 1);











/*
INSERT INTO `address` (`id_country`, `estado`, `localidad`, `calle_principal`, `calle1`, `calle2`, `detalles`) VALUES
(1, 'estado', 'localidad', 'calle', NULL, NULL, NULL);

INSERT INTO `cat_brand` (`brand`, `description`, `id_address`) VALUES ('marca', 'sin descripcion', 1);

INSERT INTO `cat_category` (`category`) VALUES
('papeleria'),
('electronica'),
('moviliario'),
('ofertas');

INSERT INTO `cat_payment_method` (`payment_method`) VALUES
('trasferencia'),
('paypal'),
('oxxo');

INSERT INTO `cat_payment_status` (`payment_status`) VALUES
('pendiente'),
('cancelado'),
('pagado'),
('rechazado');

INSERT INTO `cat_user` (`type_of_user`) VALUES
('admin'),
('empleado'),
('usuario');

INSERT INTO `user` (`name`, `lastnameF`, `lastnameM`, `email`, `password`, `id_address`, `id_user`) VALUES
('admin', 'hernandez', 'garcia', 'email', '1234', 1, 1);

*/





