import { Request, Response } from "express";
import { ListUrbanizedAreaService } from "../../services/urbanized-area/ListUrbanizedAreaService";

class ListUrbanizedAreaController {
  async handle(req: Request, res: Response) {
    const listUrbanizedAreaService = new ListUrbanizedAreaService();

    const result = await listUrbanizedAreaService.execute();

    return res.json(result);
  }
}

export { ListUrbanizedAreaController };
