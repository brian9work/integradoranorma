
-- insertar MARCAS
INSERT INTO cat_brand (brand, description, id_address) VALUES
-- Electronica
("Sony", "sin descripcion", 1),
("Samsung", "sin descripcion", 1),
("Apple", "sin descripcion", 1),
("Bose", "sin descripcion", 1),
("Canon", "sin descripcion", 1),
-- ofertas
("Post-it", "sin descripcion", 1),
("Sharpie", "sin descripcion", 1),
("Prismacolor", "sin descripcion", 1),
("Moleskine", "sin descripcion", 1),
("Expo", "sin descripcion", 1),
-- oficina
("Requiez", "sin descripcion", 1),
("H2", "sin descripcion", 1),
("Offiho", "sin descripcion", 1),
("Techno", "sin descripcion", 1),
("Versa", "sin descripcion", 1),
-- papeleria
("Estrella", "sin descripcion", 1),
("NORMA", "sin descripcion", 1),
("SCRIBE", "sin descripcion", 1),
("PILOT", "sin descripcion", 1),
("AZOR", "sin descripcion", 1);



INSERT INTO product 
(id_category, id_brand, name, imagen, description, specifications, dimensions, stock, price, discount) VALUES 
('2', '1', 'Sony WH-1000XM4', '', 'Auriculares inalámbricos con cancelación de ruido líder en su clase.', 'Cancelación de ruido adaptativa, hasta 30 horas de duración de la batería, control táctil, compatible con asistentes de voz.', NULL, 1, '10', '0'),
('2', '2', 'Samsung Galaxy S21 Ultra', '', 'Smartphone con cámara de 108 MP y zoom de 100x.', 'Pantalla Dynamic AMOLED 2X de 6.8 pulgadas, Exynos 2100 (5 nm), 12 GB de RAM, 5000 mAh de batería.', '165.1 x 75.6 x 8.9 mm', 1, '20', '0'),
('2', '3', 'Apple Watch Series 7', '', 'Smartwatch con pantalla siempre encendida y detección avanzada de caídas.', 'Pantalla Retina siempre activa, resistente al agua hasta 50 metros, seguimiento avanzado del estado físico.', NULL, 1, '30', '0'),
('2', '4', 'Bose QuietComfort Earbuds', '', 'Auriculares inalámbricos con cancelación de ruido y sonido envolvente.', 'Cancelación de ruido ajustable, hasta 6 horas de reproducción, resistente al sudor y al agua.', NULL, 1, '40', '0'),
('2', '5', 'Canon EOS R5', '', 'Cámara mirrorless de alta resolución con capacidad de grabación de video 8K.', 'Sensor CMOS de formato completo de 45 MP, AF de 1053 puntos, estabilización de imagen de 5 ejes.', '138.5 x 97.5 x 88 mm', 1, '50', '0'),

('1', '6', 'Post-it Super Sticky Notes', '', 'Notas adhesivas con tecnología Super Sticky para superficies verticales.', 'Papel reciclado, adhesivo acrílico, 90 hojas por bloque.', '76 x 76 mm', 1, '10', '0'),
('1', '7', 'Sharpie Permanent Markers', '', 'Marcadores permanentes con tinta resistente al agua y a la decoloración.', 'Punta fina, tinta a base de alcohol, 12 colores surtidos.', NULL, 1, '20', '0'),
('1', '8', 'Prismacolor Premier Colored Pencils', '', 'Lápices de colores de alta calidad para artistas y diseñadores.', 'Núcleo de plomo suave, resistente a la rotura, 72 colores surtidos.', NULL, 1, '30', '0'),
('1', '9', 'Moleskine Classic Notebook', '', 'Cuaderno clásico con tapa dura y papel libre de ácido.', 'Papel marfil de 70 g/m², cinta marcapáginas, bolsillo interior expandible.', '130 x 210 mm', 1, '40', '0'),
('1', '10', 'Expo Dry Erase Markers', '', 'Marcadores para pizarras blancas con tinta de secado rápido y fácil de borrar.', 'Punta fina, tinta a base de alcohol, 12 colores surtidos.', NULL, 1, '50', '0'),

('3', '11', 'Requiez Silla Ejecutiva', '', 'Silla ejecutiva con respaldo alto y soporte lumbar ajustable.', 'Asiento acolchado, base de aluminio, ruedas de nylon.', NULL, 1, '10', '0'),
('3', '12', 'H2 Escritorio', '', 'Escritorio con superficie de melamina y patas de acero.', 'Superficie de 120 x 60 cm, altura ajustable, 3 colores surtidos.', NULL, 1, '20', '0'),
('3', '13', 'Offiho Archivero', '', 'Archivero con 3 cajones y ruedas para oficina y estudio.', 'Cajones con cerradura, ruedas giratorias, 3 colores surtidos.', NULL, 1, '30', '0'),
('3', '14', 'Techno Lámpara de Escritorio', '', 'Lámpara de escritorio con brazo ajustable y puerto USB.', 'Brazo flexible, 3 niveles de brillo, 3 colores surtidos.', NULL, 1, '40', '0'),
('3', '15', 'Versa Silla Plegable', '', 'Silla plegable con asiento acolchado y respaldo reclinable.', 'Estructura de acero, asiento de poliéster, 3 colores surtidos.', NULL, 1, '50', '0'),

('4', '16', 'Estrella Cuaderno Profesional', '', 'Cuaderno profesional con tapa dura y papel de alta calidad.', 'Papel de 90 g/m², cinta marcapáginas, bolsillo interior expandible.', '130 x 210 mm', 1, '10', '0'),
('4', '17', 'NORMA Lápiz Mecánico', '', 'Lápiz mecánico con cuerpo de plástico y clip metálico.', 'Punta de 0.7 mm, goma de borrar incorporada, 3 colores surtidos.', NULL, 1, '20', '0'),
('4', '18', 'SCRIBE Marcador Permanente', '', 'Marcador permanente con tinta resistente al agua y a la decoloración.', 'Punta fina, tinta a base de alcohol, 12 colores surtidos.', NULL, 1, '30', '0'),
('4', '19', 'PILOT G2 Bolígrafo Gel', '', 'Bolígrafo gel con tinta de secado rápido y resistente al agua.', 'Punta de 0.7 mm, tinta de gel, 12 colores surtidos.', NULL, 1, '40', '0'),
('4', '20', 'AZOR Papel Bond', '', 'Papel bond de alta calidad para impresión láser y fotocopiado.', 'Papel de 75 g/m², tamaño carta, 500 hojas por resma.', NULL, 1, '50', '0');















