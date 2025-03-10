import prismaClient from "../../prisma";

interface RegistrationRequest {
  name: string;
  email: string;
  password: string;
  role: string;
  status: string;
}

class CreateRegistrationRequestService {
  async execute({ name, email, password, role, status }: RegistrationRequest) {
    if (!email) {
      throw new Error("Email incorrect");
    }

    const requestAlreadyExists =
      await prismaClient.registrationRequest.findFirst({
        where: {
          email: email,
        },
      });

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (requestAlreadyExists || userAlreadyExists) {
      throw new Error("Registration request or user already exists");
    }

    const registrationRequest = await prismaClient.registrationRequest.create({
      data: {
        name: name,
        email: email,
        password: password,
        role: role,
        status: status,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        status: true,
        requestDate: true,
      },
    });

    return { registrationRequest };
  }
}

export { CreateRegistrationRequestService };
