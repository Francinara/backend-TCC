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
exports.CreatePropertyService = void 0;
const wkx_1 = require("wkx");
const prisma_1 = __importDefault(require("../../prisma"));
class CreatePropertyService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ nome_propriedade, lat, lng, beneficiario_id, car, n_recibo_car, area, comunidade, distrito, situacao_fundiaria, tipo_documento, }) {
            try {
                const pointWkt = `POINT(${lng} ${lat})`;
                const pointGeom = wkx_1.Geometry.parse(pointWkt).toWkb();
                if (nome_propriedade == "") {
                    throw new Error("Nome invalid");
                }
                const propriedade = yield prisma_1.default.propriedades.create({
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
            }
            catch (error) {
                throw new Error(`Error creating property. Error: ${error}`);
            }
        });
    }
}
exports.CreatePropertyService = CreatePropertyService;
