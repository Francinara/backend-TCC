"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SELECT_LIMIT_QUERY = void 0;
exports.SELECT_LIMIT_QUERY = `SELECT 
	id,
	ST_AsGeoJSON(ST_Transform(geom, 4326)) AS geojson 
FROM limites_st`;
