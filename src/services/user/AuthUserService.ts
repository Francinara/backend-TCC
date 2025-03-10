import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error("User/password incorrect");
    }
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("User/password incorrect");
    }

    if (!user.active) {
      throw new Error("User  inactive");
    }
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT secret is not defined");
    }

    const token = sign(
      {
        name: user.name,
        email: user.email,
        role: user.role,
        active: user.active,
      },
      process.env.JWT_SECRET,
      {
        subject: String(user.id),
        expiresIn: "30d",
      }
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      active: user.active,
      token: token,
    };
  }
}
export { AuthUserService };
