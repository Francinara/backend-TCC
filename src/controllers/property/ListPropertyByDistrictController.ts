import { Request, Response } from "express";
import { ListPropertyByDistrictService } from "../../services/property/ListPropertyByDistrictService";

class ListPropertyByDistrictController {
  async handle(req: Request, res: Response) {
    const district_id = Number(req.query.district_id);

    if (isNaN(district_id)) {
      throw new Error("Invalid or missing parameter");
    }

    const listPropertyByDistrictService = new ListPropertyByDistrictService();

    const properties = await listPropertyByDistrictService.execute({
      district_id,
    });

    return res.json(properties);
  }
}

export { ListPropertyByDistrictController };
