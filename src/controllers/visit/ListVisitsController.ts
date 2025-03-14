import { Request, Response } from "express";
import { ListVisitsService } from "../../services/visit/ListVisitsService";
class ListVisitsController {
  async handle(req: Request, res: Response) {
    const listVisitsService = new ListVisitsService();

    const result = await listVisitsService.execute();

    return res.json(result);
  }
}

export { ListVisitsController };
