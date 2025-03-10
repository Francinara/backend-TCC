import { Request, Response } from "express";
import { ListWaterService } from "../../services/water/ListWaterService";

class ListWaterController {
  async handle(req: Request, res: Response) {
    const listWaterService = new ListWaterService();

    const result = await listWaterService.execute();

    return res.json(result);
  }
}

export { ListWaterController };
