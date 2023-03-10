import Head from "next/head";
import { useState, useMemo, useContext } from "react";
import { AuthContext } from "../utils/authContext";
import { trpc } from "../utils/trpc";
import { TRPCClientError } from "@trpc/client";
import { setUserId } from "../utils/trpc";
import Spoon from "../public/frame-1.svg";

export default function Home() {
  const userCtx = useContext(AuthContext);
  const data = trpc.user.all.useQuery();
  const signUpMutation = trpc.user.create.useMutation();
  const scoreMutation = trpc.scores.create.useMutation();

  const [userLog, setUserLog] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [signIn, setSignIn] = useState({
    username: "",
    password: "",
  });
  const [currScore, setCurrScore] = useState({
    track: "",
    bpm: 0,
    score: 0,
  });
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [errorMsg2, setErrorMsg2] = useState<string>("");
  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userLog.username === "" || userLog.email === "" || userLog.password === "") return;
    try {
      const res = await signUpMutation.mutateAsync(userLog);
      console.log(res, "res file");
    } catch (err) {
      if (err instanceof TRPCClientError) {
        console.log(err.shape?.message, "if error happend");
      }
    }
  };
  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await userCtx.authenticate(signIn.username, signIn.password);
    setErrorMsg(typeof result === "string" ? result : "");
  };
  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    userCtx.logout();
  };
  const handeScoreLog = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currScore.track === "" || currScore.bpm === 0 || currScore.score === 0) return;
    try {
      const res = await scoreMutation.mutateAsync(currScore);
      setErrorMsg2("");
    } catch (err) {
      if (err instanceof TRPCClientError) {
        console.log(err.shape?.message, "if error happend score");
        setErrorMsg2(err.shape?.message ? err.shape?.message : "");
      }
    }
  };
  return (
    <>
      <Head>
        <title>Rhythm That Web</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ padding: "50px" }}>
        <h2>sign up</h2>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="username"
            value={userLog.username}
            onChange={(e) => {
              setUserLog((currLog) => ({ ...currLog, username: e.target.value }));
            }}
          />
          <input
            type="email"
            placeholder="email"
            value={userLog.email}
            onChange={(e) => {
              setUserLog((currLog) => ({ ...currLog, email: e.target.value }));
            }}
          />
          <input
            type="password"
            placeholder="password"
            value={userLog.password}
            onChange={(e) => {
              setUserLog((currLog) => ({ ...currLog, password: e.target.value }));
            }}
          />
          <button type="submit">submit</button>
        </form>
        <h2>sign In</h2>
        <form onSubmit={handleSignIn}>
          <input
            type="text"
            placeholder="username"
            value={signIn.username}
            onChange={(e) => {
              setSignIn((currLog) => ({ ...currLog, username: e.target.value }));
            }}
          />
          <input
            type="password"
            placeholder="password"
            value={signIn.password}
            onChange={(e) => {
              setSignIn((currLog) => ({ ...currLog, password: e.target.value }));
            }}
          />
          <button type="submit">submit</button>
        </form>
        {errorMsg}
        <button onClick={handleLogout}>Logout</button>
        {true && (
          <>
            {" "}
            <h2>test log score</h2>
            <form onSubmit={handeScoreLog}>
              <input
                type="text"
                placeholder="track"
                value={currScore.track}
                onChange={(e) => {
                  setCurrScore((currLog) => ({ ...currLog, track: e.target.value }));
                }}
              />
              <input
                type="number"
                placeholder="bpm"
                value={currScore.bpm}
                onChange={(e) => {
                  setCurrScore((currLog) => ({ ...currLog, bpm: +e.target.value }));
                }}
              />
              <input
                type="number"
                placeholder="score"
                value={currScore.score}
                onChange={(e) => {
                  setCurrScore((currLog) => ({ ...currLog, score: +e.target.value }));
                }}
              />
              <button type="submit">submit</button>
            </form>
            {errorMsg2}
          </>
        )}
        <Spoon style={{ width: 150 }} />
      </main>
    </>
  );
}
