import prismaClient from "../../prisma";
import { SELECT_DRAINAGE_QUERY } from "../../queries/drainageQueries";

class ListDrainageService {
  async execute() {
    try {
      const result = await prismaClient.$queryRawUnsafe(SELECT_DRAINAGE_QUERY);

      return result;
    } catch (error) {
      throw new Error(`Error fetching drainages. Error: ${error}`);
    }
  }
}

export { ListDrainageService };
