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
exports.CreateBeneficiarioService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateBeneficiarioService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ nome_completo, apelido, cpf, sexo, estado_civil, nome_mae, nome_conjugue, naturalidade, n_membro_familia, renda_familiar, data_nascimento, dap, data_dap, tipo_dap, programa_governamental, outro_programa_governamental, nis, contato, categoria_beneficiario, associado, associacao, credito_rural, tipo_credito_rural, }) {
            if (nome_completo == "") {
                throw new Error("Nome invalid");
            }
            const beneficiario = yield prisma_1.default.beneficiarios.create({
                data: {
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
                    data_nascimento: new Date(data_nascimento).toISOString(),
                    dap,
                    data_dap: new Date(data_dap || "").toISOString(),
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
                },
                select: {
                    id: true,
                    nome_completo: true,
                    apelido: true,
                    cpf: true,
                    sexo: true,
                    estado_civil: true,
                    nome_mae: true,
                    nome_conjugue: true,
                    naturalidade: true,
                    n_membro_familia: true,
                    renda_familiar: true,
                    data_nascimento: true,
                    dap: true,
                    data_dap: true,
                    tipo_dap: true,
                    programa_governamental: true,
                    outro_programa_governamental: true,
                    nis: true,
                    contato: true,
                    categoria_beneficiario: true,
                    associado: true,
                    associacao: true,
                    credito_rural: true,
                    tipo_credito_rural: true,
                },
            });
            return beneficiario;
        });
    }
}
exports.CreateBeneficiarioService = CreateBeneficiarioService;
