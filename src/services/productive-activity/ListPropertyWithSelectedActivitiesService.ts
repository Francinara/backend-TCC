import prismaClient from "../../prisma";
import {
  SELECT_PROPERTIES_WITH_PRODUCTIVE_ACTIVITY_QUERY,
  SELECT_PROPERTIES_WITH_SELECTED_PRODUCTIVE_ACTIVITIES_QUERY,
} from "../../queries/productiveActivityQueries";
import { activityMap } from "../../settings/constants";

interface ActivityRequest {
  activities: string;
}

class ListPropertyWithSelectedActivitiesService {
  async execute({ activities }: ActivityRequest) {
    try {
      const selectedActivities = activities
        ? activities.split("").map(Number)
        : [];

      if (selectedActivities.length === 0) {
        return [];
      }

      const queries = selectedActivities.slice(1).map((activity) => {
        const activityInfo = activityMap[activity];
        return SELECT_PROPERTIES_WITH_SELECTED_PRODUCTIVE_ACTIVITIES_QUERY.replace(
          "$1",
          activityInfo.name
        )
          .replace("$2", activityInfo.abbreviation)
          .replace("$3", activityInfo.abbreviation);
      });

      const query =
        SELECT_PROPERTIES_WITH_PRODUCTIVE_ACTIVITY_QUERY.replace(
          "$1",
          activityMap[selectedActivities[0]].name
        )
          .replace("$2", activityMap[selectedActivities[0]].abbreviation)
          .replace("$3", activityMap[selectedActivities[0]].abbreviation) +
        queries.join(" ");

      const result = await prismaClient.$queryRawUnsafe(
        `${query}
        GROUP BY
          p.id, p.nome_propriedade, p.geom
        ORDER BY
          water_distance ASC`
      );

      return result;
    } catch (error) {
      throw new Error(
        `Error fetching properties with selected activities. Error ${error}`
      );
    }
  }
}

export { ListPropertyWithSelectedActivitiesService };
