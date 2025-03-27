import prismaClient from "../../prisma";

interface VisitFilters {
  numero?: string;
  data?: string;
  data_inicio?: string;
  data_fim?: string;
  tecnico_responsavel?: string;
  data_ultima_visita?: string;
  data_ultima_visita_inicio?: string;
  data_ultima_visita_fim?: string;
  diagnostico?: string;
  recomendacoes?: string;
  finalidade_visita?: string;
}

class ListVisitsService {
  async execute(filters: VisitFilters) {
    try {
      const result = await prismaClient.visitas.findMany({
        where: {
          ...(filters.numero && {
            numero: {
              equals: parseInt(filters.numero, 10),
            },
          }),
          ...(filters.data_inicio || filters.data_fim
            ? {
                data: {
                  ...(filters.data_inicio && {
                    gte: new Date(filters.data_inicio),
                  }),
                  ...(filters.data_fim && { lte: new Date(filters.data_fim) }),
                },
              }
            : filters.data
            ? {
                data: {
                  equals: new Date(filters.data),
                },
              }
            : {}),
          ...(filters.tecnico_responsavel && {
            tecnico_responsavel: {
              contains: filters.tecnico_responsavel,
              mode: "insensitive",
            },
          }),
          ...(filters.data_ultima_visita_inicio ||
          filters.data_ultima_visita_fim
            ? {
                data_ultima_visita: {
                  ...(filters.data_ultima_visita_inicio && {
                    gte: new Date(filters.data_ultima_visita_inicio),
                  }),
                  ...(filters.data_ultima_visita_fim && {
                    lte: new Date(filters.data_ultima_visita_fim),
                  }),
                },
              }
            : filters.data_ultima_visita
            ? {
                data_ultima_visita: {
                  equals: new Date(filters.data_ultima_visita),
                },
              }
            : {}),
          ...(filters.diagnostico && {
            diagnostico: {
              contains: filters.diagnostico,
              mode: "insensitive",
            },
          }),
          ...(filters.recomendacoes && {
            recomendacoes: {
              contains: filters.recomendacoes,
              mode: "insensitive",
            },
          }),
          ...(filters.finalidade_visita && {
            finalidade_visita: {
              contains: filters.finalidade_visita,
              mode: "insensitive",
            },
          }),
        },
        orderBy: {
          numero: "asc",
        },
      });

      return result;
    } catch (error) {
      throw new Error(`Error fetching visits. Error: ${error}`);
    }
  }
}

export { ListVisitsService };
