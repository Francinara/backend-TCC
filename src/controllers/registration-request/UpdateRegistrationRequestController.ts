import { Request, Response } from "express";
import { UpdateRegistrationRequestService } from "../../services/registration-request/UpdateRegistrationRequestService";

class UpdateRegistrationRequestController {
  async handle(req: Request, res: Response) {
    const user_id = Number(req.body.user_id);
    const status = String(req.body.status);

    const updateRegistrationRequestService =
      new UpdateRegistrationRequestService();

    const result = await updateRegistrationRequestService.execute({
      user_id,
      status,
    });

    return res.json(result);
  }
}
export { UpdateRegistrationRequestController };
