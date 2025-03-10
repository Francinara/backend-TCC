import prismaClient from "../../prisma";
import { SELECT_WATER_QUERY } from "../../queries/waterQueries";

class ListWaterService {
  async execute() {
    try {
      const result = await prismaClient.$queryRawUnsafe(SELECT_WATER_QUERY);

      return result;
    } catch (error) {
      throw new Error(`Error fetching water. Error: ${error}`);
    }
  }
}

export { ListWaterService };
