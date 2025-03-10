import { Request, Response } from "express";
import { ListBeneficiarioService } from "../../services/beneficiario/ListBeneficiarioService";

class ListBeneficiarioController {
  async handle(req: Request, res: Response) {
    const listBeneficiarioService = new ListBeneficiarioService();

    const beneficiario = await listBeneficiarioService.execute();

    return res.json(beneficiario);
  }
}

export { ListBeneficiarioController };
