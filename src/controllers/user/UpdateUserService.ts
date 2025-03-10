import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/UpdateUserService";

class UpdateUserController {
  async handle(req: Request, res: Response) {
    const user_id = Number(req.body.user_id);
    const active = Boolean(req.body.active);

    const updateUserService = new UpdateUserService();

    const user = await updateUserService.execute({
      user_id,
      active,
    });

    return res.json(user);
  }
}
export { UpdateUserController };
