import prismaClient from "../../prisma";

interface LivestockRequest {
  especie: string;
  quantidade: number;
  aptidao_corte: boolean;
  aptidao_leite: boolean;
  aptidao_postura: boolean;
  tipo_cricao_intensivo: boolean;
  tipo_cricao_semi_intensivo: boolean;
  tipo_cricao_extensivo: boolean;
  destinacao_casa: number;
  raca_predominante: string;
  valor_comercializacao: number;
  destinacao_venda: number;
  propriedade_id: number;
  visita_id?: number;
}

class CreateLivestockService {
  async execute({
    especie,
    quantidade,
    aptidao_corte,
    aptidao_leite,
    aptidao_postura,
    tipo_cricao_intensivo,
    tipo_cricao_semi_intensivo,
    tipo_cricao_extensivo,
    destinacao_casa,
    raca_predominante,
    valor_comercializacao,
    destinacao_venda,
    propriedade_id,
    visita_id,
  }: LivestockRequest) {
    if (especie == "") {
      throw new Error("Espécie inválida");
    }

    const livestock = await prismaClient.pecuarias.create({
      data: {
        especie,
        quantidade,
        aptidao_corte,
        aptidao_leite,
        aptidao_postura,
        tipo_cricao_intensivo,
        tipo_cricao_semi_intensivo,
        tipo_cricao_extensivo,
        destinacao_casa,
        raca_predominante,
        valor_comercializacao,
        destinacao_venda,
        propriedade_id,
        visita_id,
      },
      select: {
        id: true,
        especie: true,
        quantidade: true,
        aptidao_corte: true,
        aptidao_leite: true,
        aptidao_postura: true,
        tipo_cricao_intensivo: true,
        tipo_cricao_semi_intensivo: true,
        tipo_cricao_extensivo: true,
        destinacao_casa: true,
        raca_predominante: true,
        valor_comercializacao: true,
        destinacao_venda: true,
        propriedade_id: true,
        visita_id: true,
      },
    });
    return livestock;
  }
}

export { CreateLivestockService };
