import prismaClient from "../../prisma";

interface OtherActivityRequest {
  tipo: string;
  descricao: string;
  propriedade_id: number;
  visita_id?: number;
}

class CreateOtherActivityService {
  async execute({
    tipo,
    descricao,
    propriedade_id,
    visita_id,
  }: OtherActivityRequest) {
    if (tipo == "" || descricao == "") {
      throw new Error("Tipo e Descrição são obrigatórios");
    }

    const otherActivity = await prismaClient.outrasAtividades.create({
      data: {
        tipo,
        descricao,
        propriedade_id,
        visita_id,
      },
      select: {
        id: true,
        tipo: true,
        descricao: true,
        propriedade_id: true,
        visita_id: true,
      },
    });

    return otherActivity;
  }
}

export { CreateOtherActivityService };
