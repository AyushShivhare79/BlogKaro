import { Hono } from "hono";
import { sign } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { signupBody, signinBody } from "@ayushshivhare79/validation";

const userRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

//Please add hashing in the password Mf

userRoute.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const { success } = signupBody.safeParse(await c.req.json());

  if (!success) {
    return c.json({ msg: "Invalid credentials" });
  }
  console.log("HERE");

  //Remove password field and store in jwt type se kuch krna hai

  //Try to work here more for best input and logic
  try {
    const { username, password, firstName, lastName } = await c.req.json();
    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (user) {
      return c.json({ msg: "User already exists" });
    }

    const response = await prisma.user.create({
      data: {
        username,
        password,
        firstName,
        lastName,
      },
    });
    const token = await sign(response, c.env.JWT_SECRET);
    return c.json({ msg: "User signup successful", token });
  } catch (error) {
    return c.json({ msg: "Invalid credentials" });
  }
});

userRoute.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const { success } = signinBody.safeParse(await c.req.json());

  if (!success) {
    return c.json({ msg: "Invalid credentials" });
  }

  try {
    const { username, password } = await c.req.json();
    const response = await prisma.user.findFirst({
      where: {
        username,
        password,
      },
    });

    if (!response) {
      return c.json({ msg: "User not found / Please signup" });
    }

    const token = await sign(response, c.env.JWT_SECRET);

    return c.json({ msg: "Login successful", token });
  } catch (error) {
    return c.json({ msg: "Error while login / Invalid credentials" });
  }
});

export default userRoute;
