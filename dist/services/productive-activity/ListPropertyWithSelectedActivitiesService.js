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
exports.ListPropertyWithSelectedActivitiesService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const productiveActivityQueries_1 = require("../../queries/productiveActivityQueries");
const constants_1 = require("../../settings/constants");
class ListPropertyWithSelectedActivitiesService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ activities }) {
            try {
                const selectedActivities = activities
                    ? activities.split("").map(Number)
                    : [];
                if (selectedActivities.length === 0) {
                    return [];
                }
                const queries = selectedActivities.slice(1).map((activity) => {
                    const activityInfo = constants_1.activityMap[activity];
                    return productiveActivityQueries_1.SELECT_PROPERTIES_WITH_SELECTED_PRODUCTIVE_ACTIVITIES_QUERY.replace("$1", activityInfo.name)
                        .replace("$2", activityInfo.abbreviation)
                        .replace("$3", activityInfo.abbreviation);
                });
                const query = productiveActivityQueries_1.SELECT_PROPERTIES_WITH_PRODUCTIVE_ACTIVITY_QUERY.replace("$1", constants_1.activityMap[selectedActivities[0]].name)
                    .replace("$2", constants_1.activityMap[selectedActivities[0]].abbreviation)
                    .replace("$3", constants_1.activityMap[selectedActivities[0]].abbreviation) +
                    queries.join(" ");
                const result = yield prisma_1.default.$queryRawUnsafe(`${query}
        GROUP BY
          p.id, p.nome_propriedade, p.geom
        ORDER BY
          water_distance ASC`);
                return result;
            }
            catch (error) {
                throw new Error(`Error fetching properties with selected activities. Error ${error}`);
            }
        });
    }
}
exports.ListPropertyWithSelectedActivitiesService = ListPropertyWithSelectedActivitiesService;
