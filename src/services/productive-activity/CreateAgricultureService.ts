import prismaClient from "../../prisma";

interface AgricultureRequest {
  data_colheita: string;
  producao_ano: number;
  irrigacao: boolean;
  destinacao_venda: number;
  area_cultivo: number;
  data_plantio: string;
  destinacao_casa: number;
  valor_comercializado: number;
  cultura: string;
  propriedade_id: number;
  visita_id?: number;
}

class CreateAgricultureService {
  async execute({
    data_colheita,
    producao_ano,
    irrigacao,
    destinacao_venda,
    area_cultivo,
    data_plantio,
    destinacao_casa,
    valor_comercializado,
    cultura,
    propriedade_id,
    visita_id,
  }: AgricultureRequest) {
    if (!data_colheita || !data_plantio || !cultura || !propriedade_id) {
      throw new Error("Dados obrigatórios não fornecidos");
    }

    const agricultura = await prismaClient.agriculturas.create({
      data: {
        data_colheita: new Date(data_colheita).toISOString(),
        producao_ano,
        irrigacao,
        destinacao_venda,
        area_cultivo,
        data_plantio: new Date(data_plantio).toISOString(),
        destinacao_casa,
        valor_comercializado,
        cultura,
        propriedade_id,
        visita_id,
      },
      select: {
        id: true,
        data_colheita: true,
        producao_ano: true,
        irrigacao: true,
        destinacao_venda: true,
        area_cultivo: true,
        data_plantio: true,
        destinacao_casa: true,
        valor_comercializado: true,
        cultura: true,
        propriedade_id: true,
        visita_id: true,
      },
    });
    return agricultura;
  }
}

export { CreateAgricultureService };
