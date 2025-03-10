export const SELECT_PROTECTION_LAYER_QUERY = `SELECT 
	id::integer, 
	ST_AsGeoJSON(ST_Transform(geom, 4326)) AS geojson 	
FROM protection_layer`;
