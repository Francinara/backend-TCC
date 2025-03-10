import { Request, Response } from "express";
import { ListPropertyByAreaService } from "../../services/property/ListPropertyByAreaService";

class ListPropertyByAreaController {
  async handle(req: Request, res: Response) {
    const lng = Number(req.query.lng);
    const lat = Number(req.query.lat);
    const radius = Number(req.query.radius);

    if (isNaN(lng) || isNaN(lat) || isNaN(radius)) {
      throw new Error("Invalid or missing parameter");
    }

    const listPropertyByAreaService = new ListPropertyByAreaService();

    const properties = await listPropertyByAreaService.execute({
      lng,
      lat,
      radius,
    });

    return res.json(properties);
  }
}

export { ListPropertyByAreaController };
