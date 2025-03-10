import { Request, Response } from "express";
import { CreateBeekeepingService } from "../../services/productive-activity/CreateBeekeepingService";

class CreateBeekeepingController {
  async handle(req: Request, res: Response) {
    const {
      n_colmeias,
      destinacao_mel,
      tipo_criacao,
      tipo_extrativismo,
      propriedade_id,
      visita_id,
      com_ferrao,
      sem_ferrao,
    } = req.body;

    const createBeekeepingService = new CreateBeekeepingService();

    const beekeeping = await createBeekeepingService.execute({
      n_colmeias,
      destinacao_mel,
      tipo_criacao,
      tipo_extrativismo,
      propriedade_id,
      visita_id,
      com_ferrao,
      sem_ferrao,
    });

    return res.json(beekeeping);
  }
}

export { CreateBeekeepingController };
