import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";

import { blogPost, updateBlogPost } from "@ayushshivhare79/validation";

const blogRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

//Increase the security of the middleware

blogRoute.use("/*", async (c, next) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const authHeader = c.req.header("authorization") || "";

    const decoded = await verify(authHeader, c.env.JWT_SECRET);
    c.set("userId", decoded.id);
    console.log(c.get("userId"));
    await next();
  } catch (error) {
    return c.json({ msg: "Invalid token" });
  }
});

//user search kro aasa vi hoskta hai
//verify m ye issue h ki bc koi vi token verify krdega with common secret key

blogRoute.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const { success } = blogPost.safeParse(await c.req.json());

  if (!success) {
    return c.json("Invalid credentials");
  }

  try {
    const { title, content, authorId } = await c.req.json();
    const response = await prisma.post.create({
      data: {
        title,
        content,
        authorId: Number(c.get("userId")),
      },
    });
    return c.json({ msg: "Blog created successful", response });
  } catch (error) {
    return c.json({ msg: "Invalid credentials" });
  }
});

blogRoute.put("/update/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const { success } = updateBlogPost.safeParse(await c.req.json());

  if (!success) {
    return c.json("Invalid credentials");
  }
  //Koi vi kisi vi author id se edit kr paraha ko protect krna hai vro

  try {
    const id = c.req.param("id");

    const { title, content } = await c.req.json();

    const response = await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        content,
      },
    });
    return c.json({ msg: "Updated successfully", response });
  } catch (error) {
    return c.json({ msg: "Error hogya vro" });
  }
});

blogRoute.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const response = await prisma.post.findMany();
    return c.json(response);
  } catch (error) {
    return c.json({ msg: "Error fetching blogs" });
  }
});

blogRoute.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  });
  try {
    const id = c.req.param("id");

    const response = await prisma.post.findFirst({
      where: {
        id: Number(id),
      },
    });

    return c.json(response);
  } catch (error) {
    return c.json({ msg: "Invalid credentials" });
  }
});

export default blogRoute;
