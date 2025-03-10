import { Request, Response } from "express";
import { CreateVisitService } from "../../services/visit/CreateVisitService";

class CreateVisitController {
  async handle(req: Request, res: Response) {
    const numero = Number(req.body.numero);
    const data = String(req.body.data);
    const tecnico_responsavel = String(req.body.tecnico_responsavel);
    const data_ultima_visita = String(req.body.data_ultima_visita);
    const diagnostico = String(req.body.diagnostico);
    const recomendacoes = String(req.body.recomendacoes);
    const finalidade_visita = String(req.body.finalidade_visita);
    const propriedade_id = Number(req.body.propriedade_id);

    if (
      !numero ||
      !data ||
      !tecnico_responsavel ||
      !data_ultima_visita ||
      !diagnostico ||
      !recomendacoes ||
      !finalidade_visita ||
      !propriedade_id
    ) {
      return res.status(400).json({ error: "Missing or invalid parameter" });
    }

    const createVisitService = new CreateVisitService();

    const visita = await createVisitService.execute({
      numero,
      data,
      tecnico_responsavel,
      data_ultima_visita,
      diagnostico,
      recomendacoes,
      finalidade_visita,
      propriedade_id,
    });

    return res.json(visita);
  }
}

export { CreateVisitController };
