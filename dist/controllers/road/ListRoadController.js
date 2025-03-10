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
exports.ListRoadController = void 0;
const ListRoadService_1 = require("../../services/road/ListRoadService");
class ListRoadController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listRoadService = new ListRoadService_1.ListRoadService();
            const result = yield listRoadService.execute();
            return res.json(result);
        });
    }
}
exports.ListRoadController = ListRoadController;
