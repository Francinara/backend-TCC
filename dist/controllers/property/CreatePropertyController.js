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
exports.CreatePropertyController = void 0;
const CreatePropertyService_1 = require("../../services/property/CreatePropertyService");
class CreatePropertyController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nome_propriedade = String(req.body.nome_propriedade);
            const lat = Number(req.body.lat);
            const lng = Number(req.body.lng);
            const beneficiario_id = Number(req.body.beneficiario_id);
            const car = Boolean(req.body.beneficiario_id);
            const n_recibo_car = String(req.body.n_recibo_car);
            const area = Number(req.body.area);
            const comunidade = String(req.body.comunidade);
            const distrito = String(req.body.distrito);
            const situacao_fundiaria = String(req.body.situacao_fundiaria);
            const tipo_documento = String(req.body.tipo_documento);
            if (isNaN(lat) ||
                isNaN(lng) ||
                isNaN(beneficiario_id) ||
                !nome_propriedade) {
                throw new Error("Invalid or missing parameter");
            }
            const createPropertyService = new CreatePropertyService_1.CreatePropertyService();
            const property = yield createPropertyService.execute({
                nome_propriedade,
                lat,
                lng,
                beneficiario_id,
                car,
                n_recibo_car,
                area,
                comunidade,
                distrito,
                situacao_fundiaria,
                tipo_documento,
            });
            return res.json(property);
        });
    }
}
exports.CreatePropertyController = CreatePropertyController;
