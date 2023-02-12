import { router } from "../trpc";
import { authRouter } from "./auth";
import { plantRouter } from "./plant";
import { userRouter } from "./user";
import { diseaseRouter } from "./disease";
export const appRouter = router({
  auth: authRouter,
  user: userRouter,
  plant: plantRouter,
  disease: diseaseRouter,
});

export type AppRouter = typeof appRouter;
