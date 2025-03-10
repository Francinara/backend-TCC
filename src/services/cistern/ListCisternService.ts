import prismaClient from "../../prisma";
import { SELECT_CISTERN_QUERY } from "../../queries/cisternQueries";

class ListCisternService {
  async execute() {
    try {
      const result = await prismaClient.$queryRawUnsafe(SELECT_CISTERN_QUERY);

      return result;
    } catch (error) {
      throw new Error(`Error fetching Cisterns. Error: ${error}`);
    }
  }
}

export { ListCisternService };
