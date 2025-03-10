import prismaClient from "../../prisma";

interface CraftsmanshipRequest {
  produto: string;
  destinacao_valor: string;
  propriedade_id: number;
  visita_id?: number;
}

class CreateCraftsmanshipService {
  async execute({
    produto,
    destinacao_valor,
    propriedade_id,
    visita_id,
  }: CraftsmanshipRequest) {
    if (!propriedade_id) {
      throw new Error("Propriedade inválida");
    }

    const craftsmanship = await prismaClient.artesanatos.create({
      data: {
        produto,
        destinacao_valor,
        propriedade_id,
        visita_id,
      },
      select: {
        id: true,
        produto: true,
        destinacao_valor: true,
        propriedade_id: true,
        visita_id: true,
      },
    });

    return craftsmanship;
  }
}

export { CreateCraftsmanshipService };
