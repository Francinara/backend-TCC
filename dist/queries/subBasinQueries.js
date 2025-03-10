"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SELECT_SUB_BASIN_QUERY = void 0;
exports.SELECT_SUB_BASIN_QUERY = `SELECT 
	id::integer, 
	ST_AsGeoJSON(ST_Transform(geom, 4326)) AS geojson 
FROM sub_bacia_st`;
