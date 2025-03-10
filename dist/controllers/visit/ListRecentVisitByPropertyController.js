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
exports.ListRecentVisitByPropertyController = void 0;
const ListRecentVisitByPropertyService_1 = require("../../services/visit/ListRecentVisitByPropertyService");
class ListRecentVisitByPropertyController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const property_id = Number(req.params.property_id);
            if (isNaN(property_id)) {
                throw new Error("Invalid or missing parameter");
            }
            const listRecentVisitByPropertyService = new ListRecentVisitByPropertyService_1.ListRecentVisitByPropertyService();
            const result = yield listRecentVisitByPropertyService.execute({
                property_id,
            });
            return res.json(result);
        });
    }
}
exports.ListRecentVisitByPropertyController = ListRecentVisitByPropertyController;
