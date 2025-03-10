import prismaClient from "../../prisma";

interface PropertyRequest {
  property_id: number;
}

class ListRecentVisitByPropertyService {
  async execute({ property_id }: PropertyRequest) {
    try {
      const result = await prismaClient.visitas.findFirst({
        where: {
          propriedade_id: property_id,
        },
        orderBy: {
          data: "desc",
        },
      });

      return result;
    } catch (error) {
      throw new Error(
        `Error fetching the most recent visit by property ID. Error: ${error}`
      );
    }
  }
}

export { ListRecentVisitByPropertyService };
