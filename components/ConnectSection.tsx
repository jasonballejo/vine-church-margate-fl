import React from "react";
import Image from "next/image";
import Link from "next/link";
import StyledBtn from "./StyledBtn";

export default function ConnectSection() {
  return (
    <section className="w-full flex justify-center items-center my-5 relative z-10 sm:mt-0 mt-5 sm:px-0 px-3">
      <div className="max-w-5xl w-full flex sm:flex-row flex-col justify-between items-center sm:gap-0 gap-3">
        <div className="sm:w-[330px] w-full sm:h-[450px] h-full justify-center border rounded-[16px] overflow-hidden">
          <Image
            src="/images/DSC09496.jpg"
            alt="Vernon"
            width={600}
            height={350}
          />
          <div className="w-full flex flex-col justify-center items-center px-3 py-3 gap-3">
            <h4>Service Times</h4>
            <p>
              Bring your family and friends. <br />
              We can&apos;t wait to see you!
            </p>
            <Link href="#">
              <StyledBtn name="Saturday: 7:30pm" />
            </Link>
            <Link href="#">
              <StyledBtn name="Sunday: 10:30am" />
            </Link>
          </div>
        </div>
        <div className="sm:w-[330px] w-full sm:h-[450px] h-full justify-center border rounded-[16px] overflow-hidden">
          <Image
            src="/images/DSC09496.jpg"
            alt="Vernon"
            width={600}
            height={350}
          />
          <div className="w-full flex flex-col justify-center items-center px-3 py-3 gap-3">
            <h4>Get Involved</h4>
            <p>
              New to the church? Just met Jesus? Don&apos;t believe yet?
              You&apos;re in the right place. The Church is for everyone; from
              the fameless to the famous...
            </p>
            <Link href="#">
              <StyledBtn name="Connect" />
            </Link>
          </div>
        </div>
        <div className="sm:w-[330px] w-full sm:h-[450px] h-full justify-center border rounded-[16px] overflow-hidden">
          <Image
            src="/images/DSC09496.jpg"
            alt="Vernon"
            width={600}
            height={350}
          />
          <div className="w-full flex flex-col justify-center items-center px-3 py-3 gap-3">
            <h4>Service Times</h4>
            <p>
              Bring your family and friends. <br />
              We can&apos;t wait to see you!
            </p>
            <Link href="#">
              <StyledBtn name="Saturday: 7:30pm" />
            </Link>
            <Link href="#">
              <StyledBtn name="Sunday: 10:30am" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="flex flex-col justify-center items-center gap-10">
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
            className="border rounded-[16px]"
            src="/images/DSC09496.jpg"
            alt="Vernon"
            width={600}
            height={350}
          />
        </div> */
}
