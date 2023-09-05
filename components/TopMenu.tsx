import React from "react";
import Images from "next/image";

export default function TopMenu() {
  return (
    // <section className="w-full absolute top-0 -z-10">
    <section className="w-full top-0 -z-10">
      <div className="w-full h-[70vh] flex flex-col justify-center items-center bg-[url('/images/DSC07961.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="absolute -z-0 bg-gradient-to-t from-black to-transparent h-[70vh] w-full " />
        <div className="sm:w-[50%] w-[70%] flex flex-col justify-center items-center text-center text-white gap-5 z-0">
          <h2 className="sm:text-6xl text-xl font-bold uppercase">
            Welcome <span className="font-extralight">home</span>
          </h2>
          <p className="sm:text-lg text-md font-extralight tracking-widest">
            Our burden is to edify a church of overcomers where every member is
            a minister and every house an extension of the Church thereby
            conquering our generations to Christ through life-groups that
            multiply
          </p>
          <div className="flex sm:flex-row flex-col gap-5">
            <button className="w-52 h-10 text-lg uppercase border rounded-md">
              Give
            </button>
            <button className="w-52 h-10 text-lg uppercase border border-cyan-500 rounded-md">
              Join Online
            </button>
          </div>
        </div>
        <div className="sm:w-full w-[65%] sm:flex hidden justify-center items-center text-center text-sm text-white font-extralight uppercase sm:mt-32 mt-10 z-0">
          Find our churches spread throughout the United States
        </div>
        <div className="sm:w-full w-[70px] sm:flex hidden justify-center items-center mt-14 sm:gap-16 gap-10 z-0">
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
        </div>
      </div>
    </section>
  );
}
