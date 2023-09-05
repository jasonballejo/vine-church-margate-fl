import React from "react";
import Link from "next/link";
import { BsTwitter, BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <section className="flex justify-center items-center bg-black py-10">
      <div className="px-3">
        <div className="w-full flex justify-center items-center text-white gap-5 my-5">
          <Link href="#">
            <BsTwitter />
          </Link>
          <Link href="#">
            <BsInstagram />
          </Link>
          <Link href="#">
            <BsFacebook />
          </Link>
          <Link href="#">
            <BsYoutube />
          </Link>
        </div>
        <div className="w-full flex justify-center items-center gap-20 my-5">
          <div className=" text-white">
            <h4 className="text-lg font-bold uppercase">About</h4>
            <ul className="text-sm font-light my-2">
              <Link href="#">
                <li>Our Leadership</li>
              </Link>
            </ul>
            <ul className="text-sm font-light my-2">
              <Link href="#">
                <li>Vision</li>
              </Link>
            </ul>
            <ul className="text-sm font-light my-2">
              <Link href="#">
                <li>Beliefs</li>
              </Link>
            </ul>
            <ul className="text-sm font-light my-2">
              <Link href="#">
                <li>Worship</li>
              </Link>
            </ul>
          </div>
          <div className=" text-white">
            <h4 className="text-lg font-bold uppercase">Get Involved</h4>
            <ul className="text-sm font-light my-2">
              <Link href="#">
                <li>Life Group</li>
              </Link>
            </ul>
            <ul className="text-sm font-light my-2">
              <Link href="#">
                <li>Baptism</li>
              </Link>
            </ul>
            <ul className="text-sm font-light my-2">
              <Link href="#">
                <li>Volunteer</li>
              </Link>
            </ul>
            <ul className="text-sm font-light my-2">
              <Link href="#">
                <li>Courses</li>
              </Link>
            </ul>
          </div>
          <div className=" text-white">
            <h4 className="text-lg font-bold uppercase">More</h4>
            <ul className="text-sm font-light my-2">
              <Link href="#">
                <li>Enjoy MVT</li>
              </Link>
            </ul>
            <ul className="text-sm font-light my-2">
              <Link href="#">
                <li>Calendar</li>
              </Link>
            </ul>
            <ul className="text-sm font-light my-2">
              <Link href="#">
                <li>Give</li>
              </Link>
            </ul>
            <ul className="text-sm font-light my-2">
              <Link href="#">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-xs font-extralight tracking-widest text-white">
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
