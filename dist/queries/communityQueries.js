"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SELECT_COMMUNITY_BY_ID_QUERY = exports.SELECT_COMMUNITY_QUERY = void 0;
exports.SELECT_COMMUNITY_QUERY = `SELECT 
    id, 
    ST_AsGeoJSON(ST_Transform(geom, 4326)) AS geojson,
    nome,
    distritos
  FROM comunidade`;
exports.SELECT_COMMUNITY_BY_ID_QUERY = `SELECT 
    id, 
    ST_AsGeoJSON(ST_Transform(geom, 4326)) AS geojson,
    nome,
    distritos
  FROM comunidade
  WHERE id = $1`;
