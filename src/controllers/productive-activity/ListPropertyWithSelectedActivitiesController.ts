import { Request, Response } from "express";
import { ListPropertyWithSelectedActivitiesService } from "../../services/productive-activity/ListPropertyWithSelectedActivitiesService";

class ListPropertyWithSelectedActivitiesController {
  async handle(req: Request, res: Response) {
    const activities = String(req.query.activities);

    if (!activities) {
      throw new Error("Invalid or missing parameter");
    }

    const listPropertyWithSelectedActivitiesService =
      new ListPropertyWithSelectedActivitiesService();

    const result = await listPropertyWithSelectedActivitiesService.execute({
      activities,
    });

    return res.json(result);
  }
}

export { ListPropertyWithSelectedActivitiesController };
