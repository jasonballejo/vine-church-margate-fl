import React from "react";
import { Metadata } from "next";
import LoginForm from "@/components/Login-Register/LoginForm";

export const metadata: Metadata = {
  title: "Login Form",
};

export default function Login() {
  return (
    <>
      <LoginForm />
    </>
  );
}
