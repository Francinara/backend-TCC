import prismaClient from "../../prisma";
import { SELECT_PROTECTION_LAYER_QUERY } from "../../queries/protectionLayerQueries";

class ListProtectionLayerService {
  async execute() {
    try {
      const result = await prismaClient.$queryRawUnsafe(
        SELECT_PROTECTION_LAYER_QUERY
      );

      return result;
    } catch (error) {
      throw new Error(`Error fetching Protection Layer. Error: ${error}`);
    }
  }
}

export { ListProtectionLayerService };
