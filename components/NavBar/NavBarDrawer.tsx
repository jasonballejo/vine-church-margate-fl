import { isDrawerOpenAtom } from "@/atoms/DrawerAtom";
import { Disclosure } from "@headlessui/react";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { FaFacebookF, FaLinkedinIn, FaPodcast } from "react-icons/fa";
import { FiChevronDown, FiUser, FiX } from "react-icons/fi";
import { useLockedBody } from "usehooks-ts";
import { navigation } from "./NavBar";
import NavbarDrawerLine from "./NavbarDrawerLine";

export default function NavBarDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useAtom(isDrawerOpenAtom);

  useLockedBody(isDrawerOpen, "root");

  const pathname = usePathname();

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname, setIsDrawerOpen]);

  return (
    <div
      className={`w-full h-screen bg-bgDrawer bg-center bg-no-repeat object-contain fixed top-0 bottom-0 z-[99] flex flex-col items-center justify-start px-4 border-l border-l-white border-opacity-10 ${
        isDrawerOpen ? "right-0" : "right-[-100%]"
      } transition-all duration-300 overflow-x-hidden`}
    >
      {/* <div className="w-[447px] h-[136px] flex items-center justify-center absolute left-[-131px] bottom-[254px] z-0">
        <NavbarDrawerLines />
      </div> */}

      <div className="w-full pt-6 flex items-center justify-between relative z-10">
        <Image
          className="max-w-[180px] w-full"
          src="/White1.png"
          alt="SWTL Logo"
          width={220}
          height={44}
        />

        <button
          onClick={() => setIsDrawerOpen(false)}
          className="w-10 h-10 p-1 items-center justify-center flex lg:hidden"
        >
          <FiX className="w-full h-full text-white" />
        </button>
      </div>

      <div className="w-full mt-20 flex flex-col items-center gap-6 relative z-10">
        {navigation.map((item) => {
          if (item.links) {
            return (
              <Disclosure key={item.name}>
                {({ open }) => (
                  <div className="w-full flex flex-col gap-3">
                    <Disclosure.Button className="w-full flex items-center justify-center gap-1 text-base font-normal font-plusJak uppercase text-white">
                      {item.name}
                      <FiChevronDown
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 transition-all duration-300`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="w-full border-b border-b-white border-opacity-10">
                      {item.links.map((link, index) => (
                        <Link
                          key={index}
                          href={link.href}
                          className="text-white group flex w-full items-center justify-center py-3 text-base hover:text-[var(--gold)] uppercase"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            );
          } else {
            return (
              <Link
                key={item.name}
                href={item.href}
                className="text-base text-white font-normal font-plusJak uppercase"
              >
                {item.name}
              </Link>
            );
          }
        })}
      </div>

      <div className="w-full mt-auto flex flex-col gap-6 relative z-10">
        {/* <button className="text-base text-black font-normal font-plusJak uppercase w-full flex items-center justify-center gap-1">
          <FiUser className="h-5 w-5" />
          Member Login
        </button> */}

        <div className="w-full py-6 border-t border-white text-white flex flex-col">
          <div className="w-full flex items-center justify-start gap-4">
            <p>Follow Us:</p>

            <span className="flex items-center justify-start gap-4">
              <Link
                className="w-8 h-8 p-1.5 border border-white rounded-md flex items-center justify-center"
                href="#"
                target="_blank"
              >
                <FaFacebookF className="w-full h-full text-white" />
              </Link>

              <Link
                className="w-8 h-8 p-1.5 border border-white rounded-md flex items-center justify-center"
                href="#"
                target="_blank"
              >
                <FaLinkedinIn className="w-full h-full text-white" />
              </Link>

              <Link
                className="w-8 h-8 p-1.5 border border-white rounded-md flex items-center justify-center"
                href="#"
                target="_blank"
              >
                <FaPodcast className="w-full h-full text-white" />
              </Link>
            </span>
          </div>

          <p className="text-[12px] text-white text-center tracking-wide mt-4 mb-2">
            © {new Date().getFullYear()} Vine International Ministries: Vine
            Church | All Rights Reserved
          </p>

          <span className="w-full flex items-center justify-start gap-1">
            {/* <p className="text-white text-sm">Powered by The Ballejo Group</p> */}
            {/* <Image
              className="max-w-[160px]"
              width={266}
              height={32}
              src="/tcg-logo.png"
              alt="The Casely Group Logo"
            /> */}
          </span>
        </div>
      </div>
    </div>
  );
}
