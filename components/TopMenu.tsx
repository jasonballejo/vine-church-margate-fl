import React from "react";
import Image from "next/image";

export default function TopMenu() {
  return (
    // <section className="w-full absolute top-0 -z-10">
    <section className="w-full h-full">
      <div className="relative w-full sm:h-[70vh] flex flex-col justify-end items-center">
        {/* <div className="absolute -z-0 bg-gradient-to-t from-black to-transparent h-[70vh] w-full " /> */}
        <Image
          className="absolute top-0 sm:w-[1048px] w-[400px] h-[550px] z-0 border rounded-[16px] object-cover"
          src="/images/DSC07961.jpg"
          alt="image"
          width={1048}
          height={550}
        />
        <div className="max-w-5xl sm:w-full w-[70%] flex flex-col justify-end sm:items-center items-start text-white gap-5">
          <div className="flex flex-col gap-5 sm:mb-32 mb-0 sm:ml-10 ml-0 z-0">
            <div className="flex flex-col z-0 gap-1">
              <h2 className="sm:text-4xl text-xl font-bold uppercase z-0">
                Welcome <span className="font-extralight">home</span>
              </h2>
              <p className="w-[70%] sm:text-md text-xs font-extralight tracking-widest z-0">
                Our burden is to edify a church of overcomers where every member
                is a minister and every house an extension of the Church thereby
                conquering our generations to Christ through life-groups that
                multiply.
              </p>
            </div>
            <div className="flex gap-5 z-0">
              <button className="w-52 h-10 text-lg uppercase border rounded-md">
                Give
              </button>
              <button className="w-52 h-10 text-lg uppercase border border-cyan-500 rounded-md">
                Join Online
              </button>
            </div>
          </div>
        </div>
        {/* <div className="sm:w-full w-[65%] sm:flex hidden justify-center items-center text-center text-sm text-white font-extralight uppercase sm:mt-32 mt-10 z-0">
          Find our churches spread throughout the United States
        </div> */}
        {/* <div className="sm:w-full w-[70px] sm:flex hidden justify-center items-center mt-14 sm:gap-16 gap-10 z-0">
          <Images
            src="/churchLogos/LOGO-VIDEIRA-INGLES-HORZT.png"
            alt=""
            width={150}
            height={30}
          />
          <Images
            src="/churchLogos/LOGO-VIDEIRA-INGLES-HORZT.png"
            alt=""
            width={150}
            height={30}
          />
          <Images
            src="/churchLogos/LOGO-VIDEIRA-INGLES-HORZT.png"
            alt=""
            width={150}
            height={30}
          />
          <Images
            src="/churchLogos/LOGO-VIDEIRA-INGLES-HORZT.png"
            alt=""
            width={150}
            height={30}
          />
          <Images
            src="/churchLogos/LOGO-VIDEIRA-INGLES-HORZT.png"
            alt=""
            width={150}
            height={30}
          />
        </div> */}
      </div>
    </section>
  );
}
