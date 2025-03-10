import prismaClient from "../../prisma";
import { SELECT_PROPERTY_BY_AREA_QUERY } from "../../queries/propertyQueries";

interface AreaRequest {
  lng: number;
  lat: number;
  radius: number;
}

class ListPropertyByAreaService {
  async execute({ lng, lat, radius }: AreaRequest) {
    try {
      const query = SELECT_PROPERTY_BY_AREA_QUERY.replace("$1", `${lng}`)
        .replace("$2", `${lat}`)
        .replace("$3", `${radius}`);

      const findPropertyByArea = await prismaClient.$queryRawUnsafe(query);

      return findPropertyByArea;
    } catch (error) {
      throw new Error(`Error fetching properties by area. Error: ${error}`);
    }
  }
}

export { ListPropertyByAreaService };
