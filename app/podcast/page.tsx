"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import Image from "next/image";
import Link from "next/link";
// import { BsFillPlayFill } from "react-icons/bs";
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
    <div className="w-full sm:h-[60vh] h-[90vh] sm:grid sm:grid-cols-2 flex flex-col-reverse items-center justify-items-center gap-10 py-16 sm:pr-20 sm:pl-32 sm:px-0 px-8">
      <div className="flex flex-col justify-center sm:items-start items-center sm:text-left text-center text-white gap-1">
        <h1 className="sm:text-[64px] text-2xl font-bold uppercase">{title}</h1>
        <p className="sm:text-[15px] text-[12px] font-light sm:pt-4 pt-0">
          {date}
        </p>
        <p className="w-[90%] sm:text-[16px] text-[14px]">{description}</p>
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
          className="sm:w-[450px] w-[300px] sm:h-[450px] h-[250px] rounded-[12px]"
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
      <div className="flex flex-col justify-center gap-3">
        <Link href={href}>
          <Image
            className="h-[200px] rounded-[12px] object-top"
            src={image}
            alt={`${title} image`}
            width={300}
            height={200}
          />
        </Link>
        <p className="text-black">{title}</p>
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
        image="/images/fasting.png"
      />
      {/* Bottom Part */}
      <div className="w-full h-[40vh] bg-cover bg-no-repeat bg-gradient-to-l from-cyan-600 to-gray-200 mb-20">
        <h2 className="text-[25px] text-black font-bold pl-20 pt-10">
          Related Items
        </h2>
        <div className="w-full flex items-center justify-between gap-16 pt-7 mb-20 px-20">
          <Swiper
            navigation={true}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <PodcastList
                title="Background People"
                image="/images/fasting.png"
                href="https://open.spotify.com/episode/4LhPqb782m5D1MWnc2BZgU?si=16544a6671024569"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PodcastList
                title="Background People"
                image="/images/fasting.png"
                href="https://open.spotify.com/episode/4LhPqb782m5D1MWnc2BZgU?si=16544a6671024569"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PodcastList
                title="Background People"
                image="/images/fasting.png"
                href="https://open.spotify.com/episode/4LhPqb782m5D1MWnc2BZgU?si=16544a6671024569"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PodcastList
                title="Background People"
                image="/images/fasting.png"
                href="https://open.spotify.com/episode/4LhPqb782m5D1MWnc2BZgU?si=16544a6671024569"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
