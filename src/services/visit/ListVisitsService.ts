import prismaClient from "../../prisma";

class ListVisitsService {
  async execute() {
    try {
      const result = await prismaClient.visitas.findMany({
        orderBy: {
          data: "desc",
        },
      });

      return result;
    } catch (error) {
      throw new Error(`Error fetching visits. Error: ${error}`);
    }
  }
}

export { ListVisitsService };
