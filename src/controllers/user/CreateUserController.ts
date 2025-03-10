import { Request, Response } from "express";
import { CreateUSerService } from "../../services/user/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const name = String(req.body.name);
    const email = String(req.body.email);
    const password = String(req.body.password);
    const role = String(req.body.role);
    const active = Boolean(req.body.active);
    const createUserService = new CreateUSerService();

    const user = await createUserService.execute({
      name,
      email,
      password,
      role,
      active,
    });

    return res.json(user);
  }
}
export { CreateUserController };
