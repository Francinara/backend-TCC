import prismaClient from "../../prisma";
import { SELECT_SUB_BASIN_QUERY } from "../../queries/subBasinQueries";

class ListSubBasinService {
  async execute() {
    try {
      const result = await prismaClient.$queryRawUnsafe(SELECT_SUB_BASIN_QUERY);

      return result;
    } catch (error) {
      throw new Error(`Error fetching sub basins. Error: ${error}`);
    }
  }
}

export { ListSubBasinService };
