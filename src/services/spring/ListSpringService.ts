import prismaClient from "../../prisma";
import { SELECT_SPRING_QUERY } from "../../queries/springQueries";

class ListSpringService {
  async execute() {
    try {
      const result = await prismaClient.$queryRawUnsafe(SELECT_SPRING_QUERY);

      return result;
    } catch (error) {
      throw new Error(`Error fetching springs. Error: ${error}`);
    }
  }
}

export { ListSpringService };
