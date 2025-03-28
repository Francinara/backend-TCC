export const DISTRICT_PROPERTY_SUMMARY_QUERY = `SELECT 
    d.id,
    c.distrito, 
    COUNT(*)::integer AS total_properties,
    ST_AsGeoJSON(ST_Collect(d.geom)) AS geojson
  FROM propriedades c
  JOIN distritos d ON c.distrito = d."NM_DIST"
  GROUP BY 
    c.distrito, 
    d.id`;

export const SELECT_DISTRICT_QUERY = `SELECT
    id,
    "NM_DIST", 
    ST_AsGeoJSON(ST_Collect(geom)) AS geojson
  FROM distritos
  GROUP BY 
    "NM_DIST", 
    id`;

export const SELECT_DISTRICT_BY_ID_QUERY = `SELECT
    id,
    "NM_DIST", 
    ST_AsGeoJSON(ST_Collect(geom)) AS geojson
  FROM distritos
  WHERE id = $1
  GROUP BY 
    "NM_DIST", 
    id`;
