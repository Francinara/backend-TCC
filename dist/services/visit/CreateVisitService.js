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
exports.CreateVisitService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateVisitService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ numero, data, tecnico_responsavel, data_ultima_visita, diagnostico, recomendacoes, finalidade_visita, propriedade_id, }) {
            if (numero == null) {
                throw new Error("Número inválido");
            }
            const visita = yield prisma_1.default.visitas.create({
                data: {
                    numero,
                    data: new Date(data).toISOString(),
                    tecnico_responsavel,
                    data_ultima_visita: new Date(data_ultima_visita).toISOString(),
                    diagnostico,
                    recomendacoes,
                    finalidade_visita,
                    propriedade_id,
                },
                select: {
                    numero: true,
                    data: true,
                    tecnico_responsavel: true,
                    data_ultima_visita: true,
                    diagnostico: true,
                    recomendacoes: true,
                    finalidade_visita: true,
                    propriedade_id: true,
                },
            });
            return visita;
        });
    }
}
exports.CreateVisitService = CreateVisitService;
