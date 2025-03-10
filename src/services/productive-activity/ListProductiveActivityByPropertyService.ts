import prismaClient from "../../prisma";
import { SELECT_PRODUCTIVE_ACTIVITY_BY_PROPERTY_QUERY } from "../../queries/productiveActivityQueries";
import { activityMap } from "../../settings/constants";

interface ActivityRequest {
  activity: number;
  property_id: number;
}

class ListProductiveActivityByPropertyService {
  async execute({ activity, property_id }: ActivityRequest) {
    try {
      const query = SELECT_PRODUCTIVE_ACTIVITY_BY_PROPERTY_QUERY.replace(
        "$1",
        activityMap[activity].name
      ).replace("$2", `${property_id}`);

      const result = await prismaClient.$queryRawUnsafe(query);

      return result;
    } catch (error) {
      throw new Error(
        `Error fetching productive activity by property ID. Error: ${error}`
      );
    }
  }
}

export { ListProductiveActivityByPropertyService };
