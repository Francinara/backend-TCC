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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPropertyWithSelectedActivitiesController = void 0;
const ListPropertyWithSelectedActivitiesService_1 = require("../../services/productive-activity/ListPropertyWithSelectedActivitiesService");
class ListPropertyWithSelectedActivitiesController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const activities = String(req.query.activities);
            if (!activities) {
                throw new Error("Invalid or missing parameter");
            }
            const listPropertyWithSelectedActivitiesService = new ListPropertyWithSelectedActivitiesService_1.ListPropertyWithSelectedActivitiesService();
            const result = yield listPropertyWithSelectedActivitiesService.execute({
                activities,
            });
            return res.json(result);
        });
    }
}
exports.ListPropertyWithSelectedActivitiesController = ListPropertyWithSelectedActivitiesController;
