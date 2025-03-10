import { Request, Response } from "express";
import { ListDrainageService } from "../../services/drainage/ListDrainageService";

class ListDrainageController {
  async handle(req: Request, res: Response) {
    const listDrainageService = new ListDrainageService();

    const result = await listDrainageService.execute();

    return res.json(result);
  }
}

export { ListDrainageController };
