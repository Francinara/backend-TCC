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
exports.CreateAgricultureService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateAgricultureService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data_colheita, producao_ano, irrigacao, destinacao_venda, area_cultivo, data_plantio, destinacao_casa, valor_comercializado, cultura, propriedade_id, visita_id, }) {
            if (!data_colheita || !data_plantio || !cultura || !propriedade_id) {
                throw new Error("Dados obrigatórios não fornecidos");
            }
            const agricultura = yield prisma_1.default.agriculturas.create({
                data: {
                    data_colheita: new Date(data_colheita).toISOString(),
                    producao_ano,
                    irrigacao,
                    destinacao_venda,
                    area_cultivo,
                    data_plantio: new Date(data_plantio).toISOString(),
                    destinacao_casa,
                    valor_comercializado,
                    cultura,
                    propriedade_id,
                    visita_id,
                },
                select: {
                    id: true,
                    data_colheita: true,
                    producao_ano: true,
                    irrigacao: true,
                    destinacao_venda: true,
                    area_cultivo: true,
                    data_plantio: true,
                    destinacao_casa: true,
                    valor_comercializado: true,
                    cultura: true,
                    propriedade_id: true,
                    visita_id: true,
                },
            });
            return agricultura;
        });
    }
}
exports.CreateAgricultureService = CreateAgricultureService;
