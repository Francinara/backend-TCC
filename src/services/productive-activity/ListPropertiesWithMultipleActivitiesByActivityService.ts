import prismaClient from "../../prisma";
import { SELECT_PROPERTIES_WITH_MULTIPLE_ACTIVITIES_BY_PRODUCTIVE_ACTIVITY_QUERY } from "../../queries/productiveActivityQueries";
import { activityMap } from "../../settings/constants";

interface ActivityRequest {
  activity: number;
}

class ListPropertiesWithMultipleActivitiesByActivityService {
  async execute({ activity }: ActivityRequest) {
    try {
      const query =
        SELECT_PROPERTIES_WITH_MULTIPLE_ACTIVITIES_BY_PRODUCTIVE_ACTIVITY_QUERY.replace(
          "$1",
          activityMap[activity].type
        )
          .replace("$2", activityMap[activity].type)
          .replace("$3", activityMap[activity].name)
          .replace("$4", activityMap[activity].type);

      const result = await prismaClient.$queryRawUnsafe(query);
      return result;
    } catch (error) {
      throw new Error(
        `Error fetching properties with crop diversification. Error ${error}`
      );
    }
  }
}
export { ListPropertiesWithMultipleActivitiesByActivityService };
