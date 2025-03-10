import prismaClient from "../../prisma";

interface AquacultureRequest {
  aptidao_corte: boolean;
  aptidao_reproducao: boolean;
  lamina_agua: string;
  quantidade: number;
  cultura: string;
  especie: string;
  valor_comercializacao: number;
  tipo_cricao_super_intensivo: boolean;
  tipo_cricao_intensivo: boolean;
  tipo_cricao_semi_intensivo: boolean;
  tipo_cricao_extensivo: boolean;
  destinacao_casa: number;
  destinacao_verda: number;
  propriedade_id: number;
  visita_id?: number;
}

class CreateAquacultureService {
  async execute({
    aptidao_corte,
    aptidao_reproducao,
    lamina_agua,
    quantidade,
    cultura,
    especie,
    valor_comercializacao,
    tipo_cricao_super_intensivo,
    tipo_cricao_intensivo,
    tipo_cricao_semi_intensivo,
    tipo_cricao_extensivo,
    destinacao_casa,
    destinacao_verda,
    propriedade_id,
    visita_id,
  }: AquacultureRequest) {
    if (!lamina_agua || !cultura || !especie) {
      throw new Error("Missing required fields");
    }

    const aquaculture = await prismaClient.aquiculturas.create({
      data: {
        aptidao_corte,
        aptidao_reproducao,
        lamina_agua,
        quantidade,
        cultura,
        especie,
        valor_comercializacao,
        tipo_cricao_super_intensivo,
        tipo_cricao_intensivo,
        tipo_cricao_semi_intensivo,
        tipo_cricao_extensivo,
        destinacao_casa,
        destinacao_verda,
        propriedade_id,
        visita_id,
      },
      select: {
        id: true,
        aptidao_corte: true,
        aptidao_reproducao: true,
        lamina_agua: true,
        quantidade: true,
        cultura: true,
        especie: true,
        valor_comercializacao: true,
        tipo_cricao_super_intensivo: true,
        tipo_cricao_intensivo: true,
        tipo_cricao_semi_intensivo: true,
        tipo_cricao_extensivo: true,
        destinacao_casa: true,
        destinacao_verda: true,
        propriedade_id: true,
        visita_id: true,
      },
    });

    return aquaculture;
  }
}

export { CreateAquacultureService };
