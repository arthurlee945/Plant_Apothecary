import { TRPCClientError } from "@trpc/client";
import React, { createContext, useState } from "react";
import { trpc } from "./trpc";
import { setUserId } from "./trpc";

interface AuthProviderType {
  children: React.ReactNode;
}
type UserState = {
  userId: string;
  isAuthenticated: boolean;
};

export const AuthContext = createContext({
  userId: "",
  isAuthenticated: false,
  authenticate: (username: string, password: string) => {},
  logout: () => {},
});

const AuthContextProvider: React.FC<AuthProviderType> = ({ children }) => {
  const loginMutation = trpc.auth.login.useMutation({
    onSuccess: (data) => {
      if (data) {
        data && setUserId(data.id);
        setUser((currUser) => ({ ...currUser, userId: data.id, isAuthenticated: true }));
      }
    },
  });

  const [user, setUser] = useState<UserState>({
    userId: "",
    isAuthenticated: false,
  });

  const authenticate = async (username: string, password: string) => {
    try {
      await loginMutation.mutateAsync({ username, password });
      return null;
    } catch (err) {
      if (err instanceof TRPCClientError) {
        return err.shape.message;
      } else {
        return err;
      }
    }
  };

  const logout = () => {
    setUser((currUser) => ({ ...currUser, userId: "", isAuthenticated: false }));
    setUserId("");
  };

  const value = {
    userId: user.userId,
    isAuthenticated: user.isAuthenticated,
    authenticate: authenticate,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
