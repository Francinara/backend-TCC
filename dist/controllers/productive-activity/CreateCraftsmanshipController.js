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
exports.CreateCraftsmanshipController = void 0;
const CreateCraftsmanshipService_1 = require("../../services/productive-activity/CreateCraftsmanshipService");
class CreateCraftsmanshipController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { produto, destinacao_valor, propriedade_id, visita_id } = req.body;
            const createCraftsmanshipService = new CreateCraftsmanshipService_1.CreateCraftsmanshipService();
            try {
                const craftsmanship = yield createCraftsmanshipService.execute({
                    produto,
                    destinacao_valor,
                    propriedade_id,
                    visita_id,
                });
                return res.status(201).json(craftsmanship);
            }
            catch (error) {
                return res.status(400).json({ error: error });
            }
        });
    }
}
exports.CreateCraftsmanshipController = CreateCraftsmanshipController;
