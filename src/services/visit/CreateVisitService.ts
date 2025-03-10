import prismaClient from "../../prisma";

interface VisitaRequest {
  numero: number;
  data: string;
  tecnico_responsavel: string;
  data_ultima_visita: string;
  diagnostico: string;
  recomendacoes: string;
  finalidade_visita: string;
  propriedade_id: number;
}

class CreateVisitService {
  async execute({
    numero,
    data,
    tecnico_responsavel,
    data_ultima_visita,
    diagnostico,
    recomendacoes,
    finalidade_visita,
    propriedade_id,
  }: VisitaRequest) {
    if (numero == null) {
      throw new Error("Número inválido");
    }

    const visita = await prismaClient.visitas.create({
      data: {
        numero,
        data: new Date(data).toISOString(),
        tecnico_responsavel,
        data_ultima_visita: new Date(data_ultima_visita).toISOString(),
        diagnostico,
        recomendacoes,
        finalidade_visita,
        propriedade_id,
      },
      select: {
        numero: true,
        data: true,
        tecnico_responsavel: true,
        data_ultima_visita: true,
        diagnostico: true,
        recomendacoes: true,
        finalidade_visita: true,
        propriedade_id: true,
      },
    });
    return visita;
  }
}

export { CreateVisitService };
