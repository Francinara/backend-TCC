export const SELECT_LIMIT_QUERY = `SELECT 
	id,
	ST_AsGeoJSON(ST_Transform(geom, 4326)) AS geojson 
FROM limites_st`;
