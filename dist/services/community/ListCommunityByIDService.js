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
exports.ListCommunityByIDService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const communityQueries_1 = require("../../queries/communityQueries");
class ListCommunityByIDService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id }) {
            try {
                const findCommunityByID = yield prisma_1.default.$queryRawUnsafe(communityQueries_1.SELECT_COMMUNITY_BY_ID_QUERY, id);
                return findCommunityByID;
            }
            catch (error) {
                throw new Error(`Error fetching community by ID. Error: ${error}`);
            }
        });
    }
}
exports.ListCommunityByIDService = ListCommunityByIDService;
