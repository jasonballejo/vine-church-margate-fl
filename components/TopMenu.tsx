import React from "react";

export default function TopMenu() {
  return (
    <section className="w-full absolute top-0 -z-10">
      <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-t from-purple-500 to-cyan-500">
        <div className="w-[50%] flex flex-col justify-center items-center text-center text-white gap-5">
          <h2 className="text-6xl font-bold uppercase">
            Welcome <span className="font-extralight">home</span>
          </h2>
          <p className="tracking-widest">
            Our burden is to edify a church of overcomers where every member is
            a minister and every house an extension of the Church thereby
            conquering our generations to Christ through life-groups that
            multiply
          </p>
          <div className="flex gap-5">
            <button>Button1</button>
            <button>Button2</button>
          </div>
        </div>
      </div>
    </section>
  );
}
