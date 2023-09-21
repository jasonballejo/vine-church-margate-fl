import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

import { Metadata } from "next";
import LoginForm from "@/components/Login-Register/LoginForm";

export const metadata: Metadata = {
  title: "Login Form",
};

export default async function Login() {
  // const session = await getServerSession(authOptions);

  // if (session) redirect("/dashboard");
  return (
    <>
      <LoginForm />
    </>
  );
}
