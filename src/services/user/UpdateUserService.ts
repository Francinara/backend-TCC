import prismaClient from "../../prisma";

interface UserRequest {
  user_id: number;
  active: boolean;
}

class UpdateUserService {
  async execute({ user_id, active }: UserRequest) {
    const user = await prismaClient.user.update({
      where: {
        id: user_id,
      },
      data: {
        active: active,
      },
    });
    return user;
  }
}

export { UpdateUserService };
