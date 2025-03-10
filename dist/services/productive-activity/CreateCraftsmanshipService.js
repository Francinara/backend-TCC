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
exports.CreateCraftsmanshipService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateCraftsmanshipService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ produto, destinacao_valor, propriedade_id, visita_id, }) {
            if (!propriedade_id) {
                throw new Error("Propriedade inválida");
            }
            const craftsmanship = yield prisma_1.default.artesanatos.create({
                data: {
                    produto,
                    destinacao_valor,
                    propriedade_id,
                    visita_id,
                },
                select: {
                    id: true,
                    produto: true,
                    destinacao_valor: true,
                    propriedade_id: true,
                    visita_id: true,
                },
            });
            return craftsmanship;
        });
    }
}
exports.CreateCraftsmanshipService = CreateCraftsmanshipService;
