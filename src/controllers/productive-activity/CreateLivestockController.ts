import { Request, Response } from "express";
import { CreateLivestockService } from "../../services/productive-activity/CreateLivestockService";

class CreateLivestockController {
  async handle(req: Request, res: Response) {
    const {
      especie,
      quantidade,
      aptidao_corte,
      aptidao_leite,
      aptidao_postura,
      tipo_cricao_intensivo,
      tipo_cricao_semi_intensivo,
      tipo_cricao_extensivo,
      destinacao_casa,
      raca_predominante,
      valor_comercializacao,
      destinacao_venda,
      propriedade_id,
      visita_id,
    } = req.body;

    const createLivestockService = new CreateLivestockService();

    try {
      const livestock = await createLivestockService.execute({
        especie,
        quantidade,
        aptidao_corte,
        aptidao_leite,
        aptidao_postura,
        tipo_cricao_intensivo,
        tipo_cricao_semi_intensivo,
        tipo_cricao_extensivo,
        destinacao_casa,
        raca_predominante,
        valor_comercializacao,
        destinacao_venda,
        propriedade_id,
        visita_id,
      });

      return res.status(201).json(livestock);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
}

export { CreateLivestockController };
