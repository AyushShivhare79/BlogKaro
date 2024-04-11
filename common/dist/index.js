"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogPost = exports.blogPost = exports.signinBody = exports.signupBody = void 0;
const zod_1 = require("zod");
exports.signupBody = zod_1.z.object({
    username: zod_1.z.string().email(),
    password: zod_1.z.string().min(7),
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
});
exports.signinBody = zod_1.z.object({
    username: zod_1.z.string().email(),
    password: zod_1.z.string().min(7),
});
exports.blogPost = zod_1.z.object({
    title: zod_1.z.string().max(50),
    content: zod_1.z.string(),
});
exports.updateBlogPost = zod_1.z.object({
    title: zod_1.z.string().max(50).optional(),
    content: zod_1.z.string().optional(),
});
