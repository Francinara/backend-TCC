"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SELECT_PROTECTION_LAYER_QUERY = void 0;
exports.SELECT_PROTECTION_LAYER_QUERY = `SELECT 
	id::integer, 
	ST_AsGeoJSON(ST_Transform(geom, 4326)) AS geojson 	
FROM protection_layer`;
