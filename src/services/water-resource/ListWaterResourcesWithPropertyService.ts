import prismaClient from "../../prisma";
import { SELECT_WATER_RESOURCE_WITH_PROPERTY_QUERY } from "../../queries/waterResourceQueries";

class ListWaterResourcesWithPropertyService {
  async execute() {
    try {
      const findWaterResourcesByProperty = await prismaClient.$queryRawUnsafe(
        SELECT_WATER_RESOURCE_WITH_PROPERTY_QUERY
      );

      return findWaterResourcesByProperty;
    } catch (error) {
      throw new Error(
        `Error fetching water resources by property ID. Error: ${error}`
      );
    }
  }
}

export { ListWaterResourcesWithPropertyService };
