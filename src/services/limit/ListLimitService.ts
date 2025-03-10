import prismaClient from "../../prisma";
import { SELECT_LIMIT_QUERY } from "../../queries/limitQueries";

class ListLimitService {
  async execute() {
    try {
      const result = await prismaClient.$queryRawUnsafe(SELECT_LIMIT_QUERY);

      return result;
    } catch (error) {
      throw new Error(`Error fetching city limits. Error: ${error}`);
    }
  }
}

export { ListLimitService };
