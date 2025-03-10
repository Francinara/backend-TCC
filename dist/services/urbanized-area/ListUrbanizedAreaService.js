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
exports.ListUrbanizedAreaService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const urbanizedAreaQueries_1 = require("../../queries/urbanizedAreaQueries");
class ListUrbanizedAreaService {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield prisma_1.default.$queryRawUnsafe(urbanizedAreaQueries_1.SELECT_URBANIZED_AREA_QUERY);
                return result;
            }
            catch (error) {
                throw new Error(`Error fetching urbanized area. Error: ${error}`);
            }
        });
    }
}
exports.ListUrbanizedAreaService = ListUrbanizedAreaService;
