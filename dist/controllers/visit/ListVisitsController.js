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
exports.ListVisitsController = void 0;
const ListVisitsService_1 = require("../../services/visit/ListVisitsService");
class ListVisitsController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listVisitsService = new ListVisitsService_1.ListVisitsService();
            const result = yield listVisitsService.execute();
            return res.json(result);
        });
    }
}
exports.ListVisitsController = ListVisitsController;
