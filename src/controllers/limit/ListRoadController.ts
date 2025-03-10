import { Request, Response } from "express";
import { ListLimitService } from "../../services/limit/ListLimitService";

class ListLimitController {
  async handle(req: Request, res: Response) {
    const listLimitService = new ListLimitService();

    const result = await listLimitService.execute();

    return res.json(result);
  }
}

export { ListLimitController };
