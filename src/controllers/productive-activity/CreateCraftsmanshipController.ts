import { Request, Response } from "express";
import { CreateCraftsmanshipService } from "../../services/productive-activity/CreateCraftsmanshipService";

class CreateCraftsmanshipController {
  async handle(req: Request, res: Response) {
    const { produto, destinacao_valor, propriedade_id, visita_id } = req.body;

    const createCraftsmanshipService = new CreateCraftsmanshipService();

    try {
      const craftsmanship = await createCraftsmanshipService.execute({
        produto,
        destinacao_valor,
        propriedade_id,
        visita_id,
      });

      return res.status(201).json(craftsmanship);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
}

export { CreateCraftsmanshipController };
