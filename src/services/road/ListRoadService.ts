import prismaClient from "../../prisma";
import { SELECT_ROAD_QUERY } from "../../queries/roadQueries";

class ListRoadService {
  async execute() {
    try {
      const result = await prismaClient.$queryRawUnsafe(SELECT_ROAD_QUERY);

      return result;
    } catch (error) {
      throw new Error(`Error fetching roads. Error: ${error}`);
    }
  }
}

export { ListRoadService };
