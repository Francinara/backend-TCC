import { Request, Response } from "express";
import { ListRegistrationRequestByStatusService } from "../../services/registration-request/ListRegistrationRequestByStatusService";

class ListRegistrationRequestByStatusController {
  async handle(req: Request, res: Response) {
    const status = String(req.query.status);

    const listRegistrationRequestByStatusService =
      new ListRegistrationRequestByStatusService();

    const result = await listRegistrationRequestByStatusService.execute({
      status,
    });

    return res.json(result);
  }
}

export { ListRegistrationRequestByStatusController };
