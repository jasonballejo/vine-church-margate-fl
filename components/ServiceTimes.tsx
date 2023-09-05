import React from "react";
import Image from "next/image";
import StyledBtn from "./StyledBtn";

export default function ServiceTimes() {
  return (
    <section className="w-full flex justify-center items-center my-5 relative z-10 sm:mt-0 mt-20">
      <div className="max-w-5xl w-full flex sm:flex-row flex-col justify-center items-center text-center px-3 gap-10">
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-3xl font-bold tracking-wider">
              <span className="font-normal">Service</span> Times
            </h1>
            <p className="text-lg tracking-wider">
              Bring your family and friends. <br />
              We can&apos;t wait to see you!
            </p>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="">
              <h3 className="mb-1">Saturday</h3>
              <StyledBtn name="7:30pm" />
            </div>
            <div className="">
              <h3 className="mb-1">Sunday</h3>
              <StyledBtn name="10:30am" />
            </div>
          </div>
        </div>
        <div className="sm:w-[600px] w-full">
          <Image
            src="/images/DSC09496.jpg"
            alt="Vernon"
            width={600}
            height={350}
          />
        </div>
      </div>
    </section>
  );
}
