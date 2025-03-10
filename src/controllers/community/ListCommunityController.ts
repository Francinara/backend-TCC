import { Request, Response } from "express";
import { ListCommunityService } from "../../services/community/ListCommunityService";

class ListCommunityController {
  async handle(req: Request, res: Response) {
    const listCommunityService = new ListCommunityService();

    const communities = await listCommunityService.execute();

    return res.json(communities);
  }
}

export { ListCommunityController };
