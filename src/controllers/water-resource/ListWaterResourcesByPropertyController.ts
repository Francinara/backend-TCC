import { Request, Response } from "express";
import { ListWaterResourcesByPropertyService } from "../../services/water-resource/ListWaterResourcesByPropertyService";

class ListWaterResourcesByPropertyController {
  async handle(req: Request, res: Response) {
    const property_id = Number(req.params.property_id);

    if (isNaN(property_id)) {
      throw new Error("Invalid or missing parameter");
    }
    const listWaterResourcesByPropertyService =
      new ListWaterResourcesByPropertyService();

    const waterResources = await listWaterResourcesByPropertyService.execute({
      property_id,
    });

    return res.json(waterResources);
  }
}

export { ListWaterResourcesByPropertyController };
