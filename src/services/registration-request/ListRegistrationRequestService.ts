import prismaClient from "../../prisma";

class ListRegistrationRequestService {
  async execute() {
    const result = await prismaClient.registrationRequest.findMany();
    return result;
  }
}

export { ListRegistrationRequestService };
