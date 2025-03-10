import prismaClient from "../../prisma";
import { SELECT_PRODUCTIVE_ACTIVITY_BY_ACTIVITY_QUERY } from "../../queries/productiveActivityQueries";
import { activityMap } from "../../settings/constants";

interface ActivityRequest {
  activity: number;
}

class ListProductiveActivityByActivityService {
  async execute({ activity }: ActivityRequest) {
    try {
      const query = SELECT_PRODUCTIVE_ACTIVITY_BY_ACTIVITY_QUERY.replace(
        "$1",
        activityMap[activity].name
      )
        .replace("$2", activityMap[activity].name)
        .replace("$3", activityMap[activity].name)
        .replace("$4", activityMap[activity].name);

      const result = await prismaClient.$queryRawUnsafe(query);

      return result;
    } catch (error) {
      throw new Error(
        `Error fetching productive activity by activity. Error: ${error}`
      );
    }
  }
}

export { ListProductiveActivityByActivityService };
