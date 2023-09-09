import React from "react";
import StyledBtn from "./StyledBtn";
import Link from "next/link";

export default function ExperienceGiving() {
  return (
    <section className="w-full flex justify-center items-center my-40">
      <div className="max-w-7xl w-full flex flex-col justify-center items-center gap-10">
        <div className="w-[70%] flex flex-col justify-center items-center tracking-wider text-center gap-5">
          <h2 className="text-3xl font-bold uppercase">
            Experience <span className="font-normal">giving</span>
          </h2>
          <p className="">We embrace radical generosity</p>
          <p>
            We know it changes lives; ours and the people we are reaching. At
            Vine Church, taking action on your generosity is simple.
          </p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <Link href="https://pushpay.com/g/vinechurchfl?src=hpp">
            <StyledBtn name="Give Now" />
          </Link>
        </div>
      </div>
    </section>
  );
}
