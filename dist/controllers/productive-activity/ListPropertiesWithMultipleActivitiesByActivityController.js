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
exports.ListPropertiesWithMultipleActivitiesByActivityController = void 0;
const ListPropertiesWithMultipleActivitiesByActivityService_1 = require("../../services/productive-activity/ListPropertiesWithMultipleActivitiesByActivityService");
class ListPropertiesWithMultipleActivitiesByActivityController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const activity = Number(req.query.activity);
            if (isNaN(activity)) {
                throw new Error("Invalid or missing parameter");
            }
            const listPropertiesWithMultipleActivitiesByActivityService = new ListPropertiesWithMultipleActivitiesByActivityService_1.ListPropertiesWithMultipleActivitiesByActivityService();
            const result = yield listPropertiesWithMultipleActivitiesByActivityService.execute({
                activity,
            });
            return res.json(result);
        });
    }
}
exports.ListPropertiesWithMultipleActivitiesByActivityController = ListPropertiesWithMultipleActivitiesByActivityController;
