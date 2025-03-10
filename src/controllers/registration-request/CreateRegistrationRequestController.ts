import { Request, Response } from "express";
import { CreateRegistrationRequestService } from "../../services/registration-request/CreateRegistrationRequestService";

class CreateRegistrationRequestController {
  async handle(req: Request, res: Response) {
    const name = String(req.body.name);
    const email = String(req.body.email);
    const password = String(req.body.password);
    const role = String(req.body.role);
    const status = String(req.body.status);

    const createRegistrationRequestService =
      new CreateRegistrationRequestService();

    const registrationRequest = await createRegistrationRequestService.execute({
      name,
      email,
      password,
      role,
      status,
    });

    return res.json(registrationRequest);
  }
}

export { CreateRegistrationRequestController };
