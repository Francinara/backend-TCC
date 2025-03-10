export const SELECT_DRAINAGE_QUERY = `SELECT 
	id::integer, 
	ST_AsGeoJSON(ST_Transform(geom, 4326)) AS geojson 
FROM drenagem_st`;
