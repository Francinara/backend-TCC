import prismaClient from "../../prisma";
import { SELECT_DISTRICT_QUERY } from "../../queries/districtQueries";

class ListDistrictService {
  async execute() {
    try {
      const districts = await prismaClient.$queryRawUnsafe(
        SELECT_DISTRICT_QUERY
      );

      return districts;
    } catch (error) {
      throw new Error(`Error fetching Districts. Error: ${error}`);
    }
  }
}

export { ListDistrictService };
