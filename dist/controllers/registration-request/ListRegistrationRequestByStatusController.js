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
exports.ListRegistrationRequestByStatusController = void 0;
const ListRegistrationRequestByStatusService_1 = require("../../services/registration-request/ListRegistrationRequestByStatusService");
class ListRegistrationRequestByStatusController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const status = String(req.query.status);
            const listRegistrationRequestByStatusService = new ListRegistrationRequestByStatusService_1.ListRegistrationRequestByStatusService();
            const result = yield listRegistrationRequestByStatusService.execute({
                status,
            });
            return res.json(result);
        });
    }
}
exports.ListRegistrationRequestByStatusController = ListRegistrationRequestByStatusController;
