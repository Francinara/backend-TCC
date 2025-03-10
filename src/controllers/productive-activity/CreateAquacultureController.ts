import { Request, Response } from "express";
import { CreateAquacultureService } from "../../services/productive-activity/CreateAquacultureService";

class CreateAquacultureController {
  async handle(req: Request, res: Response) {
    const {
      aptidao_corte,
      aptidao_reproducao,
      lamina_agua,
      quantidade,
      cultura,
      especie,
      valor_comercializacao,
      tipo_cricao_super_intensivo,
      tipo_cricao_intensivo,
      tipo_cricao_semi_intensivo,
      tipo_cricao_extensivo,
      destinacao_casa,
      destinacao_verda,
      propriedade_id,
      visita_id,
    } = req.body;

    const createAquacultureService = new CreateAquacultureService();

    const aquaculture = await createAquacultureService.execute({
      aptidao_corte,
      aptidao_reproducao,
      lamina_agua,
      quantidade,
      cultura,
      especie,
      valor_comercializacao,
      tipo_cricao_super_intensivo,
      tipo_cricao_intensivo,
      tipo_cricao_semi_intensivo,
      tipo_cricao_extensivo,
      destinacao_casa,
      destinacao_verda,
      propriedade_id,
      visita_id,
    });

    return res.json(aquaculture);
  }
}

export { CreateAquacultureController };
