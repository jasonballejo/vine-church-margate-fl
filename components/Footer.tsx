import React from "react";
import Link from "next/link";
import { BsTwitter, BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <section className="flex justify-center items-center bg-black py-10">
      <div className="px-3">
        <div className="w-full flex sm:justify-center justify-start sm:items-center items-start text-white gap-5 my-5">
          <Link href="https://twitter.com/vinechurchfl">
            <BsTwitter />
          </Link>
          <Link href="https://www.instagram.com/vinechurchfl">
            <BsInstagram />
          </Link>
          <Link href="https://www.facebook.com/VineChurchFL">
            <BsFacebook />
          </Link>
          <Link href="https://www.youtube.com/@VineChurchTV">
            <BsYoutube />
          </Link>
        </div>
        <div className="w-full flex sm:flex-row flex-col justify-center sm:items-center items-start sm:gap-20 gap-5 my-5">
          <div className=" text-white">
            <h4 className="text-lg font-bold uppercase">About</h4>
            <ul className="text-sm font-light my-2 hover:text-[var(--gold)]">
              <Link href="#">
                <li>Our Leadership</li>
              </Link>
            </ul>
            <ul className="text-sm font-light my-2 hover:text-[var(--gold)]">
              <Link href="#">
                <li>Vision</li>
              </Link>
            </ul>
            <ul className="text-sm font-light my-2 hover:text-[var(--gold)]">
              <Link href="#">
                <li>Beliefs</li>
              </Link>
            </ul>
            <ul className="text-sm font-light my-2 hover:text-[var(--gold)]">
              <Link href="#">
                <li>Worship</li>
              </Link>
            </ul>
          </div>
          <div className=" text-white">
            <h4 className="text-lg font-bold uppercase">Get Involved</h4>
            <ul className="text-sm font-light my-2 hover:text-[var(--gold)]">
              <Link href="#">
                <li>Life Group</li>
              </Link>
            </ul>
            <ul className="text-sm font-light my-2 hover:text-[var(--gold)]">
              <Link href="#">
                <li>Baptism</li>
              </Link>
            </ul>
            <ul className="text-sm font-light my-2 hover:text-[var(--gold)]">
              <Link href="#">
                <li>Volunteer</li>
              </Link>
            </ul>
            <ul className="text-sm font-light my-2 hover:text-[var(--gold)]">
              <Link href="#">
                <li>Courses</li>
              </Link>
            </ul>
          </div>
          <div className=" text-white">
            <h4 className="text-lg font-bold uppercase">More</h4>
            <ul className="text-sm font-light my-2 hover:text-[var(--gold)]">
              <Link href="#">
                <li>Enjoy MVT</li>
              </Link>
            </ul>
            <ul className="text-sm font-light my-2 hover:text-[var(--gold)]">
              <Link href="https://vinechurchfl.churchcenter.com/calendar?view=list">
                <li>Calendar</li>
              </Link>
            </ul>
            <ul className="text-sm font-light my-2 hover:text-[var(--gold)]">
              <Link href="https://pushpay.com/g/vinechurchfl?src=hpp">
                <li>Give</li>
              </Link>
            </ul>
            <ul className="text-sm font-light my-2 hover:text-[var(--gold)]">
              <Link href="#">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center sm:items-center items-start text-xs font-extralight tracking-widest text-white">
          <p>5000 Coconut Creek Pkwy, Margate, FL 33063</p>
          <p>
            © {new Date().getFullYear()} Vine Church Florida | All Rights
            Reserved
          </p>
        </div>
      </div>
    </section>
  );
}
