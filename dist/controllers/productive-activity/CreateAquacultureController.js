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
exports.CreateAquacultureController = void 0;
const CreateAquacultureService_1 = require("../../services/productive-activity/CreateAquacultureService");
class CreateAquacultureController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { aptidao_corte, aptidao_reproducao, lamina_agua, quantidade, cultura, especie, valor_comercializacao, tipo_cricao_super_intensivo, tipo_cricao_intensivo, tipo_cricao_semi_intensivo, tipo_cricao_extensivo, destinacao_casa, destinacao_verda, propriedade_id, visita_id, } = req.body;
            const createAquacultureService = new CreateAquacultureService_1.CreateAquacultureService();
            const aquaculture = yield createAquacultureService.execute({
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
            });
            return res.json(aquaculture);
        });
    }
}
exports.CreateAquacultureController = CreateAquacultureController;
