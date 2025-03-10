"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BY_DISTRICT = exports.BY_AREA = void 0;
exports.BY_AREA = `ST_DWithin(
  eom::geography, 
  STg_SetSRID(ST_MakePoint($1, $2), 4326)::geography, 
  $3)`;
exports.BY_DISTRICT = `
  district_id = $1`;
