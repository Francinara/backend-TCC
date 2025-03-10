import { Request, Response } from "express";
import { ListProductiveActivityByActivityService } from "../../services/productive-activity/ListProductiveActivityByActivityService";

class ListProductiveActivityByActivityController {
  async handle(req: Request, res: Response) {
    const activity = Number(req.query.activity);

    if (isNaN(activity)) {
      throw new Error("Invalid or missing parameter");
    }

    const listProductiveActivityByActivityService =
      new ListProductiveActivityByActivityService();

    const result = await listProductiveActivityByActivityService.execute({
      activity,
    });

    return res.json(result);
  }
}

export { ListProductiveActivityByActivityController };
