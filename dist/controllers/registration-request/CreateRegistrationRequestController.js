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
exports.CreateRegistrationRequestController = void 0;
const CreateRegistrationRequestService_1 = require("../../services/registration-request/CreateRegistrationRequestService");
class CreateRegistrationRequestController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const name = String(req.body.name);
            const email = String(req.body.email);
            const password = String(req.body.password);
            const role = String(req.body.role);
            const status = String(req.body.status);
            const createRegistrationRequestService = new CreateRegistrationRequestService_1.CreateRegistrationRequestService();
            const registrationRequest = yield createRegistrationRequestService.execute({
                name,
                email,
                password,
                role,
                status,
            });
            return res.json(registrationRequest);
        });
    }
}
exports.CreateRegistrationRequestController = CreateRegistrationRequestController;
