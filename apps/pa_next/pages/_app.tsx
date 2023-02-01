import "../styles/globals.css";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import AuthContextProvider from "../utils/authContext";
const App: AppType = ({ Component, pageProps }) => {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
};

export default trpc.withTRPC(App);
