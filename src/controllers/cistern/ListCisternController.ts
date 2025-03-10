import { Request, Response } from "express";
import { ListCisternService } from "../../services/cistern/ListCisternService";

class ListCisternController {
  async handle(req: Request, res: Response) {
    const listCisternService = new ListCisternService();

    const result = await listCisternService.execute();

    return res.json(result);
  }
}

export { ListCisternController };
