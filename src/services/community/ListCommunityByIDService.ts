import prismaClient from "../../prisma";
import { SELECT_COMMUNITY_BY_ID_QUERY } from "../../queries/communityQueries";

interface CommunityRequest {
  id: number;
}

class ListCommunityByIDService {
  async execute({ id }: CommunityRequest) {
    try {
      const findCommunityByID = await prismaClient.$queryRawUnsafe(
        SELECT_COMMUNITY_BY_ID_QUERY,
        id
      );

      return findCommunityByID;
    } catch (error) {
      throw new Error(`Error fetching community by ID. Error: ${error}`);
    }
  }
}

export { ListCommunityByIDService };
