import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TopMenu() {
  return (
    // <section className="w-full absolute top-0 -z-10">
    <section className="w-full h-full flex justify-center items-center mb-5 px-3">
      <div className="max-w-5xl w-full h-[50vh] flex flex-col justify-end items-center bg-bgTopMenu bg-cover bg-bottom bg-no-repeat border rounded-[16px]">
        <div className="flex flex-col justify-end gap-5 mb-10 ml-10">
          <div className="flex flex-col gap-1 text-white">
            <h2 className="sm:text-4xl text-xl font-bold uppercase z-0">
              Welcome <span className="font-extralight">home</span>
            </h2>
            <p className="sm:w-[70%] w-[85%] sm:text-md text-xs font-extralight tracking-widest z-0">
              Our burden is to edify a church of overcomers where every member
              is a minister and every house an extension of the Church thereby
              conquering our generations to Christ through life-groups that
              multiply.
            </p>
          </div>
          <div className="flex flex-row gap-5">
            <Link href="https://pushpay.com/g/vinechurchfl?src=hpp">
              <button className="sm:w-52 w-20 sm:h-10 h-7 sm:text-lg text-sm uppercase border rounded-md bg-purple-500">
                Give
              </button>
            </Link>
            <button className="sm:w-52 w-36 sm:h-10 h-7 sm:text-lg text-sm text-black uppercase sm:border border-none border-cyan-500 rounded-md bg-white">
              <Link href="/fast">Fasting</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
