import { Request, Response } from "express";
import { ListPropertyService } from "../../services/property/ListPropertyService";

class ListPropertyController {
  async handle(req: Request, res: Response) {
    const listPropertyService = new ListPropertyService();

    const properties = await listPropertyService.execute();

    return res.json(properties);
  }
}
export { ListPropertyController };
