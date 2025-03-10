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
exports.CreateAquacultureService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateAquacultureService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ aptidao_corte, aptidao_reproducao, lamina_agua, quantidade, cultura, especie, valor_comercializacao, tipo_cricao_super_intensivo, tipo_cricao_intensivo, tipo_cricao_semi_intensivo, tipo_cricao_extensivo, destinacao_casa, destinacao_verda, propriedade_id, visita_id, }) {
            if (!lamina_agua || !cultura || !especie) {
                throw new Error("Missing required fields");
            }
            const aquaculture = yield prisma_1.default.aquiculturas.create({
                data: {
                    aptidao_corte,
                    aptidao_reproducao,
                    lamina_agua,
                    quantidade,
                    cultura,
                    especie,
                    valor_comercializacao,
                    tipo_cricao_super_intensivo,
                    tipo_cricao_intensivo,
                    tipo_cricao_semi_intensivo,
                    tipo_cricao_extensivo,
                    destinacao_casa,
                    destinacao_verda,
                    propriedade_id,
                    visita_id,
                },
                select: {
                    id: true,
                    aptidao_corte: true,
                    aptidao_reproducao: true,
                    lamina_agua: true,
                    quantidade: true,
                    cultura: true,
                    especie: true,
                    valor_comercializacao: true,
                    tipo_cricao_super_intensivo: true,
                    tipo_cricao_intensivo: true,
                    tipo_cricao_semi_intensivo: true,
                    tipo_cricao_extensivo: true,
                    destinacao_casa: true,
                    destinacao_verda: true,
                    propriedade_id: true,
                    visita_id: true,
                },
            });
            return aquaculture;
        });
    }
}
exports.CreateAquacultureService = CreateAquacultureService;
