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
  getPlantById: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.plant.findUnique({
      where: {
        id: input,
      },
    });
  }),
  getPlantsByLetter: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.plant.findMany();
  }),
});
