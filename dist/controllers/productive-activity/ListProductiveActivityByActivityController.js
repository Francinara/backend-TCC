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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProductiveActivityByActivityController = void 0;
const ListProductiveActivityByActivityService_1 = require("../../services/productive-activity/ListProductiveActivityByActivityService");
class ListProductiveActivityByActivityController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const activity = Number(req.query.activity);
            if (isNaN(activity)) {
                throw new Error("Invalid or missing parameter 'activity'");
            }
            const filters = {
                activity,
                distrito: req.query.distrito ? String(req.query.distrito) : undefined,
                data_inicio: req.query.data_inicio
                    ? String(req.query.data_inicio)
                    : undefined,
                data_fim: req.query.data_fim ? String(req.query.data_fim) : undefined,
                // Agriculture-specific filters
                cultura: req.query.cultura ? String(req.query.cultura) : undefined,
                data_plantio_inicio: req.query.data_plantio_inicio
                    ? String(req.query.data_plantio_inicio)
                    : undefined,
                data_plantio_fim: req.query.data_plantio_fim
                    ? String(req.query.data_plantio_fim)
                    : undefined,
                data_colheita_inicio: req.query.data_colheita_inicio
                    ? String(req.query.data_colheita_inicio)
                    : undefined,
                data_colheita_fim: req.query.data_colheita_fim
                    ? String(req.query.data_colheita_fim)
                    : undefined,
                producao_ano: req.query.producao_ano
                    ? Number(req.query.producao_ano)
                    : undefined,
                area_cultivo: req.query.area_cultivo
                    ? Number(req.query.area_cultivo)
                    : undefined,
                irrigacao: req.query.irrigacao
                    ? req.query.irrigacao === "true"
                    : undefined,
                valor_comercializado: req.query.valor_comercializado
                    ? Number(req.query.valor_comercializado)
                    : undefined,
                destinacao_venda: req.query.destinacao_venda
                    ? Number(req.query.destinacao_venda)
                    : undefined,
                destinacao_casa: req.query.destinacao_casa
                    ? Number(req.query.destinacao_casa)
                    : undefined,
                // Aquaculture-specific filters
                especie: req.query.especie ? String(req.query.especie) : undefined,
                quantidade: req.query.quantidade
                    ? Number(req.query.quantidade)
                    : undefined,
                lamina_agua: req.query.lamina_agua
                    ? String(req.query.lamina_agua)
                    : undefined,
                aptidao_corte: req.query.aptidao_corte
                    ? req.query.aptidao_corte === "true"
                    : undefined,
                aptidao_reproducao: req.query.aptidao_reproducao
                    ? req.query.aptidao_reproducao === "true"
                    : undefined,
                valor_comercializacao: req.query.valor_comercializacao
                    ? Number(req.query.valor_comercializacao)
                    : undefined,
                destinacao_verda: req.query.destinacao_verda
                    ? Number(req.query.destinacao_verda)
                    : undefined,
                // Beekeeping-specific filters
                n_colmeias: req.query.n_colmeias
                    ? Number(req.query.n_colmeias)
                    : undefined,
                destinacao_mel: req.query.destinacao_mel
                    ? String(req.query.destinacao_mel)
                    : undefined,
                com_ferrao: req.query.com_ferrao
                    ? req.query.com_ferrao === "true"
                    : undefined,
                sem_ferrao: req.query.sem_ferrao
                    ? req.query.sem_ferrao === "true"
                    : undefined,
                // Livestock-specific filters
                raca_predominante: req.query.raca_predominante
                    ? String(req.query.raca_predominante)
                    : undefined,
                aptidao_leite: req.query.aptidao_leite
                    ? req.query.aptidao_leite === "true"
                    : undefined,
                aptidao_postura: req.query.aptidao_postura
                    ? req.query.aptidao_postura === "true"
                    : undefined,
                // Craftsmanship-specific filters
                produto: req.query.produto ? String(req.query.produto) : undefined,
                destinacao_valor: req.query.destinacao_valor
                    ? String(req.query.destinacao_valor)
                    : undefined,
                // OtherActivities-specific filters
                tipo: req.query.tipo ? String(req.query.tipo) : undefined,
                descricao: req.query.descricao ? String(req.query.descricao) : undefined,
            };
            const listProductiveActivityByActivityService = new ListProductiveActivityByActivityService_1.ListProductiveActivityByActivityService();
            const result = yield listProductiveActivityByActivityService.execute(filters);
            return res.json(result);
        });
    }
}
exports.ListProductiveActivityByActivityController = ListProductiveActivityByActivityController;
