import { Request, Response } from "express";
import { ListRoadService } from "../../services/road/ListRoadService";

class ListRoadController {
  async handle(req: Request, res: Response) {
    const listRoadService = new ListRoadService();

    const result = await listRoadService.execute();

    return res.json(result);
  }
}

export { ListRoadController };
