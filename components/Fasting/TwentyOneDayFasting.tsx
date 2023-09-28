import React from "react";
import Link from "next/link";
import StyledBtn from "../StyledBtn";

export default function TwentyOneDayFasting() {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full flex flex-col">
        <div className="h-[60vh] bg-cover bg-no-repeat bg-bgFasting flex justify-center items-center text-center">
          <p className="w-[50%] text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            dignissimos repudiandae incidunt rerum beatae repellendus vel culpa
            molestias perferendis. Quod animi asperiores, ab neque quaerat cum
            dolorem nihil voluptatibus dolore.{" "}
          </p>
        </div>
        <div className="w-full flex flex-col justify-center item-center text-center my-20 gap-10">
          <h1 className="text-3xl font-bold uppercase">21 Days of Fasting</h1>
          <p>
            Tune into our Devotionals daily during the Fast for Encouragement
            and Vision during this Time.
          </p>
          <Link href="/podcast">
            <StyledBtn name="Listen to our Podcast" />
            {/* <button className="border border-purple-500 px-10 py-2 hover:border-slate-600">
                Listen our Podcast
              </button> */}
          </Link>
        </div>
      </div>
    </section>
  );
}
