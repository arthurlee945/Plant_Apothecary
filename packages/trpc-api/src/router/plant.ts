import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const plantRouter = router({
  getPlants: publicProcedure
    .input(
      z.object({
        take: z.number().default(10),
        skip: z.number().default(0),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.plant.findMany({
        take: input.take,
        skip: input.skip,
      });
    }),
  getPlantsC: publicProcedure
    .input(
      z.object({
        take: z.number().default(10),
        cursorId: z.string().optional(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.plant.findMany({
        take: input.take,
        skip: 1,
        cursor: {
          id: input.cursorId ? input.cursorId : "",
        },
      });
    }),
  getPlantById: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.plant.findUnique({
      where: {
        id: input,
      },
    });
  }),
  getPlantsByLetter: publicProcedure.input(z.string().length(1)).query(({ ctx, input }) => {
    return ctx.prisma.plant.findMany({
      where: {
        commonName: {
          startsWith: input,
        },
      },
    });
  }),
});
