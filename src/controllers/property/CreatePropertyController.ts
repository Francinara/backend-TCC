import { Request, Response } from "express";
import { CreatePropertyService } from "../../services/property/CreatePropertyService";

class CreatePropertyController {
  async handle(req: Request, res: Response) {
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

    if (
      isNaN(lat) ||
      isNaN(lng) ||
      isNaN(beneficiario_id) ||
      !nome_propriedade
    ) {
      throw new Error("Invalid or missing parameter");
    }

    const createPropertyService = new CreatePropertyService();

    const property = await createPropertyService.execute({
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
  }
}

export { CreatePropertyController };
