import { Geometry } from "wkx";
import prismaClient from "../../prisma";

interface PropriedadeRequest {
  nome_propriedade: string;
  lat: number;
  lng: number;
  beneficiario_id: number;
  car: boolean;
  n_recibo_car: string;
  area: number;
  comunidade: string;
  distrito: string;
  situacao_fundiaria: string;
  tipo_documento: string;
}

class CreatePropertyService {
  async execute({
    nome_propriedade,
    lat,
    lng,
    beneficiario_id,
    car,
    n_recibo_car,
    area,
    comunidade,
    distrito,
    situacao_fundiaria,
    tipo_documento,
  }: PropriedadeRequest) {
    try {
      const pointWkt = `POINT(${lng} ${lat})`;
      const pointGeom = Geometry.parse(pointWkt).toWkb();

      if (nome_propriedade == "") {
        throw new Error("Nome invalid");
      }

      const propriedade = await prismaClient.propriedades.create({
        data: {
          nome_propriedade: nome_propriedade,
          geom: pointGeom,
          beneficiario_id: beneficiario_id,
          car: car,
          n_recibo_car: n_recibo_car,
          area: area,
          comunidade: comunidade,
          distrito: distrito,
          situacao_fundiaria: situacao_fundiaria,
          tipo_documento: tipo_documento,
        },
        select: {
          id: true,
          nome_propriedade: true,
          beneficiario_id: true,
          n_recibo_car: true,
          area: true,
          comunidade: true,
          distrito: true,
          situacao_fundiaria: true,
          tipo_documento: true,
        },
      });
      return propriedade;
    } catch (error) {
      throw new Error(`Error creating property. Error: ${error}`);
    }
  }
}

export { CreatePropertyService };
