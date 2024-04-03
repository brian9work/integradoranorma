INSERT INTO `cat_country` (`id`, `country`) VALUES
(1, 'mexico');

--
-- Dumping data for table `address`
--
INSERT INTO `address` (`id_country`, `state`, `locality`, `main_street`, `street1`, `street2`, `references`) VALUES
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


INSERT INTO `cat_history_process` (`id`, `icon_process`, `name_process`, `description`) VALUES
(1, '<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"0\" viewBox=\"0 0 24 24\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z\" fill=\"currentColor\"></path><path d=\"M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z\" fill=\"currentColor\"></path><path d=\"M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H7Z\" fill=\"currentColor\"></path><path d=\"M6 18C6 17.4477 6.44772 17 7 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H7C6.44772 19 6 18.5523 6 18Z\" fill=\"currentColor\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM5 3H19C19.5523 3 20 3.44771 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44771 3 5 3Z\" fill=\"currentColor\"></path></svg>', 'Se creo tu orden', NULL),
(2, '<svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 24 24\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke-width=\"2\" d=\"M16,16 C16,14.8954305 12.8659932,14 9,14 C5.13400675,14 2,14.8954305 2,16 C2,17.1045695 5.13400675,18 9,18 C12.8659932,18 16,17.1045695 16,16 Z M2,16 L2,20.9367547 C2,22.0762536 5.13400675,23 9,23 C12.8659932,23 16,22.0762537 16,20.9367548 L16,16 M9,5 C4.581722,5 1,5.8954305 1,7 C1,8.1045695 4.581722,9 9,9 M1,7 L1,12.0000002 C1,13.0128881 4.581722,14 9,14 M23,4 C23,2.8954305 19.9004329,2 16.0769231,2 C12.2534133,2 9.15384615,2.8954305 9.15384615,4 C9.15384615,5.1045695 12.2534133,6 16.0769231,6 C19.9004329,6 23,5.1045695 23,4 Z M16,16 C19.8235098,16 23.0000002,15.0128879 23.0000002,14 L23,4 M9.15384615,3.99999999 L9.15384615,14.1660042 M8.99999999,9.00000001 C8.99999999,10.0128879 12.2534135,11 16.0769233,11 C19.9004331,11 23.0000004,10.0128879 23.0000004,9.00000001\"></path></svg>', 'Se Recibio el pago', NULL),
(3, '<svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 16 16\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z\"></path></svg>', 'Se envio tu orden a la marca', NULL),
(4, '<svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 24 24\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21 11h-3V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-6a1 1 0 0 0-1-1zM5 19a1 1 0 0 1-1-1V5h12v13c0 .351.061.688.171 1H5zm15-1a1 1 0 0 1-2 0v-5h2v5z\"></path><path d=\"M6 7h8v2H6zm0 4h8v2H6zm5 4h3v2h-3z\"></path></svg>', 'La marca recibio la orden', NULL),
(5, '<svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 256 256\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M225.6,62.64l-88-48.17a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.17A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.64ZM128,36.57,200,76,178.57,87.73l-72-39.42Zm0,78.83L56,76,81.56,62l72,39.41ZM44,96.79l72,39.4v76.67L44,173.44Zm96,116.07V136.19l24-13.13V152a12,12,0,0,0,24,0V109.92l24-13.13v76.65Z\"></path></svg>', 'Tu pedido se esta haciendo', NULL),
(6, '<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"></path><path d=\"M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"></path><path d=\"M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5\"></path></svg>', 'La marca a enviado tu pedido', NULL);



INSERT INTO `cat_payment_method` (`id`, `imagen`, `payment_method`) VALUES
(1, 'https://xihmai.com/api/assets/brands/vs.png', 'visa'),
(2, 'https://xihmai.com/api/assets/brands/mc.png', 'mastercard'),
(3, 'https://xihmai.com/api/assets/brands/oxxo.png', 'oxxo'),
(4, 'https://xihmai.com/api/assets/brands/mp.png', 'mercado pago'),
(5, 'https://xihmai.com/api/assets/brands/pp.png', 'paypal');







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





