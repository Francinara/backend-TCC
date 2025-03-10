import { Request, Response } from "express";
import { CreateBeneficiarioService } from "../../services/beneficiario/CreateBeneficiarioService";

class CreateBeneficiarioController {
  async handle(req: Request, res: Response) {
    const {
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
    } = req.body;
    const createBeneficiarioService = new CreateBeneficiarioService();

    const beneficiario = await createBeneficiarioService.execute({
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
  }
}

export { CreateBeneficiarioController };
