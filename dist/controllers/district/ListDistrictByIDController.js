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
exports.ListDistrictByIDController = void 0;
const ListDistrictByIDService_1 = require("../../services/district/ListDistrictByIDService");
class ListDistrictByIDController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                throw new Error("Invalid or missing parameter");
            }
            const listDistrictByIDService = new ListDistrictByIDService_1.ListDistrictByIDService();
            const district = yield listDistrictByIDService.execute({ id });
            return res.json(district);
        });
    }
}
exports.ListDistrictByIDController = ListDistrictByIDController;
