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
exports.CreateBeekeepingController = void 0;
const CreateBeekeepingService_1 = require("../../services/productive-activity/CreateBeekeepingService");
class CreateBeekeepingController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { n_colmeias, destinacao_mel, tipo_criacao, tipo_extrativismo, propriedade_id, visita_id, com_ferrao, sem_ferrao, } = req.body;
            const createBeekeepingService = new CreateBeekeepingService_1.CreateBeekeepingService();
            const beekeeping = yield createBeekeepingService.execute({
                n_colmeias,
                destinacao_mel,
                tipo_criacao,
                tipo_extrativismo,
                propriedade_id,
                visita_id,
                com_ferrao,
                sem_ferrao,
            });
            return res.json(beekeeping);
        });
    }
}
exports.CreateBeekeepingController = CreateBeekeepingController;
