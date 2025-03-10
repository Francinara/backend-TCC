import prismaClient from "../../prisma";
import { SELECT_PROPERTY_BY_ID_QUERY } from "../../queries/propertyQueries";

interface PropertyRequest {
  id: number;
}

class ListPropertyByIDService {
  async execute({ id }: PropertyRequest) {
    try {
      const findPropertyByID = await prismaClient.$queryRawUnsafe(
        SELECT_PROPERTY_BY_ID_QUERY,
        id
      );

      return findPropertyByID;
    } catch (error) {
      throw new Error(`Error fetching property by ID. Error: ${error}`);
    }
  }
}

export { ListPropertyByIDService };
