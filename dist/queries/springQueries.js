"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SELECT_SPRING_QUERY = void 0;
exports.SELECT_SPRING_QUERY = `SELECT 
	id::integer,
	ST_AsGeoJSON(ST_Transform(geom, 4326)) AS geojson 
FROM nascente_st`;
