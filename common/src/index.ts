import { z } from "zod";

export const signupBody = z.object({
  username: z.string().email(),
  password: z.string().min(7),
  firstName: z.string(),
  lastName: z.string(),
});

export const signinBody = z.object({
  username: z.string().email(),
  password: z.string().min(7),
});

export const blogPost = z.object({
  title: z.string().max(50),
  content: z.string(),
});

export const updateBlogPost = z.object({
  title: z.string().max(50).optional(),
  content: z.string().optional(),
});

export type SignupBody = z.infer<typeof signupBody>;
export type SigninBody = z.infer<typeof signinBody>;
export type BlogPost = z.infer<typeof blogPost>;
export type UpdateBlogPost = z.infer<typeof updateBlogPost>;
