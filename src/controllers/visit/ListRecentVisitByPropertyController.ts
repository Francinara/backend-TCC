import { Request, Response } from "express";
import { ListRecentVisitByPropertyService } from "../../services/visit/ListRecentVisitByPropertyService";

class ListRecentVisitByPropertyController {
  async handle(req: Request, res: Response) {
    const property_id = Number(req.params.property_id);

    if (isNaN(property_id)) {
      throw new Error("Invalid or missing parameter");
    }
    const listRecentVisitByPropertyService =
      new ListRecentVisitByPropertyService();

    const result = await listRecentVisitByPropertyService.execute({
      property_id,
    });

    return res.json(result);
  }
}

export { ListRecentVisitByPropertyController };
