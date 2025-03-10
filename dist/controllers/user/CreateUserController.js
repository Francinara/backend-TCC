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
exports.CreateUserController = void 0;
const CreateUserService_1 = require("../../services/user/CreateUserService");
class CreateUserController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const name = String(req.body.name);
            const email = String(req.body.email);
            const password = String(req.body.password);
            const role = String(req.body.role);
            const active = Boolean(req.body.active);
            const createUserService = new CreateUserService_1.CreateUSerService();
            const user = yield createUserService.execute({
                name,
                email,
                password,
                role,
                active,
            });
            return res.json(user);
        });
    }
}
exports.CreateUserController = CreateUserController;
