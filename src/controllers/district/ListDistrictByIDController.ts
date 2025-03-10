import { Request, Response } from "express";
import { ListDistrictByIDService } from "../../services/district/ListDistrictByIDService";

class ListDistrictByIDController {
  async handle(req: Request, res: Response) {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      throw new Error("Invalid or missing parameter");
    }
    const listDistrictByIDService = new ListDistrictByIDService();

    const district = await listDistrictByIDService.execute({ id });

    return res.json(district);
  }
}

export { ListDistrictByIDController };
