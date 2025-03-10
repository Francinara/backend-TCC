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
exports.CreateAgricultureController = void 0;
const CreateAgricultureService_1 = require("../../services/productive-activity/CreateAgricultureService");
class CreateAgricultureController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data_colheita, producao_ano, irrigacao, destinacao_venda, area_cultivo, data_plantio, destinacao_casa, valor_comercializado, cultura, propriedade_id, visita_id, } = req.body;
            const createAgricultureService = new CreateAgricultureService_1.CreateAgricultureService();
            const agricultura = yield createAgricultureService.execute({
                data_colheita,
                producao_ano,
                irrigacao,
                destinacao_venda,
                area_cultivo,
                data_plantio,
                destinacao_casa,
                valor_comercializado,
                cultura,
                propriedade_id,
                visita_id,
            });
            return res.json(agricultura);
        });
    }
}
exports.CreateAgricultureController = CreateAgricultureController;
