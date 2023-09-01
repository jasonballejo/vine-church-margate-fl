import React from "react";
import Images from "next/image";

export default function TopMenu() {
  return (
    <section className="w-full absolute top-0 -z-10">
      <div className="w-full h-[70vh] flex flex-col justify-center items-center bg-[url('/images/DSC07961.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="absolute -z-0 bg-gradient-to-t from-black to-transparent h-[70vh] w-full " />
        <div className="w-[50%] flex flex-col justify-center items-center text-center text-white gap-5 z-0">
          <h2 className="text-6xl font-bold uppercase">
            Welcome <span className="font-extralight">home</span>
          </h2>
          <p className="font-extralight tracking-widest">
            Our burden is to edify a church of overcomers where every member is
            a minister and every house an extension of the Church thereby
            conquering our generations to Christ through life-groups that
            multiply
          </p>
          <div className="flex gap-5">
            <button className="w-52 h-10 text-lg uppercase border rounded-md">
              Give
            </button>
            <button className="w-52 h-10 text-lg uppercase border border-cyan-500 rounded-md">
              Join Online
            </button>
          </div>
        </div>
        <div className="text-sm text-white font-extralight uppercase mt-32 z-0">
          Find our churches spread throughout the United States
        </div>
        <div className="sm:w-full flex justify-center items-center mt-14 gap-16 z-0">
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
