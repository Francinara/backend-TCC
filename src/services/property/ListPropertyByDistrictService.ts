import prismaClient from "../../prisma";
import { SELECT_PROPERTY_BY_DISTRICT_QUERY } from "../../queries/propertyQueries";

interface DistrictRequest {
  district_id: number;
}
class ListPropertyByDistrictService {
  async execute({ district_id }: DistrictRequest) {
    try {
      const findPropertyByDistrict = await prismaClient.$queryRawUnsafe(
        SELECT_PROPERTY_BY_DISTRICT_QUERY,
        district_id
      );

      return findPropertyByDistrict;
    } catch (error) {
      throw new Error(`Error fetching properties by district. Error: ${error}`);
    }
  }
}

export { ListPropertyByDistrictService };
