import { Request, Response } from "express";
import { ListPropertyByIDService } from "../../services/property/ListPropertyByIDService";

class ListPropertyByIDController {
  async handle(req: Request, res: Response) {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      throw new Error("Invalid or missing parameter");
    }

    const listPropertyByIDService = new ListPropertyByIDService();

    const property = await listPropertyByIDService.execute({ id });

    return res.json(property);
  }
}

export { ListPropertyByIDController };
