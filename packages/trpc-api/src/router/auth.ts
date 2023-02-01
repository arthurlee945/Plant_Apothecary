import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";
import crypto from "crypto";
import { TRPCError } from "@trpc/server";

export const authRouter = router({
  login: publicProcedure
    .input(
      z.object({
        username: z.string(),
        password: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const hashPassword = crypto.pbkdf2Sync(input.password, input.username, 10000, 64, "sha512").toString("hex");
      if (!(await ctx.prisma.user.findUnique({ where: { username: input.username } }))) {
        throw new TRPCError({
          message: "username does not exist",
          code: "BAD_REQUEST",
          cause: {
            status: "failed",
            message: "username does not exist",
          },
        });
      }
      if (!(await ctx.prisma.user.findFirst({ where: { username: input.username, password: hashPassword } }))) {
        throw new TRPCError({
          message: "password is wrong",
          code: "BAD_REQUEST",
          cause: {
            status: "failed",
            message: "password is wrong",
          },
        });
      }
      return await ctx.prisma.user.findFirst({
        where: { username: input.username, password: hashPassword },
        select: { id: true },
      });
    }),
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.user;
  }),
  getSecret: protectedProcedure.query(() => {
    return "This is a test secret when authed";
  }),
});
