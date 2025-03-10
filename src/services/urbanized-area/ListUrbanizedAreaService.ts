import prismaClient from "../../prisma";
import { SELECT_URBANIZED_AREA_QUERY } from "../../queries/urbanizedAreaQueries";

class ListUrbanizedAreaService {
  async execute() {
    try {
      const result = await prismaClient.$queryRawUnsafe(
        SELECT_URBANIZED_AREA_QUERY
      );

      return result;
    } catch (error) {
      throw new Error(`Error fetching urbanized area. Error: ${error}`);
    }
  }
}

export { ListUrbanizedAreaService };
