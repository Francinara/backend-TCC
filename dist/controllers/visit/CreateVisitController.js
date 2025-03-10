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
exports.CreateVisitController = void 0;
const CreateVisitService_1 = require("../../services/visit/CreateVisitService");
class CreateVisitController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const numero = Number(req.body.numero);
            const data = String(req.body.data);
            const tecnico_responsavel = String(req.body.tecnico_responsavel);
            const data_ultima_visita = String(req.body.data_ultima_visita);
            const diagnostico = String(req.body.diagnostico);
            const recomendacoes = String(req.body.recomendacoes);
            const finalidade_visita = String(req.body.finalidade_visita);
            const propriedade_id = Number(req.body.propriedade_id);
            if (!numero ||
                !data ||
                !tecnico_responsavel ||
                !data_ultima_visita ||
                !diagnostico ||
                !recomendacoes ||
                !finalidade_visita ||
                !propriedade_id) {
                return res.status(400).json({ error: "Missing or invalid parameter" });
            }
            const createVisitService = new CreateVisitService_1.CreateVisitService();
            const visita = yield createVisitService.execute({
                numero,
                data,
                tecnico_responsavel,
                data_ultima_visita,
                diagnostico,
                recomendacoes,
                finalidade_visita,
                propriedade_id,
            });
            return res.json(visita);
        });
    }
}
exports.CreateVisitController = CreateVisitController;
