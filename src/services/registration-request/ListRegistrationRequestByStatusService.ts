import prismaClient from "../../prisma";

interface RegistrationRequest {
  status: string;
}

class ListRegistrationRequestByStatusService {
  async execute({ status }: RegistrationRequest) {
    const result = await prismaClient.registrationRequest.findMany({
      where: {
        status: status,
      },
    });

    return result;
  }
}

export { ListRegistrationRequestByStatusService };
