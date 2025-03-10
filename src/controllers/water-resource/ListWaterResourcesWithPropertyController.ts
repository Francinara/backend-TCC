import { Request, Response } from "express";
import { ListWaterResourcesWithPropertyService } from "../../services/water-resource/ListWaterResourcesWithPropertyService";

class ListWaterResourcesWithPropertyController {
  async handle(req: Request, res: Response) {
    const listWaterResourcesWithPropertyService =
      new ListWaterResourcesWithPropertyService();

    const waterResources =
      await listWaterResourcesWithPropertyService.execute();

    return res.json(waterResources);
  }
}

export { ListWaterResourcesWithPropertyController };
