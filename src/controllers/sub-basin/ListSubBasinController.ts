import { Request, Response } from "express";
import { ListSubBasinService } from "../../services/sub-basin/ListSubBasinService";

class listSubBasinController {
  async handle(req: Request, res: Response) {
    const listSubBasinService = new ListSubBasinService();

    const result = await listSubBasinService.execute();

    return res.json(result);
  }
}

export { listSubBasinController };
