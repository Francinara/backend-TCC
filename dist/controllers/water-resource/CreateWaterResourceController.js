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
exports.CreateWaterResourceController = void 0;
const CreateWaterResourceService_1 = require("../../services/water-resource/CreateWaterResourceService");
class CreateWaterResourceController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const propriedade_id = Number(req.body.propriedade_id);
            const tipo_cisterna = String(req.body.tipo_cisterna);
            const capacidade_cisterna = Number(req.body.capacidade_cisterna);
            const fornecedor_carro_pipa = String(req.body.fornecedor_carro_pipa);
            const quantidade_mes_litro = Number(req.body.quantidade_mes_litro);
            const propriedade_poco = String(req.body.propriedade_poco);
            const qualidade_poco = String(req.body.qualidade_poco);
            const bomba_poco = Boolean(req.body.bomba_poco);
            const vazao_poco = Number(req.body.vazao_poco);
            const propriedade_poco_amazonas = String(req.body.propriedade_poco_amazonas);
            const qualidade_poco_amazonas = String(req.body.qualidade_poco_amazonas);
            const bomba_poco_amazonas = Boolean(req.body.bomba_poco_amazonas);
            const vazao_poco_amazonas = Number(req.body.vazao_poco_amazonas);
            const propriedade_acude = String(req.body.propriedade_acude);
            const capacidade_acude = Number(req.body.capacidade_acude);
            const capacidade_barragem = Number(req.body.capacidade_barragem);
            const propriedade_barragem = String(req.body.propriedade_barragem);
            const n_banheiros = Number(req.body.n_banheiros);
            const fossa = Boolean(req.body.fossa);
            const outros_banheiros = String(req.body.outros_banheiros);
            if (isNaN(propriedade_id)) {
                throw new Error("Propriedade ID inválido");
            }
            const createWaterResourceService = new CreateWaterResourceService_1.CreateWaterResourceService();
            const waterResource = yield createWaterResourceService.execute({
                propriedade_id,
                tipo_cisterna,
                capacidade_cisterna,
                fornecedor_carro_pipa,
                quantidade_mes_litro,
                propriedade_poco,
                qualidade_poco,
                bomba_poco,
                vazao_poco,
                propriedade_poco_amazonas,
                qualidade_poco_amazonas,
                bomba_poco_amazonas,
                vazao_poco_amazonas,
                propriedade_acude,
                capacidade_acude,
                capacidade_barragem,
                propriedade_barragem,
                n_banheiros,
                fossa,
                outros_banheiros,
            });
            return res.json(waterResource);
        });
    }
}
exports.CreateWaterResourceController = CreateWaterResourceController;
