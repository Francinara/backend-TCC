"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPropertyByDistrictService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const propertyQueries_1 = require("../../queries/propertyQueries");
class ListPropertyByDistrictService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ district_id }) {
            try {
                const findPropertyByDistrict = yield prisma_1.default.$queryRawUnsafe(propertyQueries_1.SELECT_PROPERTY_BY_DISTRICT_QUERY, district_id);
                return findPropertyByDistrict;
            }
            catch (error) {
                throw new Error(`Error fetching properties by district. Error: ${error}`);
            }
        });
    }
}
exports.ListPropertyByDistrictService = ListPropertyByDistrictService;
