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
exports.CreateLivestockController = void 0;
const CreateLivestockService_1 = require("../../services/productive-activity/CreateLivestockService");
class CreateLivestockController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { especie, quantidade, aptidao_corte, aptidao_leite, aptidao_postura, tipo_cricao_intensivo, tipo_cricao_semi_intensivo, tipo_cricao_extensivo, destinacao_casa, raca_predominante, valor_comercializacao, destinacao_venda, propriedade_id, visita_id, } = req.body;
            const createLivestockService = new CreateLivestockService_1.CreateLivestockService();
            try {
                const livestock = yield createLivestockService.execute({
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
                });
                return res.status(201).json(livestock);
            }
            catch (error) {
                return res.status(400).json({ error: error });
            }
        });
    }
}
exports.CreateLivestockController = CreateLivestockController;
