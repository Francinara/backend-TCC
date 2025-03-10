"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SELECT_PROPERTY_WITH_ROAD_DISTANCE_QUERY = exports.SELECT_ROAD_QUERY = void 0;
exports.SELECT_ROAD_QUERY = `SELECT  
	id::integer, 
	'br_232' As name,
	ST_AsGeoJSON(ST_Transform(geom, 4326)) AS geojson 
FROM estrada_br_232
UNION ALL
SELECT  
	id::integer, 
	'pe_320' As name,
	ST_AsGeoJSON(ST_Transform(geom, 4326)) AS geojson 	
FROM estrada_pe_320
UNION ALL
SELECT  
	id::integer, 
	'pe_365' As name,
	ST_AsGeoJSON(ST_Transform(geom, 4326)) AS geojson 	
FROM estrada_pe_365
UNION ALL
SELECT  
	id::integer, 
	'pe_390' As name,
	ST_AsGeoJSON(ST_Transform(geom, 4326)) AS geojson 
FROM estrada_pe_390
UNION ALL
SELECT  
	id::integer, 
	'pe_418' As name,
	ST_AsGeoJSON(geom) AS geojson 
FROM estrada_pe_418
UNION ALL
SELECT  
	id::integer, 
	'com_pavimentacao' As name,
	ST_AsGeoJSON(geom) AS geojson 
FROM estrada_com_pavimentacao 
UNION ALL
SELECT  
	id::integer, 
	'sem_pavimentacao' As name,
	ST_AsGeoJSON(geom) AS geojson 
FROM estrada_sem_pavimentacao`;
exports.SELECT_PROPERTY_WITH_ROAD_DISTANCE_QUERY = ``;
