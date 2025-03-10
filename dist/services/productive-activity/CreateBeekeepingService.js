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
exports.CreateBeekeepingService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateBeekeepingService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ n_colmeias, destinacao_mel, tipo_criacao, tipo_extrativismo, propriedade_id, visita_id, com_ferrao, sem_ferrao, }) {
            if (n_colmeias <= 0) {
                throw new Error("Número de colmeias inválido");
            }
            const beekeeping = yield prisma_1.default.apiculturas.create({
                data: {
                    n_colmeias,
                    destinacao_mel,
                    tipo_criacao,
                    tipo_extrativismo,
                    propriedade_id,
                    visita_id,
                    com_ferrao,
                    sem_ferrao,
                },
                select: {
                    id: true,
                    n_colmeias: true,
                    destinacao_mel: true,
                    tipo_criacao: true,
                    tipo_extrativismo: true,
                    propriedade_id: true,
                    visita_id: true,
                    com_ferrao: true,
                    sem_ferrao: true,
                },
            });
            return beekeeping;
        });
    }
}
exports.CreateBeekeepingService = CreateBeekeepingService;
