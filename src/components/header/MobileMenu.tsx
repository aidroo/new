/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
"use client";

import Image from "next/image";
import Link from "next/link";
import { RefObject, useEffect, useRef, useState } from "react";

import search from "@/app/assets/header/search.json";
import logo from "@/app/assets/icons/ev.svg";

import { X } from "lucide-react";
import LottieComponent from "../Lottie";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [humberOpen, setHumberOpen] = useState(false);
  const searchRef: RefObject<HTMLDivElement> = useRef(null);
  const searchToggleRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node) &&
        searchToggleRef.current &&
        !searchToggleRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSearch = () => {
    setOpen(!open);
  };

  //   const currentUser = true; // Mock current user for rendering purposes

  return (
    <div className="w-full lg:hidden block bg-[#002A64] border-0">
      {/* Mobile Menu */}

      <Sheet onOpenChange={() => setHumberOpen(!humberOpen)}>
        <div className="flex justify-between h-[72px] items-center text-lg">
          <div className="w-24 ps-2">
            <Link href="/" className="logo col-span-1">
              <Image src={logo} alt="logo" width={60} height={60} />
            </Link>
          </div>

          <div className="flex gap-4 items-center pr-4">
            <div
              ref={searchToggleRef}
              onClick={toggleSearch}
              className="w-9 h-9 rounded-md flex justify-center items-center text-primary_color border border-primary_color transition duration-300 ease-in-out relative"
            >
              <div
                className={`absolute transition-all duration-300 ease-in-out ${
                  open ? "opacity-0 scale-0" : "opacity-100 scale-100"
                }`}
              >
                <LottieComponent animationData={search} loop={!open} />
              </div>
              <X
                className={`absolute transition-all duration-300 ease-in-out ${
                  open ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
              />
            </div>

            <SheetTrigger asChild className="">
              <button
                className="relative w-9 h-8  focus:outline-none   flex justify-center items-center border border-primary_color rounded-md  "
                aria-label="Toggle menu"
              >
                <div className="absolute w-6 transform -ml-6  ">
                  <span
                    className={`absolute h-0.5 w-6 bg-primary_color transform transition duration-200 ease-in-out ${
                      humberOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
                    }`}
                  ></span>
                  <span
                    className={`absolute h-0.5 bg-primary_color transform transition-all duration-200 ease-in-out ${
                      humberOpen
                        ? "w-0 opacity-50"
                        : "w-6 delay-200 opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`absolute h-0.5 w-6 bg-primary_color transform transition duration-200 ease-in-out ${
                      humberOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
                    }`}
                  ></span>
                </div>
              </button>
            </SheetTrigger>
          </div>

          <div
            ref={searchRef}
            className={`absolute top-[78px] left-1/2 -translate-x-1/2   rounded-md  w-[80%] h-fit 
    transition-all duration-300 ease-in-out bg-white shadow-[0_8px_24px_rgba(149,157,165,0.2)] border border-gray-200 ${
      open
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-2 pointer-events-none"
    }`}
          >
            <Input
              placeholder="Search"
              className="w-full focus:outline-none focus-visible:ring-1 focus-visible:ring-primary_color overflow-hidden focus-visible:ring-offset-0"
            />
          </div>
        </div>

        {/* Search Overlay */}

        <SheetContent className="w-[260px] px-0" side="left">
          <SheetHeader className="flex justify-center items-center h-24 bg-[#002A64]">
            <div className="w-32">
              <Link href="/" className="logo">
                <Image src={logo} alt="logo" width={100} height={100} />
              </Link>
            </div>
          </SheetHeader>

          <ScrollArea className="h-[calc(100vh-100px)] bg-slate-100">
            <Accordion type="single" collapsible className="w-full">
              <div className="px-4 space-y-4 py-4 text-sm">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="flex items-center gap-4 pb-2">
                    <h1 className="hover:text-primary_color transition duration-300">
                      For Drivers
                    </h1>
                  </AccordionTrigger>
                  <AccordionContent className="pl-8 transition duration-300">
                    <ul className="flex flex-col gap-3">
                      <Link
                        href="#"
                        className="hover:text-primary_color transition duration-300"
                      >
                        <li className="cursor-pointer">Charge at Home</li>
                      </Link>
                      <Link
                        href={`#`}
                        className="hover:text-primary_color transition duration-300"
                      >
                        <li className="cursor-pointer">Charge at Workplace</li>
                      </Link>
                      <Link
                        href="#"
                        className="hover:text-primary_color transition duration-300"
                      >
                        <li className="cursor-pointer">Home aftercare</li>
                      </Link>
                      <Link
                        href="#"
                        className="hover:text-primary_color transition duration-300"
                      >
                        <li className="cursor-pointer">Grant Qualification</li>
                      </Link>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="flex items-center gap-4 pb-2">
                    <h1 className="hover:text-primary_color transition duration-300">
                      For Organizations
                    </h1>
                  </AccordionTrigger>
                  <AccordionContent className="pl-8 transition duration-300">
                    <ul className="flex flex-col gap-3">
                      <Link
                        href="#"
                        className="hover:text-primary_color transition duration-300"
                      >
                        <li className="cursor-pointer">Workplace charging</li>
                      </Link>
                      <Link
                        href={`#`}
                        className="hover:text-primary_color transition duration-300"
                      >
                        <li className="cursor-pointer">Workplace Aftercare</li>
                      </Link>
                      <Link
                        href="#"
                        className="hover:text-primary_color transition duration-300"
                      >
                        <li className="cursor-pointer">Public Charging</li>
                      </Link>
                      <Link
                        href="#"
                        className="hover:text-primary_color transition duration-300"
                      >
                        <li className="cursor-pointer">
                          Vehicle retailers form
                        </li>
                      </Link>
                      <Link
                        href="#"
                        className="hover:text-primary_color transition duration-300"
                      >
                        <li className="cursor-pointer">specialist Charging</li>
                      </Link>
                      <Link
                        href="#"
                        className="hover:text-primary_color transition duration-300"
                      >
                        <li className="cursor-pointer">Vehicle Telematics</li>
                      </Link>
                      <Link
                        href="#"
                        className="hover:text-primary_color transition duration-300"
                      >
                        <li className="cursor-pointer">
                          House builders charging
                        </li>
                      </Link>
                      <Link
                        href="#"
                        className="hover:text-primary_color transition duration-300"
                      >
                        <li className="cursor-pointer">Fleet transformation</li>
                      </Link>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <Link
                  href="#"
                  className="flex items-center gap-2 border-b border-gray-300 pb-4 hover:text-primary_color transition duration-300"
                >
                  <h1>Ev Cyber Security</h1>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 border-b border-gray-300 pb-4 hover:text-primary_color transition duration-300"
                >
                  <h1>evchargeserve</h1>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 border-b border-gray-300 pb-4 hover:text-primary_color transition duration-300"
                >
                  <h1>Cyber Security</h1>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 border-b border-gray-300 pb-4 hover:text-primary_color transition duration-300"
                >
                  <h1>Partnership</h1>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 border-b border-gray-300 pb-4 hover:text-primary_color transition duration-300"
                >
                  <h1>More</h1>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 border-b border-gray-300 pb-4 hover:text-primary_color transition duration-300"
                >
                  <h1>About us</h1>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 border-b border-gray-300 pb-4 hover:text-primary_color transition duration-300"
                >
                  <h1>Contact us</h1>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 border-b border-gray-300 pb-4 hover:text-primary_color transition duration-300"
                >
                  <h1>Privacy Policy</h1>
                </Link>
              </div>
            </Accordion>
            {/* <div className="flex flex-col gap-4 px-4">
              {!currentUser ? (
                <>
                  <Button className="w-full">Login</Button>
                  <Button className="w-full">Register</Button>
                </>
              ) : (
                <Button className="w-full">Logout</Button>
              )}
            </div> */}
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}
