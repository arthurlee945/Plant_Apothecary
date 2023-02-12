import { router } from "../trpc";
import { authRouter } from "./auth";
import { plantRouter } from "./plant";
import { userRouter } from "./user";

export const appRouter = router({
  auth: authRouter,
  user: userRouter,
  plant: plantRouter,
});

export type AppRouter = typeof appRouter;
