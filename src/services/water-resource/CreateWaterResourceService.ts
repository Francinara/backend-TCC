import prismaClient from "../../prisma";

interface WaterResourceRequest {
  propriedade_id: number;
  tipo_cisterna: string | null;
  capacidade_cisterna: number | null;
  fornecedor_carro_pipa: string | null;
  quantidade_mes_litro: number | null;
  propriedade_poco: string | null;
  qualidade_poco: string | null;
  bomba_poco: boolean | null;
  vazao_poco: number | null;
  propriedade_poco_amazonas: string | null;
  qualidade_poco_amazonas: string | null;
  bomba_poco_amazonas: boolean | null;
  vazao_poco_amazonas: number | null;
  propriedade_acude: string | null;
  capacidade_acude: number | null;
  capacidade_barragem: number | null;
  propriedade_barragem: string | null;
  n_banheiros: number | null;
  fossa: boolean | null;
  outros_banheiros: string | null;
}

class CreateWaterResourceService {
  async execute({
    propriedade_id,
    tipo_cisterna,
    capacidade_cisterna,
    fornecedor_carro_pipa,
    quantidade_mes_litro,
    propriedade_poco,
    qualidade_poco,
    bomba_poco,
    vazao_poco,
    propriedade_poco_amazonas,
    qualidade_poco_amazonas,
    bomba_poco_amazonas,
    vazao_poco_amazonas,
    propriedade_acude,
    capacidade_acude,
    capacidade_barragem,
    propriedade_barragem,
    n_banheiros,
    fossa,
    outros_banheiros,
  }: WaterResourceRequest) {
    if (!propriedade_id) {
      throw new Error("Propriedade ID inválido");
    }

    const poco = await prismaClient.pocos.create({
      data: {
        propriedade_poco,
        qualidade: qualidade_poco,
        bomba: bomba_poco,
        vazao: vazao_poco,
      },
      select: {
        id: true,
      },
    });
    const poco_amazonas = await prismaClient.pocosAmazonas.create({
      data: {
        propriedade: propriedade_poco_amazonas,
        qualidade: qualidade_poco_amazonas,
        bomba: bomba_poco_amazonas,
        vazao: vazao_poco_amazonas,
      },
      select: {
        id: true,
      },
    });
    const cisterna = await prismaClient.cisternas.create({
      data: {
        tipo_cisterna: tipo_cisterna,
        capacidade_armazenamento: capacidade_cisterna,
      },
      select: {
        id: true,
      },
    });

    const carro_pipa = await prismaClient.carrosPipa.create({
      data: {
        fornecedor_carro_pipa,
        quantidade_mes_litro,
      },
      select: {
        id: true,
      },
    });
    const acude = await prismaClient.acudes.create({
      data: {
        propriedade: propriedade_acude,
        capacidade_armazenamento: capacidade_acude,
      },
      select: {
        id: true,
      },
    });
    const barragem = await prismaClient.barragens.create({
      data: {
        propriedade: propriedade_barragem,
        capacidade_armazenamento: capacidade_barragem,
      },
      select: {
        id: true,
      },
    });

    const banheiro = await prismaClient.banheiros.create({
      data: {
        n_banheiros,
        fossa,
        outros: outros_banheiros,
      },
      select: {
        id: true,
      },
    });

    const waterResource = await prismaClient.recursosHidricos.create({
      data: {
        propriedade_id,
        carro_pipa_id: carro_pipa.id,
        poco_id: poco.id,
        poco_amazonas_id: poco_amazonas.id,
        acude_id: acude.id,
        barragem_id: barragem.id,
        banheiro_id: banheiro.id,
        cisternas_id: cisterna.id,
      },
      select: {
        id: true,
        propriedade_id: true,
        carro_pipa_id: true,
        poco_id: true,
        poco_amazonas_id: true,
        acude_id: true,
        barragem_id: true,
        banheiro_id: true,
        cisternas_id: true,
      },
    });

    return waterResource;
  }
}

export { CreateWaterResourceService };
