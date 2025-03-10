import prismaClient from "../../prisma";

interface BeekeepingRequest {
  n_colmeias: number;
  destinacao_mel: string;
  tipo_criacao: boolean;
  tipo_extrativismo: boolean;
  propriedade_id: number;
  visita_id?: number;
  com_ferrao: boolean;
  sem_ferrao: boolean;
}

class CreateBeekeepingService {
  async execute({
    n_colmeias,
    destinacao_mel,
    tipo_criacao,
    tipo_extrativismo,
    propriedade_id,
    visita_id,
    com_ferrao,
    sem_ferrao,
  }: BeekeepingRequest) {
    if (n_colmeias <= 0) {
      throw new Error("Número de colmeias inválido");
    }

    const beekeeping = await prismaClient.apiculturas.create({
      data: {
        n_colmeias,
        destinacao_mel,
        tipo_criacao,
        tipo_extrativismo,
        propriedade_id,
        visita_id,
        com_ferrao,
        sem_ferrao,
      },
      select: {
        id: true,
        n_colmeias: true,
        destinacao_mel: true,
        tipo_criacao: true,
        tipo_extrativismo: true,
        propriedade_id: true,
        visita_id: true,
        com_ferrao: true,
        sem_ferrao: true,
      },
    });
    return beekeeping;
  }
}

export { CreateBeekeepingService };
