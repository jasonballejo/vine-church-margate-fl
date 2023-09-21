"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  // const handleSubmit = async (e: { preventDefault: () => void }) => {
  //   e.preventDefault();

  //   try {
  //     const res = await signIn("credentials", {
  //       email,
  //       password,
  //       redirect: false,
  //     });

  //     if (res.error) {
  //       setError("Invalid Credentials");
  //       return;
  //     }

  //     router.replace("dashboard");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-purple-700">
          <h1 className="text-xl font-bold my-4">Login</h1>

          <form
            // onSubmit={handleSubmit}
            className="flex flex-col gap-3"
          >
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <button className="bg-purple-700 text-white font-bold cursor-pointer px-6 py-2">
              Login
            </button>
            {error && (
              <p className="bg-red-500 text-white w-fit text-sm py-1 px-2 rounded-md mt-2">
                {error}
              </p>
            )}

            <Link className="text-sm mt-3 text-right" href={"/register"}>
              Don&apos;t have an account?{" "}
              <span className="underline">Register</span>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
