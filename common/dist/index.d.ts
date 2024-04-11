import { z } from "zod";
export declare const signupBody: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
}, {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
}>;
export declare const signinBody: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>;
export declare const blogPost: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
}, {
    title: string;
    content: string;
}>;
export declare const updateBlogPost: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    content?: string | undefined;
}, {
    title?: string | undefined;
    content?: string | undefined;
}>;
export type SignupBody = z.infer<typeof signupBody>;
export type SigninBody = z.infer<typeof signinBody>;
export type BlogPost = z.infer<typeof blogPost>;
export type UpdateBlogPost = z.infer<typeof updateBlogPost>;
