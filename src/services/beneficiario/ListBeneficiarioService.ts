import prismaClient from "../../prisma";

class ListBeneficiarioService {
  async execute() {
    const beneficiario = await prismaClient.beneficiarios.findMany();

    return beneficiario;
  }
}

export { ListBeneficiarioService };
