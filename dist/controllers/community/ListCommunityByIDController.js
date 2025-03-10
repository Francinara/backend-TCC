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
exports.ListCommunityByIDController = void 0;
const ListCommunityByIDService_1 = require("../../services/community/ListCommunityByIDService");
class ListCommunityByIDController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                throw new Error("Invalid or missing parameter");
            }
            const listCommunityByIDService = new ListCommunityByIDService_1.ListCommunityByIDService();
            const community = yield listCommunityByIDService.execute({ id });
            return res.json(community);
        });
    }
}
exports.ListCommunityByIDController = ListCommunityByIDController;
