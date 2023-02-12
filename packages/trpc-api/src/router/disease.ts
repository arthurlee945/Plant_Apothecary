import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const diseaseRouter = router({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.disease.findMany();
  }),
  getDisease: publicProcedure
    .input(
      z.object({
        take: z.number().default(10),
        skip: z.number().default(0),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.disease.findMany({
        take: input.take,
        skip: input.skip,
      });
    }),
  getDiseaseC: publicProcedure
    .input(
      z.object({
        take: z.number().default(10),
        cursorId: z.string().optional(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.disease.findMany({
        take: input.take,
        skip: 1,
        cursor: {
          id: input.cursorId ? input.cursorId : "",
        },
      });
    }),
  getDiseaseById: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.disease.findUnique({
      where: {
        id: input,
      },
    });
  }),
  getPlantsByLetter: publicProcedure.input(z.string().length(1)).query(({ ctx, input }) => {
    return ctx.prisma.disease.findMany({
      where: {
        commonName: {
          startsWith: input,
        },
      },
    });
  }),
});
