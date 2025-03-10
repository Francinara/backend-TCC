export const SELECT_SPRING_QUERY = `SELECT 
	id::integer,
	ST_AsGeoJSON(ST_Transform(geom, 4326)) AS geojson 
FROM nascente_st`;
