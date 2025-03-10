import { Request, Response } from "express";
import { ListProductiveActivityByPropertyService } from "../../services/productive-activity/ListProductiveActivityByPropertyService";

class ListProductiveActivityByPropertyController {
  async handle(req: Request, res: Response) {
    const activity = Number(req.query.activity);
    const property_id = Number(req.params.property_id);

    if (isNaN(activity) || isNaN(property_id)) {
      throw new Error("Invalid or missing parameter");
    }

    const listProductiveActivityByPropertyService =
      new ListProductiveActivityByPropertyService();

    const result = await listProductiveActivityByPropertyService.execute({
      activity,
      property_id,
    });

    return res.json(result);
  }
}

export { ListProductiveActivityByPropertyController };
