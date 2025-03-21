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
exports.ListProductiveActivityByActivityService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const productiveActivityQueries_1 = require("../../queries/productiveActivityQueries");
const constants_1 = require("../../settings/constants");
class ListProductiveActivityByActivityService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ activity }) {
            try {
                const query = productiveActivityQueries_1.SELECT_PRODUCTIVE_ACTIVITY_BY_ACTIVITY_QUERY.replace("$1", constants_1.activityMap[activity].name)
                    .replace("$2", constants_1.activityMap[activity].name)
                    .replace("$3", constants_1.activityMap[activity].name)
                    .replace("$4", constants_1.activityMap[activity].name);
                const result = yield prisma_1.default.$queryRawUnsafe(query);
                return result;
            }
            catch (error) {
                throw new Error(`Error fetching productive activity by activity. Error: ${error}`);
            }
        });
    }
}
exports.ListProductiveActivityByActivityService = ListProductiveActivityByActivityService;
