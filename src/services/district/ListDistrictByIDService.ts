import prismaClient from "../../prisma";
import { SELECT_DISTRICT_BY_ID_QUERY } from "../../queries/districtQueries";

interface DistrictRequest {
  id: number;
}

class ListDistrictByIDService {
  async execute({ id }: DistrictRequest) {
    try {
      const findDistrictByID = await prismaClient.$queryRawUnsafe(
        SELECT_DISTRICT_BY_ID_QUERY,
        id
      );

      return findDistrictByID;
    } catch (error) {
      throw new Error(`Error fetching district by ID. Error: ${error}`);
    }
  }
}

export { ListDistrictByIDService };
