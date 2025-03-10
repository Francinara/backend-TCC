import { Request, Response } from "express";
import { ListProtectionLayerService } from "../../services/protection-layer/ListProtectionLayerService";

class ListProtectionLayerController {
  async handle(req: Request, res: Response) {
    const listProtectionLayerService = new ListProtectionLayerService();

    const result = await listProtectionLayerService.execute();

    return res.json(result);
  }
}

export { ListProtectionLayerController };
