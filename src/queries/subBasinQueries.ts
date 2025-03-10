export const SELECT_SUB_BASIN_QUERY = `SELECT 
	id::integer, 
	ST_AsGeoJSON(ST_Transform(geom, 4326)) AS geojson 
FROM sub_bacia_st`;
