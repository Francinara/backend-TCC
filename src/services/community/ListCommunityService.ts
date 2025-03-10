import prismaClient from "../../prisma";
import { SELECT_COMMUNITY_QUERY } from "../../queries/communityQueries";

class ListCommunityService {
  async execute() {
    try {
      const communities = await prismaClient.$queryRawUnsafe(
        SELECT_COMMUNITY_QUERY
      );
      return communities;
    } catch (error) {
      throw new Error(`Error fetching Communities. Error: ${error}`);
    }
  }
}

export { ListCommunityService };
