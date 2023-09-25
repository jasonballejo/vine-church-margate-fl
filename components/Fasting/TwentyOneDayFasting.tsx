import React from "react";
import Link from "next/link";

export default function TwentyOneDayFasting() {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full flex flex-col">
        <div className="h-[60vh] bg-cover bg-no-repeat bg-bgFasting flex justify-center items-center text-center">
          <p className="w-[50%] text-white">The Year 2023 is </p>
        </div>
        <div className="w-full flex flex-col justify-center item-center text-center my-20 gap-10">
          <h1 className="text-3xl font-bold uppercase">21 Days of Fasting</h1>
          <p>
            Tune into our Devotionals daily during the Fast for Encouragement
            and Vision during this Time.
          </p>
          <p>
            <button className="border border-purple-500 px-10 py-2 hover:border-slate-600">
              <Link href="/spotify">Spotify</Link>
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
