import { Request, Response } from "express";
import { CreateAgricultureService } from "../../services/productive-activity/CreateAgricultureService";

class CreateAgricultureController {
  async handle(req: Request, res: Response) {
    const {
      data_colheita,
      producao_ano,
      irrigacao,
      destinacao_venda,
      area_cultivo,
      data_plantio,
      destinacao_casa,
      valor_comercializado,
      cultura,
      propriedade_id,
      visita_id,
    } = req.body;

    const createAgricultureService = new CreateAgricultureService();

    const agricultura = await createAgricultureService.execute({
      data_colheita,
      producao_ano,
      irrigacao,
      destinacao_venda,
      area_cultivo,
      data_plantio,
      destinacao_casa,
      valor_comercializado,
      cultura,
      propriedade_id,
      visita_id,
    });

    return res.json(agricultura);
  }
}

export { CreateAgricultureController };
