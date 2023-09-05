import React from "react";
import Image from "next/image";

export default function TopMenu() {
  return (
    // <section className="w-full absolute top-0 -z-10">
    <section className="w-full h-full relative">
      <div className="w-full sm:h-[70vh] flex flex-col justify-end items-center relative">
        {/* <div className="absolute -z-0 bg-gradient-to-t from-black to-transparent h-[70vh] w-full " /> */}
        <div className="max-w-5xl w-full flex flex-col justify-end items-center text-white gap-5">
          <Image
            className="absolute top-0 sm:w-[1048px] w-[400px] h-[550px] border rounded-[16px] object-cover"
            src="/images/DSC07961.jpg"
            alt="image"
            width={1048}
            height={550}
          />
          <div className="flex flex-col gap-5 sm:mb-44 mb-0 sm:mt-0 mt-[360px] ml-10">
            <div className="flex flex-col gap-1">
              <h2 className="sm:text-4xl text-xl font-bold uppercase z-0">
                Welcome <span className="font-extralight">home</span>
              </h2>
              <p className="sm:w-[70%] w-[90%] sm:text-md text-xs font-extralight tracking-widest z-0">
                Our burden is to edify a church of overcomers where every member
                is a minister and every house an extension of the Church thereby
                conquering our generations to Christ through life-groups that
                multiply.
              </p>
            </div>
            <div className="flex flex-row gap-5 relative">
              <button className="sm:w-52 w-20 sm:h-10 h-7 sm:text-lg text-sm uppercase border rounded-md bg-purple-500">
                Give
              </button>
              <button className="sm:w-52 w-36 sm:h-10 h-7 sm:text-lg text-sm text-black uppercase sm:border border-none border-cyan-500 rounded-md bg-white">
                Join Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="sm:w-full w-[65%] sm:flex hidden justify-center items-center text-center text-sm text-white font-extralight uppercase sm:mt-32 mt-10 z-0">
          Find our churches spread throughout the United States
        </div> */
}
{
  /* <div className="sm:w-full w-[70px] sm:flex hidden justify-center items-center mt-14 sm:gap-16 gap-10 z-0">
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
        </div> */
}
