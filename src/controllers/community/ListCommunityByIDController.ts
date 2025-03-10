import { Request, Response } from "express";
import { ListCommunityByIDService } from "../../services/community/ListCommunityByIDService";

class ListCommunityByIDController {
  async handle(req: Request, res: Response) {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      throw new Error("Invalid or missing parameter");
    }

    const listCommunityByIDService = new ListCommunityByIDService();

    const community = await listCommunityByIDService.execute({ id });

    return res.json(community);
  }
}

export { ListCommunityByIDController };
