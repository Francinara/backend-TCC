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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRegistrationRequestService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateRegistrationRequestService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ name, email, password, role, status }) {
            if (!email) {
                throw new Error("Email incorrect");
            }
            const requestAlreadyExists = yield prisma_1.default.registrationRequest.findFirst({
                where: {
                    email: email,
                },
            });
            const userAlreadyExists = yield prisma_1.default.user.findFirst({
                where: {
                    email: email,
                },
            });
            if (requestAlreadyExists || userAlreadyExists) {
                throw new Error("Registration request or user already exists");
            }
            const registrationRequest = yield prisma_1.default.registrationRequest.create({
                data: {
                    name: name,
                    email: email,
                    password: password,
                    role: role,
                    status: status,
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    role: true,
                    status: true,
                    requestDate: true,
                },
            });
            return { registrationRequest };
        });
    }
}
exports.CreateRegistrationRequestService = CreateRegistrationRequestService;
