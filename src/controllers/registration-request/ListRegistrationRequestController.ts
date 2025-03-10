import { Request, Response } from "express";
import { ListRegistrationRequestService } from "../../services/registration-request/ListRegistrationRequestService";

class ListRegistrationRequestController {
  async handle(req: Request, res: Response) {
    const listRegistrationRequestService = new ListRegistrationRequestService();

    const result = await listRegistrationRequestService.execute();

    return res.json(result);
  }
}

export { ListRegistrationRequestController };
