import prismaClient from "../../prisma";
import { activityMap } from "../../settings/constants";

interface ActivityFilters {
  activity: number;
  distrito?: string;
  data_inicio?: string;
  data_fim?: string;
  // Agriculture
  cultura?: string;
  data_plantio_inicio?: string;
  data_plantio_fim?: string;
  data_colheita_inicio?: string;
  data_colheita_fim?: string;
  producao_ano_min?: number;
  producao_ano_max?: number;
  area_cultivo_min?: number;
  area_cultivo_max?: number;
  irrigacao?: boolean;
  valor_comercializado_min?: number;
  valor_comercializado_max?: number;
  destinacao_venda_min?: number;
  destinacao_venda_max?: number;
  destinacao_casa_min?: number;
  destinacao_casa_max?: number;
  // Aquaculture
  especie?: string;
  quantidade_min?: number;
  quantidade_max?: number;
  lamina_agua?: string;
  aptidao_corte?: boolean;
  aptidao_reproducao?: boolean;
  valor_comercializacao_min?: number;
  valor_comercializacao_max?: number;
  destinacao_verda_min?: number;
  destinacao_verda_max?: number;
  // Beekeeping
  n_colmeias_min?: number;
  n_colmeias_max?: number;
  destinacao_mel?: string;
  com_ferrao?: boolean;
  sem_ferrao?: boolean;
  // Livestock
  raca_predominante?: string;
  aptidao_leite?: boolean;
  aptidao_postura?: boolean;
  // Craftsmanship
  produto?: string;
  destinacao_valor?: string;
  // Other Activities
  tipo?: string;
  descricao?: string;
}

class ListProductiveActivityByActivityService {
  async execute(filters: ActivityFilters) {
    const { activity, ...restFilters } = filters;
    const tableName = activityMap[activity].name;

    try {
      let query = `
        SELECT 
          ${tableName}.*, visitas.data, propriedades.distrito
        FROM ${tableName}
        INNER JOIN visitas 
          ON ${tableName}.visita_id = visitas.numero
        INNER JOIN propriedades 
          ON propriedades.id = ${tableName}.propriedade_id
      `;

      const whereConditions: string[] = [];
      const params: (string | number | boolean)[] = [];

      // Filtros comuns
      if (restFilters.distrito) {
        whereConditions.push(
          `propriedades.distrito ILIKE $${params.length + 1}`
        );
        params.push(`%${restFilters.distrito}%`);
      }
      if (restFilters.data_inicio) {
        whereConditions.push(`visitas.data >= $${params.length + 1}`);
        params.push(restFilters.data_inicio);
      }
      if (restFilters.data_fim) {
        whereConditions.push(`visitas.data <= $${params.length + 1}`);
        params.push(restFilters.data_fim);
      }

      // Filtros específicos por tabela
      if (tableName === "agriculture") {
        if (restFilters.cultura) {
          whereConditions.push(`cultura ILIKE $${params.length + 1}`);
          params.push(`%${restFilters.cultura}%`);
        }
        if (restFilters.data_plantio_inicio) {
          whereConditions.push(`data_plantio >= $${params.length + 1}`);
          params.push(restFilters.data_plantio_inicio);
        }
        if (restFilters.data_plantio_fim) {
          whereConditions.push(`data_plantio <= $${params.length + 1}`);
          params.push(restFilters.data_plantio_fim);
        }
        if (restFilters.data_colheita_inicio) {
          whereConditions.push(`data_colheita >= $${params.length + 1}`);
          params.push(restFilters.data_colheita_inicio);
        }
        if (restFilters.data_colheita_fim) {
          whereConditions.push(`data_colheita <= $${params.length + 1}`);
          params.push(restFilters.data_colheita_fim);
        }
        if (restFilters.producao_ano_min !== undefined) {
          whereConditions.push(`producao_ano >= $${params.length + 1}`);
          params.push(restFilters.producao_ano_min);
        }
        if (restFilters.producao_ano_max !== undefined) {
          whereConditions.push(`producao_ano <= $${params.length + 1}`);
          params.push(restFilters.producao_ano_max);
        }
        if (restFilters.area_cultivo_min !== undefined) {
          whereConditions.push(`area_cultivo >= $${params.length + 1}`);
          params.push(restFilters.area_cultivo_min);
        }
        if (restFilters.area_cultivo_max !== undefined) {
          whereConditions.push(`area_cultivo <= $${params.length + 1}`);
          params.push(restFilters.area_cultivo_max);
        }
        if (restFilters.irrigacao !== undefined) {
          whereConditions.push(`irrigacao = $${params.length + 1}`);
          params.push(restFilters.irrigacao);
        }
        if (restFilters.valor_comercializado_min !== undefined) {
          whereConditions.push(`valor_comercializado >= $${params.length + 1}`);
          params.push(restFilters.valor_comercializado_min);
        }
        if (restFilters.valor_comercializado_max !== undefined) {
          whereConditions.push(`valor_comercializado <= $${params.length + 1}`);
          params.push(restFilters.valor_comercializado_max);
        }
        if (restFilters.destinacao_venda_min !== undefined) {
          whereConditions.push(`destinacao_venda >= $${params.length + 1}`);
          params.push(restFilters.destinacao_venda_min);
        }
        if (restFilters.destinacao_venda_max !== undefined) {
          whereConditions.push(`destinacao_venda <= $${params.length + 1}`);
          params.push(restFilters.destinacao_venda_max);
        }
        if (restFilters.destinacao_casa_min !== undefined) {
          whereConditions.push(`destinacao_casa >= $${params.length + 1}`);
          params.push(restFilters.destinacao_casa_min);
        }
        if (restFilters.destinacao_casa_max !== undefined) {
          whereConditions.push(`destinacao_casa <= $${params.length + 1}`);
          params.push(restFilters.destinacao_casa_max);
        }
      } else if (tableName === "aquaculture") {
        if (restFilters.especie) {
          whereConditions.push(`especie ILIKE $${params.length + 1}`);
          params.push(`%${restFilters.especie}%`);
        }
        if (restFilters.quantidade_min !== undefined) {
          whereConditions.push(`quantidade >= $${params.length + 1}`);
          params.push(restFilters.quantidade_min);
        }
        if (restFilters.quantidade_max !== undefined) {
          whereConditions.push(`quantidade <= $${params.length + 1}`);
          params.push(restFilters.quantidade_max);
        }
        if (restFilters.lamina_agua) {
          whereConditions.push(`lamina_agua ILIKE $${params.length + 1}`);
          params.push(`%${restFilters.lamina_agua}%`);
        }
        if (restFilters.aptidao_corte !== undefined) {
          whereConditions.push(`aptidao_corte = $${params.length + 1}`);
          params.push(restFilters.aptidao_corte);
        }
        if (restFilters.aptidao_reproducao !== undefined) {
          whereConditions.push(`aptidao_reproducao = $${params.length + 1}`);
          params.push(restFilters.aptidao_reproducao);
        }
        if (restFilters.valor_comercializacao_min !== undefined) {
          whereConditions.push(
            `valor_comercializacao >= $${params.length + 1}`
          );
          params.push(restFilters.valor_comercializacao_min);
        }
        if (restFilters.valor_comercializacao_max !== undefined) {
          whereConditions.push(
            `valor_comercializacao <= $${params.length + 1}`
          );
          params.push(restFilters.valor_comercializacao_max);
        }
        if (restFilters.destinacao_verda_min !== undefined) {
          whereConditions.push(`destinacao_verda >= $${params.length + 1}`);
          params.push(restFilters.destinacao_verda_min);
        }
        if (restFilters.destinacao_verda_max !== undefined) {
          whereConditions.push(`destinacao_verda <= $${params.length + 1}`);
          params.push(restFilters.destinacao_verda_max);
        }
        if (restFilters.destinacao_casa_min !== undefined) {
          whereConditions.push(`destinacao_casa >= $${params.length + 1}`);
          params.push(restFilters.destinacao_casa_min);
        }
        if (restFilters.destinacao_casa_max !== undefined) {
          whereConditions.push(`destinacao_casa <= $${params.length + 1}`);
          params.push(restFilters.destinacao_casa_max);
        }
      } else if (tableName === "beekeeping") {
        if (restFilters.n_colmeias_min !== undefined) {
          whereConditions.push(`n_colmeias >= $${params.length + 1}`);
          params.push(restFilters.n_colmeias_min);
        }
        if (restFilters.n_colmeias_max !== undefined) {
          whereConditions.push(`n_colmeias <= $${params.length + 1}`);
          params.push(restFilters.n_colmeias_max);
        }
        if (restFilters.destinacao_mel) {
          whereConditions.push(`destinacao_mel ILIKE $${params.length + 1}`);
          params.push(`%${restFilters.destinacao_mel}%`);
        }
        if (restFilters.com_ferrao !== undefined) {
          whereConditions.push(`com_ferrao = $${params.length + 1}`);
          params.push(restFilters.com_ferrao);
        }
        if (restFilters.sem_ferrao !== undefined) {
          whereConditions.push(`sem_ferrao = $${params.length + 1}`);
          params.push(restFilters.sem_ferrao);
        }
      } else if (tableName === "livestock") {
        if (restFilters.especie) {
          whereConditions.push(`especie ILIKE $${params.length + 1}`);
          params.push(`%${restFilters.especie}%`);
        }
        if (restFilters.quantidade_min !== undefined) {
          whereConditions.push(`quantidade >= $${params.length + 1}`);
          params.push(restFilters.quantidade_min);
        }
        if (restFilters.quantidade_max !== undefined) {
          whereConditions.push(`quantidade <= $${params.length + 1}`);
          params.push(restFilters.quantidade_max);
        }
        if (restFilters.aptidao_corte !== undefined) {
          whereConditions.push(`aptidao_corte = $${params.length + 1}`);
          params.push(restFilters.aptidao_corte);
        }
        if (restFilters.aptidao_leite !== undefined) {
          whereConditions.push(`aptidao_leite = $${params.length + 1}`);
          params.push(restFilters.aptidao_leite);
        }
        if (restFilters.aptidao_postura !== undefined) {
          whereConditions.push(`aptidao_postura = $${params.length + 1}`);
          params.push(restFilters.aptidao_postura);
        }
        if (restFilters.raca_predominante) {
          whereConditions.push(`raca_predominante ILIKE $${params.length + 1}`);
          params.push(`%${restFilters.raca_predominante}%`);
        }
        if (restFilters.valor_comercializacao_min !== undefined) {
          whereConditions.push(
            `valor_comercializacao >= $${params.length + 1}`
          );
          params.push(restFilters.valor_comercializacao_min);
        }
        if (restFilters.valor_comercializacao_max !== undefined) {
          whereConditions.push(
            `valor_comercializacao <= $${params.length + 1}`
          );
          params.push(restFilters.valor_comercializacao_max);
        }
        if (restFilters.destinacao_venda_min !== undefined) {
          whereConditions.push(`destinacao_venda >= $${params.length + 1}`);
          params.push(restFilters.destinacao_venda_min);
        }
        if (restFilters.destinacao_venda_max !== undefined) {
          whereConditions.push(`destinacao_venda <= $${params.length + 1}`);
          params.push(restFilters.destinacao_venda_max);
        }
        if (restFilters.destinacao_casa_min !== undefined) {
          whereConditions.push(`destinacao_casa >= $${params.length + 1}`);
          params.push(restFilters.destinacao_casa_min);
        }
        if (restFilters.destinacao_casa_max !== undefined) {
          whereConditions.push(`destinacao_casa <= $${params.length + 1}`);
          params.push(restFilters.destinacao_casa_max);
        }
      } else if (tableName === "craftsmanship") {
        if (restFilters.produto) {
          whereConditions.push(`produto ILIKE $${params.length + 1}`);
          params.push(`%${restFilters.produto}%`);
        }
        if (restFilters.destinacao_valor) {
          whereConditions.push(`destinacao_valor ILIKE $${params.length + 1}`);
          params.push(`%${restFilters.destinacao_valor}%`);
        }
      } else if (tableName === "otherActivities") {
        if (restFilters.tipo) {
          whereConditions.push(`tipo ILIKE $${params.length + 1}`);
          params.push(`%${restFilters.tipo}%`);
        }
        if (restFilters.descricao) {
          whereConditions.push(`descricao ILIKE $${params.length + 1}`);
          params.push(`%${restFilters.descricao}%`);
        }
      }

      if (whereConditions.length > 0) {
        query += ` WHERE ${whereConditions.join(" AND ")}`;
      }

      query += ` ORDER BY visitas.data DESC`;

      const result = await prismaClient.$queryRawUnsafe(query, ...params);

      return result;
    } catch (error) {
      throw new Error(
        `Error fetching productive activity by activity. Error: ${error}`
      );
    }
  }
}

export { ListProductiveActivityByActivityService };
