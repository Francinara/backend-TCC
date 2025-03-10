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
exports.CreateBeneficiarioController = void 0;
const CreateBeneficiarioService_1 = require("../../services/beneficiario/CreateBeneficiarioService");
class CreateBeneficiarioController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome_completo, apelido, cpf, sexo, estado_civil, nome_mae, nome_conjugue, naturalidade, n_membro_familia, renda_familiar, data_nascimento, dap, data_dap, tipo_dap, programa_governamental, outro_programa_governamental, nis, contato, categoria_beneficiario, associado, associacao, credito_rural, tipo_credito_rural, } = req.body;
            const createBeneficiarioService = new CreateBeneficiarioService_1.CreateBeneficiarioService();
            const beneficiario = yield createBeneficiarioService.execute({
                nome_completo,
                apelido,
                cpf,
                sexo,
                estado_civil,
                nome_mae,
                nome_conjugue,
                naturalidade,
                n_membro_familia,
                renda_familiar,
                data_nascimento,
                dap,
                data_dap,
                tipo_dap,
                programa_governamental,
                outro_programa_governamental,
                nis,
                contato,
                categoria_beneficiario,
                associado,
                associacao,
                credito_rural,
                tipo_credito_rural,
            });
            return res.json(beneficiario);
        });
    }
}
exports.CreateBeneficiarioController = CreateBeneficiarioController;
