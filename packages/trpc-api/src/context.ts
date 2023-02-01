import { prisma } from "database";
import { type inferAsyncReturnType } from "@trpc/server";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";

type User = {
  id: string;
  username: string;
  email: string;
  password: string;
};

interface UserProp {
  user: User | null;
}

export const createContextInner = async ({ user }: UserProp) => ({ user, prisma });

// need to modify this func
export const createContext = async (opts: CreateNextContextOptions) => {
  async function getUser() {
    const user = await prisma.user.findUnique({
      where: { id: opts.req.headers.id ? (opts.req.headers.id as string) : "" },
    });

    return user ? user : null;
  }
  const user = await getUser();

  return await createContextInner({ user });
};

export type Context = inferAsyncReturnType<typeof createContext>;
