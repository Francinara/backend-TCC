"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROPERTY_COUNT_BY_DISTRICT_QUERY = exports.PROPERTY_COUNT_BY_AREA_QUERY = exports.PROPERTY_COUNT_QUERY = exports.SELECT_PROPERTY_BY_DISTRICT_QUERY = exports.SELECT_PROPERTY_BY_AREA_QUERY = exports.SELECT_PROPERTY_BY_ID_QUERY = exports.SELECT_PROPERTY_QUERY = void 0;
exports.SELECT_PROPERTY_QUERY = `SELECT 
  p.id, 
  ST_AsGeoJSON(p.geom) AS geojson,
  ST_X(p.geom) AS lng, 
  ST_Y(p.geom) AS lat,
  p.car,  
  p.n_recibo_car,
  p.nome_propriedade,
  p.area,
  p.comunidade,
  p.distrito,
  p.situacao_fundiaria,
  p.tipo_documento,
  p.beneficiario_id,
  v.data,
  (SELECT EXISTS(SELECT 1 FROM agriculturas WHERE p.id = propriedade_id)) as agricultura,
  (SELECT EXISTS(SELECT 1 FROM pecuarias WHERE p.id = propriedade_id)) as pecuaria,
  (SELECT EXISTS(SELECT 1 FROM aquiculturas WHERE p.id = propriedade_id)) as aquicultura,
  (SELECT EXISTS(SELECT 1 FROM apiculturas WHERE p.id = propriedade_id)) as apicultura,
  (SELECT EXISTS(SELECT 1 FROM artesanatos WHERE p.id = propriedade_id)) as artesanato,
  (SELECT EXISTS(SELECT 1 FROM outras_atividades WHERE p.id = propriedade_id)) as outras_atividades,
  MIN(ST_Distance(ST_Transform(p.geom, 4674)::geography, m.geom::geography)) AS water_distance
FROM
  propriedades p
JOIN
  massa_dagua_st m
ON
  true
JOIN
  visitas v
ON
  v.propriedade_id = p.id
GROUP BY
  p.id, p.nome_propriedade, p.geom, v.data
ORDER BY
  water_distance ASC`;
exports.SELECT_PROPERTY_BY_ID_QUERY = `SELECT 
  id, 
  ST_AsGeoJSON(geom) AS geojson,
  ST_X(geom) AS lng, 
  ST_Y(geom) AS lat,
  car,  
  n_recibo_car,
  nome_propriedade,
  area,
  comunidade,
  distrito,
  situacao_fundiaria,
  tipo_documento,
  beneficiario_id
FROM propriedades
  WHERE id = $1`;
exports.SELECT_PROPERTY_BY_AREA_QUERY = `SELECT 
    id, 
    ST_AsGeoJSON(geom) AS geojson,
    ST_X(geom) AS lng, 
    ST_Y(geom) AS lat,
    car,  
    n_recibo_car,
    nome_propriedade,
    area,
    comunidade,
    distrito,
    situacao_fundiaria,
    tipo_documento,
    beneficiario_id
  FROM propriedades
  WHERE ST_DWithin(
    geom::geography, 
    ST_SetSRID(ST_MakePoint($1, $2), 4326)::geography, 
	  $3)`;
exports.SELECT_PROPERTY_BY_DISTRICT_QUERY = `SELECT
    p.id, 
    ST_AsGeoJSON(p.geom) AS geojson,
    ST_X(p.geom) AS lng, 
    ST_Y(p.geom) AS lat,
    p.car,  
    p.n_recibo_car,
    p.nome_propriedade,
    p.area,
    p.comunidade,
    p.distrito,
    p.situacao_fundiaria,
    p.tipo_documento,
    p.beneficiario_id
  FROM propriedades p
  JOIN distritos d ON p.distrito = d."NM_DIST"
  WHERE d.id = $1`;
exports.PROPERTY_COUNT_QUERY = `SELECT
  COUNT(*)::integer AS total_properties
  FROM propriedades`;
exports.PROPERTY_COUNT_BY_AREA_QUERY = `SELECT 
  COUNT(*)::integer AS total_properties
  FROM propriedades
  WHERE ST_DWithin(
    geom::geography, 
    ST_SetSRID(ST_MakePoint( $1, $2), 4326)::geography, 
	$3)`;
exports.PROPERTY_COUNT_BY_DISTRICT_QUERY = `SELECT
    d.id,
    d."NM_DIST",
    ST_AsGeoJSON(d.geom) AS geojson,
  COUNT(*)::integer AS total_properties
  FROM propriedades c
  JOIN distritos d ON c.distrito = d."NM_DIST"
  WHERE d.id = $1
  GROUP BY 
    d."NM_DIST",
    d.id`;
