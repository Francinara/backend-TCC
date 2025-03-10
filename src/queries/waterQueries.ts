export const SELECT_WATER_QUERY = `SELECT 
	id, 
	nome, 
	ST_AsGeoJSON(geom) AS geojson
FROM massa_dagua_st`;

export const SELECT_PROPERTY_WITH_WATER_DISTANCE_QUERY = `SELECT
  p.id,
  p.nome_propriedade,
  ST_X(p.geom) AS lng, 
  ST_Y(p.geom) AS lat,
  p.area,
	p.comunidade,
	p.distrito,
	ST_AsGeoJSON(ST_Transform(p.geom, 4326)) AS geojson,	
  MIN(ST_Distance(ST_Transform(p.geom, 4674)::geography, m.geom::geography)) AS water_distance
FROM
  propriedades p
JOIN
  massa_dagua_st m
ON
  true 
GROUP BY
  p.id, p.nome_propriedade, p.geom
ORDER BY
  water_distance ASC`;
