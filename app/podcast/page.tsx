"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillPlayFill } from "react-icons/bs";
import { FaHeadphonesAlt } from "react-icons/fa";

interface PodcastSpotlightProps {
  image: string;
  title: string;
  date: string;
  description: string;
  href: string;
}

function PodcastSpotlight({
  image,
  title,
  date,
  description,
  href,
}: PodcastSpotlightProps) {
  return (
    <div className="w-full h-[60vh] grid grid-cols-2 items-center justify-items-center gap-10 py-16 pr-20 pl-32">
      <div className="flex flex-col justify-center items-start text-white gap-1">
        <h1 className="text-[40px] font-bold uppercase">{title}</h1>
        <p>{date}</p>
        <p className="w-[90%]">{description}</p>
        <div className="flex flex-col justify-center items-center mt-5">
          <button className="flex justify-center items-center border rounded-[6px] py-3 px-8 mb-2">
            <Link href={href}>
              <FaHeadphonesAlt />
            </Link>
          </button>
          <p>Listen</p>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <Image
          className="rounded-[12px]"
          src={image}
          alt={title}
          width={450}
          height={250}
        ></Image>
      </div>
    </div>
  );
}

interface PodcastLowerProps {
  image: string;
  title: string;
  href: string;
}

function PodcastList({ image, title, href }: PodcastLowerProps) {
  return (
    <>
      <div className="text-white flex flex-col justify-center gap-3">
        <Link href={href}>
          {" "}
          <Image
            className="h-[200px] rounded-[12px] object-center"
            src={image}
            alt={`${title} image`}
            width={300}
            height={200}
          />
        </Link>
        <p>{title}</p>
      </div>
    </>
  );
}

export default function Podcast() {
  return (
    <section className=" w-full h-[100vh] bg-cover bg-no-repeat bg-gradient-to-r from-cyan-600 to-gray-300">
      <PodcastSpotlight
        title="Build a House"
        date="09/12/2023"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officia dolore provident rerum, accusamus voluptates, alias earum eaque distinctio eligendi minus blanditiis quo perferendis natus unde laborum numquam veritatis minima?"
        href="https://open.spotify.com/episode/4FixqWjONVWfPIaWOOSxv0?si=51ad84f4a87a43b0"
        image="/images/podcast-vine.png"
      />
      {/* Bottom Part */}
      <div className="w-full h-[40vh] bg-cover bg-no-repeat bg-gradient-to-l from-cyan-600 to-gray-200">
        <h2 className="text-[25px] text-white font-bold pl-20 pt-10">
          Related Items
        </h2>
        <div className="w-full flex items-center justify-between gap-16 pt-7 px-20">
          <PodcastList
            title="Background People"
            image="/images/podcast-vine.png"
            href="https://open.spotify.com/episode/4LhPqb782m5D1MWnc2BZgU?si=16544a6671024569"
          />
          <PodcastList
            title="Background People"
            image="/images/podcast-vine.png"
            href="https://open.spotify.com/episode/4LhPqb782m5D1MWnc2BZgU?si=16544a6671024569"
          />
          <PodcastList
            title="Background People"
            image="/images/podcast-vine.png"
            href="https://open.spotify.com/episode/4LhPqb782m5D1MWnc2BZgU?si=16544a6671024569"
          />
          <PodcastList
            title="Background People"
            image="/images/podcast-vine.png"
            href="https://open.spotify.com/episode/4LhPqb782m5D1MWnc2BZgU?si=16544a6671024569"
          />
        </div>
      </div>
    </section>
  );
}
