import { Request, Response } from "express";
import { ListSpringService } from "../../services/spring/ListSpringService";

class ListSpringController {
  async handle(req: Request, res: Response) {
    const listSpringService = new ListSpringService();

    const result = await listSpringService.execute();

    return res.json(result);
  }
}

export { ListSpringController };
