"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListVisitsService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListVisitsService {
    execute(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield prisma_1.default.visitas.findMany({
                    where: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (filters.numero && {
                        numero: {
                            equals: parseInt(filters.numero, 10),
                        },
                    })), (filters.data_inicio || filters.data_fim
                        ? {
                            data: Object.assign(Object.assign({}, (filters.data_inicio && {
                                gte: new Date(filters.data_inicio),
                            })), (filters.data_fim && { lte: new Date(filters.data_fim) })),
                        }
                        : filters.data
                            ? {
                                data: {
                                    equals: new Date(filters.data),
                                },
                            }
                            : {})), (filters.tecnico_responsavel && {
                        tecnico_responsavel: {
                            contains: filters.tecnico_responsavel,
                            mode: "insensitive",
                        },
                    })), (filters.data_ultima_visita_inicio ||
                        filters.data_ultima_visita_fim
                        ? {
                            data_ultima_visita: Object.assign(Object.assign({}, (filters.data_ultima_visita_inicio && {
                                gte: new Date(filters.data_ultima_visita_inicio),
                            })), (filters.data_ultima_visita_fim && {
                                lte: new Date(filters.data_ultima_visita_fim),
                            })),
                        }
                        : filters.data_ultima_visita
                            ? {
                                data_ultima_visita: {
                                    equals: new Date(filters.data_ultima_visita),
                                },
                            }
                            : {})), (filters.diagnostico && {
                        diagnostico: {
                            contains: filters.diagnostico,
                            mode: "insensitive",
                        },
                    })), (filters.recomendacoes && {
                        recomendacoes: {
                            contains: filters.recomendacoes,
                            mode: "insensitive",
                        },
                    })), (filters.finalidade_visita && {
                        finalidade_visita: {
                            contains: filters.finalidade_visita,
                            mode: "insensitive",
                        },
                    })),
                    orderBy: {
                        numero: "asc",
                    },
                });
                return result;
            }
            catch (error) {
                throw new Error(`Error fetching visits. Error: ${error}`);
            }
        });
    }
}
exports.ListVisitsService = ListVisitsService;
