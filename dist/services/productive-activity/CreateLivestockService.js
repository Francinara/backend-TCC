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
exports.CreateLivestockService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateLivestockService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ especie, quantidade, aptidao_corte, aptidao_leite, aptidao_postura, tipo_cricao_intensivo, tipo_cricao_semi_intensivo, tipo_cricao_extensivo, destinacao_casa, raca_predominante, valor_comercializacao, destinacao_venda, propriedade_id, visita_id, }) {
            if (especie == "") {
                throw new Error("Espécie inválida");
            }
            const livestock = yield prisma_1.default.pecuarias.create({
                data: {
                    especie,
                    quantidade,
                    aptidao_corte,
                    aptidao_leite,
                    aptidao_postura,
                    tipo_cricao_intensivo,
                    tipo_cricao_semi_intensivo,
                    tipo_cricao_extensivo,
                    destinacao_casa,
                    raca_predominante,
                    valor_comercializacao,
                    destinacao_venda,
                    propriedade_id,
                    visita_id,
                },
                select: {
                    id: true,
                    especie: true,
                    quantidade: true,
                    aptidao_corte: true,
                    aptidao_leite: true,
                    aptidao_postura: true,
                    tipo_cricao_intensivo: true,
                    tipo_cricao_semi_intensivo: true,
                    tipo_cricao_extensivo: true,
                    destinacao_casa: true,
                    raca_predominante: true,
                    valor_comercializacao: true,
                    destinacao_venda: true,
                    propriedade_id: true,
                    visita_id: true,
                },
            });
            return livestock;
        });
    }
}
exports.CreateLivestockService = CreateLivestockService;
