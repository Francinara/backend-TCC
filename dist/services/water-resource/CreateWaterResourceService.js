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
exports.CreateWaterResourceService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateWaterResourceService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ propriedade_id, tipo_cisterna, capacidade_cisterna, fornecedor_carro_pipa, quantidade_mes_litro, propriedade_poco, qualidade_poco, bomba_poco, vazao_poco, propriedade_poco_amazonas, qualidade_poco_amazonas, bomba_poco_amazonas, vazao_poco_amazonas, propriedade_acude, capacidade_acude, capacidade_barragem, propriedade_barragem, n_banheiros, fossa, outros_banheiros, }) {
            if (!propriedade_id) {
                throw new Error("Propriedade ID inválido");
            }
            const poco = yield prisma_1.default.pocos.create({
                data: {
                    propriedade_poco,
                    qualidade: qualidade_poco,
                    bomba: bomba_poco,
                    vazao: vazao_poco,
                },
                select: {
                    id: true,
                },
            });
            const poco_amazonas = yield prisma_1.default.pocosAmazonas.create({
                data: {
                    propriedade: propriedade_poco_amazonas,
                    qualidade: qualidade_poco_amazonas,
                    bomba: bomba_poco_amazonas,
                    vazao: vazao_poco_amazonas,
                },
                select: {
                    id: true,
                },
            });
            const cisterna = yield prisma_1.default.cisternas.create({
                data: {
                    tipo_cisterna: tipo_cisterna,
                    capacidade_armazenamento: capacidade_cisterna,
                },
                select: {
                    id: true,
                },
            });
            const carro_pipa = yield prisma_1.default.carrosPipa.create({
                data: {
                    fornecedor_carro_pipa,
                    quantidade_mes_litro,
                },
                select: {
                    id: true,
                },
            });
            const acude = yield prisma_1.default.acudes.create({
                data: {
                    propriedade: propriedade_acude,
                    capacidade_armazenamento: capacidade_acude,
                },
                select: {
                    id: true,
                },
            });
            const barragem = yield prisma_1.default.barragens.create({
                data: {
                    propriedade: propriedade_barragem,
                    capacidade_armazenamento: capacidade_barragem,
                },
                select: {
                    id: true,
                },
            });
            const banheiro = yield prisma_1.default.banheiros.create({
                data: {
                    n_banheiros,
                    fossa,
                    outros: outros_banheiros,
                },
                select: {
                    id: true,
                },
            });
            const waterResource = yield prisma_1.default.recursosHidricos.create({
                data: {
                    propriedade_id,
                    carro_pipa_id: carro_pipa.id,
                    poco_id: poco.id,
                    poco_amazonas_id: poco_amazonas.id,
                    acude_id: acude.id,
                    barragem_id: barragem.id,
                    banheiro_id: banheiro.id,
                    cisternas_id: cisterna.id,
                },
                select: {
                    id: true,
                    propriedade_id: true,
                    carro_pipa_id: true,
                    poco_id: true,
                    poco_amazonas_id: true,
                    acude_id: true,
                    barragem_id: true,
                    banheiro_id: true,
                    cisternas_id: true,
                },
            });
            return waterResource;
        });
    }
}
exports.CreateWaterResourceService = CreateWaterResourceService;
