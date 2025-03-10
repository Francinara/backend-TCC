import prismaClient from "../../prisma";
import { SELECT_PROPERTY_QUERY } from "../../queries/propertyQueries";

class ListPropertyService {
  async execute() {
    try {
      const properties = await prismaClient.$queryRawUnsafe(
        SELECT_PROPERTY_QUERY
      );

      return properties;
    } catch (error) {
      throw new Error(`Error fetching properties. Error: ${error}`);
    }
  }
}

export { ListPropertyService };
