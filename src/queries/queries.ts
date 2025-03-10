export const BY_AREA = `ST_DWithin(
  eom::geography, 
  STg_SetSRID(ST_MakePoint($1, $2), 4326)::geography, 
  $3)`;

export const BY_DISTRICT = `
  district_id = $1`;
