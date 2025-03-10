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
exports.ListPropertyByDistrictController = void 0;
const ListPropertyByDistrictService_1 = require("../../services/property/ListPropertyByDistrictService");
class ListPropertyByDistrictController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const district_id = Number(req.query.district_id);
            if (isNaN(district_id)) {
                throw new Error("Invalid or missing parameter");
            }
            const listPropertyByDistrictService = new ListPropertyByDistrictService_1.ListPropertyByDistrictService();
            const properties = yield listPropertyByDistrictService.execute({
                district_id,
            });
            return res.json(properties);
        });
    }
}
exports.ListPropertyByDistrictController = ListPropertyByDistrictController;
