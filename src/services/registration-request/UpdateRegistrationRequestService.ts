import prismaClient from "../../prisma";

interface RegistrationRequest {
  user_id: number;
  status: string;
}

class UpdateRegistrationRequestService {
  async execute({ user_id, status }: RegistrationRequest) {
    const result = await prismaClient.registrationRequest.update({
      where: {
        id: user_id,
      },
      data: {
        status: status,
      },
    });
    return result;
  }
}

export { UpdateRegistrationRequestService };
