export const WATER_RESOURCE_AVAILABILITY_SUMMARY_QUERY = `SELECT 
    COUNT(CASE WHEN banheiro_id IS NOT NULL THEN 1 END)::int AS has_banheiro,
    COUNT(CASE WHEN banheiro_id IS NULL THEN 1 END)::int AS not_has_banheiro,
    COUNT(CASE WHEN poco_id IS NOT NULL THEN 1 END)::int AS has_poco,
    COUNT(CASE WHEN poco_id IS NULL THEN 1 END)::int AS not_has_poco,
    COUNT(CASE WHEN cisternas_id IS NOT NULL THEN 1 END)::int AS has_cisterna,
    COUNT(CASE WHEN cisternas_id IS NULL THEN 1 END)::int AS not_has_cisterna,
    COUNT(CASE WHEN carro_pipa_id IS NOT NULL THEN 1 END)::int AS has_carro_pipa,
    COUNT(CASE WHEN carro_pipa_id IS NULL THEN 1 END)::int AS not_has_carro_pipa,
    COUNT(CASE WHEN barragem_id IS NOT NULL THEN 1 END)::int AS has_barragem,
    COUNT(CASE WHEN barragem_id IS NULL THEN 1 END)::int AS not_has_barragem,
    COUNT(CASE WHEN poco_amazonas_id IS NOT NULL THEN 1 END)::int AS has_poco_amazonas,
    COUNT(CASE WHEN poco_amazonas_id IS NULL THEN 1 END)::int AS not_has_amazonas,
    COUNT(CASE WHEN acude_id IS NOT NULL THEN 1 END)::int AS has_acude,
    COUNT(CASE WHEN acude_id IS NULL THEN 1 END)::int AS not_has_acude
  FROM recursos_hidricos `;

export const WATER_RESOURCE_AVAILABILITY_BY_DISTRICT_QUERY = `SELECT
    d.id,
    d."NM_DIST",
    ST_AsGeoJSON(ST_Collect(d.geom)) AS geojson,
    COUNT(*)::integer AS total_properties,
    COUNT(CASE WHEN rh.banheiro_id IS NOT NULL THEN 1 END)::int AS has_banheiro,
    COUNT(CASE WHEN rh.banheiro_id IS NULL THEN 1 END)::int AS not_has_banheiro,
    COUNT(CASE WHEN rh.poco_id IS NOT NULL THEN 1 END)::int AS has_poco,
    COUNT(CASE WHEN rh.poco_id IS NULL THEN 1 END)::int AS not_has_poco,
    COUNT(CASE WHEN rh.cisternas_id IS NOT NULL THEN 1 END)::int AS has_cisterna,
    COUNT(CASE WHEN rh.cisternas_id IS NULL THEN 1 END)::int AS not_has_cisterna,
    COUNT(CASE WHEN rh.carro_pipa_id IS NOT NULL THEN 1 END)::int AS has_carro_pipa,
    COUNT(CASE WHEN rh.carro_pipa_id IS NULL THEN 1 END)::int AS not_has_carro_pipa,
    COUNT(CASE WHEN rh.barragem_id IS NOT NULL THEN 1 END)::int AS has_barragem,
    COUNT(CASE WHEN rh.barragem_id IS NULL THEN 1 END)::int AS not_has_barragem,
    COUNT(CASE WHEN rh.poco_amazonas_id IS NOT NULL THEN 1 END)::int AS has_poco_amazonas,
    COUNT(CASE WHEN rh.poco_amazonas_id IS NULL THEN 1 END)::int AS not_has_amazonas,
    COUNT(CASE WHEN rh.acude_id IS NOT NULL THEN 1 END)::int AS has_acude,
    COUNT(CASE WHEN rh.acude_id IS NULL THEN 1 END)::int AS not_has_acude
  FROM recursos_hidricos rh
  JOIN propriedades p ON rh.propriedade_id = p.id
  JOIN distritos d ON p.distrito = d."NM_DIST"
  WHERE d.id = $1
  GROUP BY d.id`;

export const WATER_RESOURCE_AVAILABILITY_BY_AREA_QUERY = `SELECT
    COUNT(*)::integer AS total_properties,
    COUNT(CASE WHEN rh.banheiro_id IS NOT NULL THEN 1 END)::int AS has_banheiro,
    COUNT(CASE WHEN rh.banheiro_id IS NULL THEN 1 END)::int AS not_has_banheiro,
    COUNT(CASE WHEN rh.banheiro_id IS NOT NULL THEN 1 END)::int AS has_poco,
    COUNT(CASE WHEN rh.poco_id IS NULL THEN 1 END)::int AS not_has_poco,
    COUNT(CASE WHEN rh.cisternas_id IS NOT NULL THEN 1 END)::int AS has_cisterna,
    COUNT(CASE WHEN rh.cisternas_id IS NULL THEN 1 END)::int AS not_has_cisterna,
    COUNT(CASE WHEN rh.carro_pipa_id IS NOT NULL THEN 1 END)::int AS has_carro_pipa,
    COUNT(CASE WHEN rh.carro_pipa_id IS NULL THEN 1 END)::int AS not_has_carro_pipa,
    COUNT(CASE WHEN rh.barragem_id IS NOT NULL THEN 1 END)::int AS has_barragem,
    COUNT(CASE WHEN rh.barragem_id IS NULL THEN 1 END)::int AS not_has_barragem,
    COUNT(CASE WHEN rh.poco_amazonas_id IS NOT NULL THEN 1 END)::int AS has_poco_amazonas,
    COUNT(CASE WHEN rh.poco_amazonas_id IS NULL THEN 1 END)::int AS not_has_amazonas,
    COUNT(CASE WHEN rh.acude_id IS NOT NULL THEN 1 END)::int AS has_acude,
    COUNT(CASE WHEN rh.acude_id IS NULL THEN 1 END)::int AS not_has_acude
  FROM recursos_hidricos rh
  JOIN propriedades p ON rh.propriedade_id = p.id
  WHERE ST_DWithin(
    p.geom::geography, 
    ST_SetSRID(ST_MakePoint($1, $2), 4326)::geography, 
    $3)`;

export const SELECT_PROPERTY_WATER_RESOURCES_QUERY = `SELECT
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
    CASE WHEN rh.$1_id IS NOT NULL THEN true ELSE false END as has_$2
  FROM recursos_hidricos rh
  JOIN propriedades p ON p.id = rh.propriedade_id`;

export const SELECT_PROPERTY_WATER_RESOURCES_BY_DISTRICT_QUERY = `SELECT
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
  CASE WHEN rh.$1_id IS NOT NULL THEN true ELSE false END as has_$2
  FROM recursos_hidricos rh
  JOIN propriedades p ON p.id = rh.propriedade_id
  JOIN distritos d ON p.distrito = d."NM_DIST"
  WHERE d.id = $3`;

export const SELECT_PROPERTY_WATER_RESOURCES_BY_AREA_QUERY = `SELECT
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
  CASE WHEN rh.$1_id IS NOT NULL THEN true ELSE false END as has_$2
  FROM recursos_hidricos rh
  JOIN propriedades p ON p.id = rh.propriedade_id
  JOIN distritos d ON p.distrito = d."NM_DIST"
  WHERE ST_DWithin(
    p.geom::geography, 
    ST_SetSRID(ST_MakePoint($3, $4), 4326)::geography, 
    $5)`;

export const WATER_RESOURCE_DISTRIC_AVAILABILITY_QUERY = `SELECT
    d.id,
    d."NM_DIST",
    ST_AsGeoJSON(ST_Collect(d.geom)) AS geojson,
    COUNT(*)::integer AS total_properties,
    COUNT(CASE WHEN rh.$1_id IS NOT NULL THEN 1 END)::int AS has_$2,
    COUNT(CASE WHEN rh.$3_id IS NULL THEN 1 END)::int AS not_has_$4
  FROM recursos_hidricos rh
  JOIN propriedades p ON rh.propriedade_id = p.id
  JOIN distritos d ON p.distrito = d."NM_DIST"
  GROUP BY d.id`;

export const SELECT_WATER_RESOURCE_BY_PROPERTY_QUERY = `SELECT
    p.id as propriedade_id, 
    ST_AsGeoJSON(p.geom) AS geojson,
    ST_X(p.geom) AS lng, 
    ST_Y(p.geom) AS lat,
    CASE WHEN rh.banheiro_id IS NOT NULL THEN true ELSE false END as has_banheiro,
	CASE WHEN rh.poco_id IS NOT NULL THEN true ELSE false END as has_poco,
	CASE WHEN rh.cisternas_id IS NOT NULL THEN true ELSE false END as has_cisterna,
	CASE WHEN rh.carro_pipa_id IS NOT NULL THEN true ELSE false END as has_carro_pipa,
	CASE WHEN rh.barragem_id IS NOT NULL THEN true ELSE false END as has_barragem,
	CASE WHEN rh.poco_amazonas_id IS NOT NULL THEN true ELSE false END as has_poco_amazonas,
	CASE WHEN rh.acude_id IS NOT NULL THEN true ELSE false END as has_acude
  FROM recursos_hidricos rh
  JOIN propriedades p ON p.id = rh.propriedade_id
  WHERE p.id = $1`;

export const SELECT_WATER_RESOURCE_QUERY = `SELECT
  rh.id AS recursos_hidricos_id,
  rh.propriedade_id,
  c.tipo_cisterna,
  c.capacidade_armazenamento AS capacidade_cisterna,
  cp.fornecedor_carro_pipa,
  cp.quantidade_mes_litro,
  p.propriedade_poco,
  p.qualidade AS qualidade_poco,
  p.bomba AS bomba_poco,
  p.vazao AS vazao_poco,
  pa.propriedade AS propriedade_poco_amazonas,
  pa.qualidade AS qualidade_poco_amazonas,
  pa.bomba AS bomba_poco_amazonas,
  pa.vazao AS vazao_poco_amazonas,
  a.propriedade AS propriedade_acude,
  a.capacidade_armazenamento AS capacidade_acude,
  b.capacidade_armazenamento AS capacidade_barragem,
  b.propriedade AS propriedade_barragem,
  br.n_banheiros,
  br.fossa,
  br.outros AS outros_banheiros
FROM
  recursos_hidricos rh
LEFT JOIN cisternas c ON rh.cisternas_id = c.id
LEFT JOIN carros_pipa cp ON rh.carro_pipa_id = cp.id
LEFT JOIN pocos p ON rh.poco_id = p.id
LEFT JOIN pocos_amazonas pa ON rh.poco_amazonas_id = pa.id
LEFT JOIN acudes a ON rh.acude_id = a.id
LEFT JOIN barragens b ON rh.barragem_id = b.id
LEFT JOIN banheiros br ON rh.banheiro_id = br.id`;

export const SELECT_WATER_RESOURCE_BY_PROPERTY_ID_QUERY = `SELECT
  rh.*,
  c.tipo_cisterna,
  c.capacidade_armazenamento AS capacidade_cisterna,
  cp.fornecedor_carro_pipa,
  cp.quantidade_mes_litro,
  p.propriedade_poco,
  p.qualidade AS qualidade_poco,
  p.bomba AS bomba_poco,
  p.vazao AS vazao_poco,
  pa.propriedade AS propriedade_poco_amazonas,
  pa.qualidade AS qualidade_poco_amazonas,
  pa.bomba AS bomba_poco_amazonas,
  pa.vazao AS vazao_poco_amazonas,
  a.propriedade AS propriedade_acude,
  a.capacidade_armazenamento AS capacidade_acude,
  b.capacidade_armazenamento AS capacidade_barragem,
  b.propriedade AS propriedade_barragem,
  br.n_banheiros,
  br.fossa,
  br.outros AS outros_banheiros
FROM
  recursos_hidricos rh
LEFT JOIN cisternas c ON rh.cisternas_id = c.id
LEFT JOIN carros_pipa cp ON rh.carro_pipa_id = cp.id
LEFT JOIN pocos p ON rh.poco_id = p.id
LEFT JOIN pocos_amazonas pa ON rh.poco_amazonas_id = pa.id
LEFT JOIN acudes a ON rh.acude_id = a.id
LEFT JOIN barragens b ON rh.barragem_id = b.id
LEFT JOIN banheiros br ON rh.banheiro_id = br.id
WHERE rh.propriedade_id = $1`;

export const SELECT_WATER_RESOURCE_WITH_PROPERTY_QUERY = `SELECT
  rh.*,
  c.tipo_cisterna,
  c.capacidade_armazenamento AS capacidade_cisterna,
  cp.fornecedor_carro_pipa,
  cp.quantidade_mes_litro,
  p.propriedade_poco,
  p.qualidade AS qualidade_poco,
  p.bomba AS bomba_poco,
  p.vazao AS vazao_poco,
  pa.propriedade AS propriedade_poco_amazonas,
  pa.qualidade AS qualidade_poco_amazonas,
  pa.bomba AS bomba_poco_amazonas,
  pa.vazao AS vazao_poco_amazonas,
  a.propriedade AS propriedade_acude,
  a.capacidade_armazenamento AS capacidade_acude,
  b.capacidade_armazenamento AS capacidade_barragem,
  b.propriedade AS propriedade_barragem,
  br.n_banheiros,
  br.fossa,
  br.outros AS outros_banheiros
FROM
  recursos_hidricos rh
LEFT JOIN cisternas c ON rh.cisternas_id = c.id
LEFT JOIN carros_pipa cp ON rh.carro_pipa_id = cp.id
LEFT JOIN pocos p ON rh.poco_id = p.id
LEFT JOIN pocos_amazonas pa ON rh.poco_amazonas_id = pa.id
LEFT JOIN acudes a ON rh.acude_id = a.id
LEFT JOIN barragens b ON rh.barragem_id = b.id
LEFT JOIN banheiros br ON rh.banheiro_id = br.id`;
