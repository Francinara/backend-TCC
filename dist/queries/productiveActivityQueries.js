"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G = exports.F = exports.PRODUCTIVE_ACTIVITY_COUNT_SUMMARY_BY_ACTIVITY_QUERY = exports.PRODUCTIVE_ACTIVITY_COUNT_SUMMARY_QUERY = exports.SELECT_PROPERTY_BY_PRODUCTIVE_ACTIVITY_BY_ACTIVITY_QUERY = exports.SELECT_PROPERTIES_WITH_MULTIPLE_ACTIVITIES_BY_PRODUCTIVE_ACTIVITY_QUERY = exports.SELECT_PRODUCTIVE_ACTIVITY_BY_ACTIVITY_QUERY = exports.SELECT_PRODUCTIVE_ACTIVITY_BY_PROPERTY_QUERY = exports.SELECT_PROPERTIES_WITH_SELECTED_PRODUCTIVE_ACTIVITIES_QUERY = exports.SELECT_PROPERTIES_WITH_PRODUCTIVE_ACTIVITY_QUERY = void 0;
exports.SELECT_PROPERTIES_WITH_PRODUCTIVE_ACTIVITY_QUERY = `SELECT 
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
    (SELECT EXISTS(SELECT 1 FROM agriculturas WHERE p.id = propriedade_id)) as agronomia,
	  (SELECT EXISTS(SELECT 1 FROM pecuarias WHERE p.id = propriedade_id)) as pecuaria,
	  (SELECT EXISTS(SELECT 1 FROM aquiculturas WHERE p.id = propriedade_id)) as aquicultura,
	  (SELECT EXISTS(SELECT 1 FROM apiculturas WHERE p.id = propriedade_id)) as apiculturas,
	  (SELECT EXISTS(SELECT 1 FROM artesanatos WHERE p.id = propriedade_id)) as artesanato,
	  (SELECT EXISTS(SELECT 1 FROM outras_atividades WHERE p.id = propriedade_id)) as outras_atividades,
    MIN(ST_Distance(ST_Transform(p.geom, 4674)::geography, m.geom::geography)) AS water_distance
  FROM
    propriedades p
  JOIN
    massa_dagua_st m
  ON
    true
  WHERE EXISTS (
    SELECT 1
      FROM $1 $2
      WHERE p.id = $3.propriedade_id)`;
exports.SELECT_PROPERTIES_WITH_SELECTED_PRODUCTIVE_ACTIVITIES_QUERY = `
  AND EXISTS (
    SELECT 1
      FROM $1 $2
      WHERE p.id = $3.propriedade_id
  )`;
exports.SELECT_PRODUCTIVE_ACTIVITY_BY_PROPERTY_QUERY = `SELECT 
		* 
	FROM $1 
	WHERE propriedade_id = $2`;
exports.SELECT_PRODUCTIVE_ACTIVITY_BY_ACTIVITY_QUERY = `SELECT 
		$1.*, visitas.data, distrito
	FROM $2 
  	INNER JOIN visitas 
		ON $3.visita_id = numero
  	INNER JOIN propriedades 
		ON propriedades.id = $4.propriedade_id`;
exports.SELECT_PROPERTIES_WITH_MULTIPLE_ACTIVITIES_BY_PRODUCTIVE_ACTIVITY_QUERY = `SELECT
    p.id AS propriedade_id,
    p.nome_propriedade,
    COUNT(DISTINCT a.$1)::int AS numero_$2,
    ST_AsGeoJSON(p.geom) AS geojson,
    ST_X(p.geom) AS lng, 
    ST_Y(p.geom) AS lat,
    p.area,
    p.comunidade,
    p.distrito
  FROM propriedades p
  JOIN $3 a ON p.id = a.propriedade_id
  GROUP BY
    p.id,
    p.nome_propriedade
  HAVING COUNT(DISTINCT a.$4) > 1`;
exports.SELECT_PROPERTY_BY_PRODUCTIVE_ACTIVITY_BY_ACTIVITY_QUERY = `SELECT 
		p.id AS propriedade_id,
    p.nome_propriedade,
    ST_AsGeoJSON(p.geom) AS geojson,
    ST_X(p.geom) AS lng, 
    ST_Y(p.geom) AS lat,
    p.area,
    p.comunidade,
    p.distrito,
    a.$5
	FROM propriedades p
    LEFT JOIN $1 a ON p.id = a.propriedade_id
	WHERE a.$2 = '$3'
	ORDER BY a.$4 DESC`;
exports.PRODUCTIVE_ACTIVITY_COUNT_SUMMARY_QUERY = `SELECT 
  (SELECT COUNT(*)::int FROM agriculturas) AS agronomias,
  (SELECT COUNT(*)::int FROM pecuarias) AS pecuarias,
  (SELECT COUNT(*)::int FROM apiculturas) AS apiculturas,
  (SELECT COUNT(*)::int FROM aquiculturas) ASaquiculturas,
  (SELECT COUNT(*)::int FROM artesanatos) AS artesanatos,
  (SELECT COUNT(*)::int FROM outras_atividades) AS outras_atividades `;
exports.PRODUCTIVE_ACTIVITY_COUNT_SUMMARY_BY_ACTIVITY_QUERY = `SELECT DISTINCT 
		$1,
		COUNT(*)::int 
	FROM $2 
	GROUP BY $3`;
exports.F = `SELECT 
    p.id AS propriedade_id,
    p.nome_propriedade,
    ST_AsGeoJSON(p.geom) AS geometria_geojson,
    a.cultura,
    a.data_plantio,
    a.data_colheita
  FROM 
    propriedades p
  JOIN 
    agriculturas a ON p.id = a.propriedade_id
  WHERE 
    a.data_plantio IS NOT NULL
    AND a.data_colheita IS NOT NULL`;
exports.G = `SELECT 
    p.id AS propriedade_id,
    p.nome_propriedade,
    ST_AsGeoJSON(p.geom) AS geometria_geojson,
    a.cultura,
    a.data_plantio,
    a.data_colheita
  FROM 
    propriedades p
  JOIN 
    agriculturas a ON p.id = a.propriedade_id
  WHERE 
    a.data_plantio IS NOT NULL
    AND a.data_colheita IS NOT NULL
    AND EXTRACT(MONTH FROM a.data_plantio) = 7 -- Filtra atividades que começam em julho
    OR EXTRACT(MONTH FROM a.data_colheita) = 7; -- Filtra atividades que terminam em julho`;
