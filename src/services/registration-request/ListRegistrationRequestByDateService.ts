import prismaClient from "../../prisma";

interface RegistrationRequestByDate {
  requestDate: Date;
}

class ListRegistrationRequestByDateService {
  async execute({ requestDate }: RegistrationRequestByDate) {
    const startOfDay = new Date(requestDate.setUTCHours(0, 0, 0, 0));
    const endOfDay = new Date(requestDate.setUTCHours(23, 59, 59, 999));

    const result = await prismaClient.registrationRequest.findMany({
      where: {
        requestDate: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
    });

    return result;
  }
}

export { ListRegistrationRequestByDateService };
