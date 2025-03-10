import { Request, Response } from "express";
import { ListRegistrationRequestByDateService } from "../../services/registration-request/ListRegistrationRequestByDateService";

class ListRegistrationRequestByDateController {
  async handle(req: Request, res: Response) {
    const requestDate = new Date(String(req.query.requestDate));

    const listRegistrationRequestByDateService =
      new ListRegistrationRequestByDateService();

    const result = await listRegistrationRequestByDateService.execute({
      requestDate,
    });

    return res.json(result);
  }
}

export { ListRegistrationRequestByDateController };
