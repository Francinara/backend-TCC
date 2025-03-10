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
exports.ListProductiveActivityByPropertyController = void 0;
const ListProductiveActivityByPropertyService_1 = require("../../services/productive-activity/ListProductiveActivityByPropertyService");
class ListProductiveActivityByPropertyController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const activity = Number(req.query.activity);
            const property_id = Number(req.params.property_id);
            if (isNaN(activity) || isNaN(property_id)) {
                throw new Error("Invalid or missing parameter");
            }
            const listProductiveActivityByPropertyService = new ListProductiveActivityByPropertyService_1.ListProductiveActivityByPropertyService();
            const result = yield listProductiveActivityByPropertyService.execute({
                activity,
                property_id,
            });
            return res.json(result);
        });
    }
}
exports.ListProductiveActivityByPropertyController = ListProductiveActivityByPropertyController;
