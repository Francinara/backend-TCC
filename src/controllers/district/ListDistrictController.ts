import { Request, Response } from "express";
import { ListDistrictService } from "../../services/district/ListDistrictService";

class ListDistrictController {
  async handle(req: Request, res: Response) {
    const listDistrictService = new ListDistrictService();

    const districts = await listDistrictService.execute();

    res.json(districts);
  }
}

export { ListDistrictController };
