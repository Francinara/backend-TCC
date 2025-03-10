import prismaClient from "../../prisma";
import { SELECT_WATER_RESOURCE_BY_PROPERTY_ID_QUERY } from "../../queries/waterResourceQueries";

interface PropertyRequest {
  property_id: number;
}

class ListWaterResourcesByPropertyService {
  async execute({ property_id }: PropertyRequest) {
    try {
      const findWaterResourcesByProperty = await prismaClient.$queryRawUnsafe(
        SELECT_WATER_RESOURCE_BY_PROPERTY_ID_QUERY,
        property_id
      );

      return findWaterResourcesByProperty;
    } catch (error) {
      throw new Error(
        `Error fetching water resources by property ID. Error: ${error}`
      );
    }
  }
}

export { ListWaterResourcesByPropertyService };
