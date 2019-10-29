-- Create the SQL databases
CREATE DATABASE IF NOT EXISTS EPS;

USE EPS;

CREATE TABLE IF NOT EXISTS Medimas (
       Nombre VARCHAR(256) NOT NULL,
       Direccion VARCHAR(256) NOT NULL,
       Telefono VARCHAR(256)
);

INSERT INTO Medimas (
       Nombre,
       Direccion,
       Telefono
)

VALUES
(
	'Hospital Infantil Universitario de San José',
	'Cra. 52 No. 67A - 71',
	'4377540'
),

(
	'Sociedad de Cirugía de Bogotá - Hospital de San José',
	'Cll. 10 No. 18 - 75',
	'3538000'
),

(
	'Subred Integrada de Servicios de Salud Norte ESE - Unidad de Servicios de Salud Chapinero',
	'Cll. 66 No. 15 - 41',
	'3499080'
),

(
	'Subred Integrada de Servicios de Salud Norte ESE - Unidad de Servicios de Salud Engativá Calle 80',
	'Trans. 100 A No. 80A - 50',
	'2913300'
),

(
	'Subred Integrada de Servicios de Salud Norte ESE - Unidad de Servicios de Salud Simón Bolívar',
	'Cll. 165 No. 7 - 06',
	'6718796'
),

(
	'Subred Integrada de Servicios de Salud Norte ESE - Unidad de Servicios de Salud Suba',
	'Cra. 92 No. 147C - 30',
	'6621111'
),
(
	'Subred Integrada de Servicios de Salud Norte ESE - Unidad de Servicios de Salud Usaquén',
	'Cra. 6A No. 119B - 14',
	'6583036'
),
(
	'Subred Integrada de Servicios de Salud Sur ESE Unidad de Servicios de Salud El Tunal',
	'Cra. 20 No. 47B - 35 Sur',
	'7428585 - 7427001'
),
(
	'Subred Integrada de Servicios de Salud Centro Oriente ESE Unidad de Servicios de Salud San Blas',
	'Tr. 5 Este No. 19 - 50 Sur',
	'2891100'
),
(
	'Subred Integrada de Servicios de Salud Centro Oriente ESE Unidad de Servicios de Salud Santa Clara',
	'Cra. 14B No. 1 - 45 Sur',
	'3282828'
),
(
	'Subred Integrada de Servicios de Salud Centro Oriente ESE Unidad de Servicios de Salud Victoria',
	'Dg. 39 Sur No. 3 - 20 Este',
	'3725610'
),
(
	'Subred Integrada de Servicios de Salud Sur ESE Unidad de Servicios de Salud Meissen',
	'Cra. 18B No. 60G - 36 Sur',
	'7902651'
),
(
	'Subred Integrada de Servicios de Salud Sur Unidad de Servicios de Salud Candelaria I',
	'Cra. 28 No. 63A - 04 Sur',
	'7300000 Ext. 1300'
),
(
	'Subred Integrada de Servicios de Salud Sur Unidad de Servicios de Salud Vista Hermosa',
	'Cra. 18C No. 66A - 55 Sur',
	'7300000 Ext. 2500 - 2000 -2501'
),
(
	'ESE Hospital Universitario La Samaritana',
	'Cra. 8 No. 0 - 29 Sur',
	'4077075 Ext. 10702'
);
