"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SELECT_URBANIZED_AREA_QUERY = void 0;
exports.SELECT_URBANIZED_AREA_QUERY = `SELECT 
	id, 
	densidade,
  	tipo,
	ST_AsGeoJSON(ST_Transform(geom, 4326)) AS geojson 	
FROM areas_urbanizadas_st`;
