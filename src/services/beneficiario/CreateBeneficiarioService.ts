import prismaClient from "../../prisma";

interface BeneficiarioRequest {
  nome_completo: string;
  apelido: string;
  cpf: string;
  sexo: string;
  estado_civil: string;
  nome_mae: string;
  nome_conjugue?: string;
  naturalidade: string;
  n_membro_familia: number;
  renda_familiar: number;
  data_nascimento: string;
  dap?: string;
  data_dap?: string;
  tipo_dap?: string;
  programa_governamental?: string;
  outro_programa_governamental?: string;
  nis: string;
  contato: string;
  categoria_beneficiario: string;
  associado: boolean;
  associacao?: string;
  credito_rural?: boolean;
  tipo_credito_rural?: string;
}

class CreateBeneficiarioService {
  async execute({
    nome_completo,
    apelido,
    cpf,
    sexo,
    estado_civil,
    nome_mae,
    nome_conjugue,
    naturalidade,
    n_membro_familia,
    renda_familiar,
    data_nascimento,
    dap,
    data_dap,
    tipo_dap,
    programa_governamental,
    outro_programa_governamental,
    nis,
    contato,
    categoria_beneficiario,
    associado,
    associacao,
    credito_rural,
    tipo_credito_rural,
  }: BeneficiarioRequest) {
    if (nome_completo == "") {
      throw new Error("Nome invalid");
    }

    const beneficiario = await prismaClient.beneficiarios.create({
      data: {
        nome_completo,
        apelido,
        cpf,
        sexo,
        estado_civil,
        nome_mae,
        nome_conjugue,
        naturalidade,
        n_membro_familia,
        renda_familiar,
        data_nascimento: new Date(data_nascimento).toISOString(),
        dap,
        data_dap: new Date(data_dap || "").toISOString(),
        tipo_dap,
        programa_governamental,
        outro_programa_governamental,
        nis,
        contato,
        categoria_beneficiario,
        associado,
        associacao,
        credito_rural,
        tipo_credito_rural,
      },
      select: {
        id: true,
        nome_completo: true,
        apelido: true,
        cpf: true,
        sexo: true,
        estado_civil: true,
        nome_mae: true,
        nome_conjugue: true,
        naturalidade: true,
        n_membro_familia: true,
        renda_familiar: true,
        data_nascimento: true,
        dap: true,
        data_dap: true,
        tipo_dap: true,
        programa_governamental: true,
        outro_programa_governamental: true,
        nis: true,
        contato: true,
        categoria_beneficiario: true,
        associado: true,
        associacao: true,
        credito_rural: true,
        tipo_credito_rural: true,
      },
    });
    return beneficiario;
  }
}

export { CreateBeneficiarioService };
