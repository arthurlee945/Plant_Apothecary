import { router } from "../trpc";
import { authRouter } from "./auth";
// import { scoresRouter } from "./scores";
import { userRouter } from "./user";

export const appRouter = router({
  // scores: scoresRouter,
  auth: authRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;
