import { hash } from "bcryptjs";
import prismaClient from "../../prisma";

interface UserRequest {
  name: string;
  email: string;
  password: string;
  role: string;
  active: boolean;
}

class CreateUSerService {
  async execute({ name, email, password, role, active }: UserRequest) {
    if (!email) {
      throw new Error("Email incorrect");
    }
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("User alredy exists");
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
        role: role,
        active: active,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        active: true,
      },
    });

    return { user };
  }
}

export { CreateUSerService };
