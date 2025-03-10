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
exports.ListRegistrationRequestByDateController = void 0;
const ListRegistrationRequestByDateService_1 = require("../../services/registration-request/ListRegistrationRequestByDateService");
class ListRegistrationRequestByDateController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestDate = new Date(String(req.query.requestDate));
            const listRegistrationRequestByDateService = new ListRegistrationRequestByDateService_1.ListRegistrationRequestByDateService();
            const result = yield listRegistrationRequestByDateService.execute({
                requestDate,
            });
            return res.json(result);
        });
    }
}
exports.ListRegistrationRequestByDateController = ListRegistrationRequestByDateController;
