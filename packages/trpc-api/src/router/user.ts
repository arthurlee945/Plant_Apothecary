import { router, publicProcedure, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import crypto from "crypto";

export const userRouter = router({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany({
      select: {
        username: true,
        email: true,
      },
    });
  }),
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.user.findFirst({ where: { id: input } });
  }),
  create: publicProcedure
    .input(
      z.object({
        username: z.string(),
        email: z.string().email(),
        password: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      if (await ctx.prisma.user.findUnique({ where: { username: input.username } })) {
        throw new TRPCError({
          message: "username is taken",
          code: "BAD_REQUEST",
          cause: {
            status: "failed",
            message: "username is taken",
          },
        });
      }
      if (await ctx.prisma.user.findUnique({ where: { email: input.email } })) {
        throw new TRPCError({
          message: "email is taken",
          code: "BAD_REQUEST",
          cause: {
            status: "failed",
            message: "email is taken",
          },
        });
      }
      const derivedKey = crypto.pbkdf2Sync(input.password, input.username, 10000, 64, "sha512");
      return ctx.prisma.user.create({
        data: {
          username: input.username,
          email: input.email,
          password: derivedKey.toString("hex"),
        },
      });
    }),
});
