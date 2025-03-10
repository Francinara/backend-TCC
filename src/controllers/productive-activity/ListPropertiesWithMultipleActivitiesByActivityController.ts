import { Request, Response } from "express";
import { ListPropertiesWithMultipleActivitiesByActivityService } from "../../services/productive-activity/ListPropertiesWithMultipleActivitiesByActivityService";

class ListPropertiesWithMultipleActivitiesByActivityController {
  async handle(req: Request, res: Response) {
    const activity = Number(req.query.activity);

    if (isNaN(activity)) {
      throw new Error("Invalid or missing parameter");
    }

    const listPropertiesWithMultipleActivitiesByActivityService =
      new ListPropertiesWithMultipleActivitiesByActivityService();

    const result =
      await listPropertiesWithMultipleActivitiesByActivityService.execute({
        activity,
      });

    return res.json(result);
  }
}

export { ListPropertiesWithMultipleActivitiesByActivityController };
