"use client";
import { isDrawerOpenAtom } from "@/atoms/DrawerAtom";
import { Menu, Transition } from "@headlessui/react";
import { useSetAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import NavBarDrawer from "./NavBarDrawer";

export const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About",
    links: [
      {
        name: "Our Leadership",
        href: "/our-leadership",
      },
      {
        name: "Vision",
        href: "/vision",
      },
      {
        name: "beliefs",
        href: "/beliefs",
      },
    ],
  },
  {
    name: "Get Involved",
    links: [
      {
        name: "Baptism",
        href: "/baptism",
      },
      {
        name: "volunteers",
        href: "/volunteers",
      },
      {
        name: "worship",
        href: "/worship",
      },
      {
        name: "courses",
        href: "/courses",
      },
    ],
  },
  { name: "Calendar", href: "/calendar" },
  { name: "Give", href: "/give" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function NavBar() {
  const setIsDrawerOpen = useSetAtom(isDrawerOpenAtom);

  return (
    <Fragment>
      <nav className="w-full h-20 px-4 bg-navColor/50 flex justify-center items-center">
        <div className="max-w-7xl w-full flex items-center justify-between">
          <Link href="/" className="max-w-[150px] w-full">
            <Image
              className="w-full"
              src="/White1.png"
              alt="Vine Logo"
              width={150}
              height={150}
            />
          </Link>

          <button
            onClick={() => setIsDrawerOpen(true)}
            className="w-10 h-10 p-1 items-center justify-center flex lg:hidden"
          >
            <FiMenu className="w-full h-full text-white" />
          </button>

          <div className="w-fit items-center justify-center gap-4 hidden lg:flex">
            {navigation.map((item) => {
              if (item.links) {
                return (
                  <Menu
                    key={item.name}
                    as="div"
                    className="relative z-[99] inline-block text-left"
                  >
                    <Menu.Button className="flex items-center justify-center gap-1 text-[12px] font-normal font-plusJak uppercase">
                      {item.name}
                      <FiChevronDown />
                    </Menu.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right overflow-hidden rounded-[12px] border border-white border-opacity-5 bg-[rgba(50,_47,_47,_0.95);] shadow-[0px_5px_24px_-5px_rgba(14,_31,_53,_0.15);] uppercase">
                        {item.links.map((link, index) => (
                          <Menu.Item key={index}>
                            {({ active }) => (
                              <Link
                                href={link.href}
                                className={`${
                                  active
                                    ? "bg-[#282828] text-white"
                                    : "text-white"
                                } group flex w-full items-center px-4 py-3 text-[12px]`}
                              >
                                {link.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                );
              } else {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-[12px] font-normal font-plusJak uppercase"
                  >
                    {item.name}
                  </Link>
                );
              }
            })}

            {/* <StyledButton size="sm" variant="outlined">
              Member Login
            </StyledButton>

            <StyledButton size="sm">Join Now</StyledButton> */}
          </div>
        </div>
      </nav>

      <NavBarDrawer />
    </Fragment>
  );
}
