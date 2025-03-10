"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SELECT_CISTERN_QUERY = void 0;
exports.SELECT_CISTERN_QUERY = `SELECT 
	id, 
	nome, 
	ST_AsGeoJSON(ST_Transform(geom, 4326)) AS geojson,
  local,
  tipo, 
  layer,
	null as nome_escol
FROM cisterna_calcadao
UNION ALL
SELECT 
	id, 
	nome, 
	ST_AsGeoJSON(ST_Transform(geom, 4326)) AS geojson,
 	local,
	tipo, 
 	layer,
	null as nome_escol
FROM cisterna_programa_1mcr
UNION ALL
SELECT 
	id, 
	nome, 
	ST_AsGeoJSON(ST_Transform(geom, 4326)) AS geojson,
  local,
	tipo, 
	'Programa 1MCR 2011 Escolas' as layer, 
	nome_escol
FROM cisterna_programa_1mcr_2011_escolas`;
