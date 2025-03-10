import { Request, Response } from "express";
import { CreateOtherActivityService } from "../../services/productive-activity/CreateOtherActivityService";

class CreateOtherActivityController {
  async handle(req: Request, res: Response) {
    const { tipo, descricao, propriedade_id, visita_id } = req.body;
    const createOtherActivityService = new CreateOtherActivityService();

    const otherActivity = await createOtherActivityService.execute({
      tipo,
      descricao,
      propriedade_id,
      visita_id,
    });

    return res.json(otherActivity);
  }
}

export { CreateOtherActivityController };
