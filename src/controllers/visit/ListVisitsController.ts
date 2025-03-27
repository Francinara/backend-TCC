import { Request, Response } from "express";
import { ListVisitsService } from "../../services/visit/ListVisitsService";

class ListVisitsController {
  async handle(req: Request, res: Response) {
    const filters = {
      numero: req.query.numero ? String(req.query.numero) : undefined,
      data: req.query.data ? String(req.query.data) : undefined,
      tecnico_responsavel: req.query.tecnico_responsavel
        ? String(req.query.tecnico_responsavel)
        : undefined,
      data_ultima_visita: req.query.data_ultima_visita
        ? String(req.query.data_ultima_visita)
        : undefined,
      diagnostico: req.query.diagnostico
        ? String(req.query.diagnostico)
        : undefined,
      recomendacoes: req.query.recomendacoes
        ? String(req.query.recomendacoes)
        : undefined,
      finalidade_visita: req.query.finalidade_visita
        ? String(req.query.finalidade_visita)
        : undefined,
    };

    const listVisitsService = new ListVisitsService();
    const result = await listVisitsService.execute(filters);

    return res.json(result);
  }
}

export { ListVisitsController };
