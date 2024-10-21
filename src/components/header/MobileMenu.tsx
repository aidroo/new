"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "@/app/assets/icons/ev.svg";

import { BellElectric, Search, User, X } from "lucide-react";
import { useState } from "react";
import LottieComponent from "../Lottie";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Avatar } from "../ui/avatar";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ScrollArea } from "../ui/scroll-area";
import {
  bolfish,
  charging,
  evcar2,
  evcar3,
  EvChargingstation,
  EvCyberSecurity,
  more,
  partnership,
  workplace,
} from "./json-icons";

// Menu Data with icons
const menuItems = [
  {
    title: "evchargepoints",
    href: "#",
    icon: (
      <div className="w-7 h-7">
        <LottieComponent animationData={EvChargingstation} />
      </div>
    ),
    subItems: [
      {
        title: "For Drivers",
        icon: (
          <div className="w-8 h-8">
            <LottieComponent animationData={evcar2} />
          </div>
        ),
        links: [
          {
            label: "Charge at Home",
            href: "#",
            icon: (
              <div className="w-6 h-6">
                <Image src={charging} alt="charging" width={24} height={28} />
              </div>
            ),
          },
          {
            label: "Charge at Workplace",
            href: "#",
            icon: (
              <div className="w-6 h-6">
                <Image src={workplace} alt="charging" width={24} height={28} />
              </div>
            ),
          },
          {
            label: "Home aftercare",
            href: "#",
            icon: (
              <div className="w-6 h-6">
                <LottieComponent animationData={bolfish} />
              </div>
            ),
          },
          {
            label: "Grant Qualification",
            href: "#",
            icon: (
              <div className="w-7 h-7">
                <LottieComponent animationData={evcar2} />
              </div>
            ),
          },
        ],
      },
      {
        title: "For Organizations",

        icon: (
          <div className="w-7 h-7">
            <LottieComponent animationData={evcar2} />
          </div>
        ),
        links: [
          {
            label: "Workplace Charging",
            href: "#",
            icon: (
              <div className="w-7 h-7">
                <LottieComponent animationData={evcar2} />
              </div>
            ),
          },
          {
            label: "Workplace Aftercare",
            href: "#",
            icon: (
              <div className="w-7 h-7">
                <Image src={workplace} alt="charging" width={24} height={28} />
              </div>
            ),
          },
          {
            label: "Public Charging",
            href: "#",
            icon: (
              <div className="w-7 h-7">
                <LottieComponent animationData={evcar2} />
              </div>
            ),
          },
          {
            label: "Vehicle Retailers Form",
            href: "#",
            icon: (
              <div className="w-7 h-7">
                <LottieComponent animationData={evcar2} />
              </div>
            ),
          },
          {
            label: "Specialist Charging",
            href: "#",
            icon: (
              <div className="w-7 h-7">
                <LottieComponent animationData={evcar2} />
              </div>
            ),
          },
          {
            label: "Vehicle Telematics",
            href: "#",
            icon: (
              <div className="w-7 h-7">
                <LottieComponent animationData={evcar2} />
              </div>
            ),
          },
          {
            label: "Grant Qualification",
            href: "#",
            icon: (
              <div className="w-7 h-7">
                <LottieComponent animationData={evcar2} />
              </div>
            ),
          },
        ],
      },
      {
        title: "Shop Now",
        icon: (
          <div className="w-7 h-7">
            <LottieComponent animationData={evcar3} />
          </div>
        ),
        links: [
          {
            label: "Products",
            href: "#",
            icon: (
              <div className="w-7 h-7">
                <LottieComponent animationData={evcar2} />
              </div>
            ),
          },
          {
            label: "Start your Order",
            href: "#",
            icon: (
              <div className="w-7 h-7">
                <LottieComponent animationData={evcar2} />
              </div>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Ev Cyber Security",
    icon: (
      <div className="w-7 h-7">
        <LottieComponent animationData={EvCyberSecurity} />
      </div>
    ),
    subItems: [
      {
        title: "evchargeserve",
        href: "#",
        icon: <BellElectric className="w-5 h-5" />,
        links: [
          {
            label: "evchargeserve",
            href: "#",
            icon: (
              <div className="w-7 h-7">
                <LottieComponent animationData={evcar2} />
              </div>
            ),
          },
        ],
      },
      {
        title: "evchargeserve",
        href: "#",
        icon: <BellElectric className="w-5 h-5" />,
        links: [
          {
            label: "evchargeserve",
            href: "#",
            icon: (
              <div className="w-7 h-7">
                <LottieComponent animationData={evcar2} />
              </div>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Partnership",
    href: "#",
    icon: (
      <div className="w-7 h-7">
        <LottieComponent animationData={partnership} />
      </div>
    ),
  },
  {
    title: "More",
    href: "#",
    icon: (
      <div className="w-4 h-4 ml-1 mr-4">
        <LottieComponent animationData={more} />
      </div>
    ),
    subItems: [
      {
        title: "About Us",
        href: "#",
        icon: <BellElectric className="w-5 h-5" />,
        links: [],
      },
      {
        title: "Contact Us",
        href: "#",
        icon: (
          <div className="w-7 h-7">
            <LottieComponent animationData={EvCyberSecurity} />
          </div>
        ),
        links: [],
      },
      {
        title: "Privacy Policy",
        href: "#",
        icon: <BellElectric className="w-5 h-5" />,
        links: [],
      },
    ],
  },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full lg:hidden block bg-slate-100 relative">
      {/* Mobile Menu Header */}
      <div className="flex justify-between items-center h-[72px] py-4 text-lg px-4">
        <Link href="/" className="logo">
          <Image src={logo} alt="logo" width={150} height={150} />
        </Link>

        <div className="flex items-center gap-2">
          {/* Avatar with Popover */}
          <Popover>
            <PopoverTrigger asChild>
              {/* <LottieComponent animationData={user} loop={false} /> */}
              <Avatar className="w-9 h-9 rounded-full flex justify-center items-center text-gray-800 border hover:bg-primary_color hover:text-white transition duration-300 ease-in-out border-gray-300 hover:border-none cursor-pointer">
                <User className="w-5 h-5 " />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent
              className="w-fit flex flex-col gap-2 mt-2 px-2"
              align="center"
            >
              <Link
                href="/account"
                className="hover:text-primary_color hover:bg-primary_color/10 rounded-md py-2 px-3"
              >
                My Account
              </Link>
              <Link
                href="/dashboard"
                className="hover:text-primary_color hover:bg-primary_color/10 rounded-md py-2 px-3"
              >
                Dashboard
              </Link>
            </PopoverContent>
          </Popover>

          {/* Toggle Menu Button */}
          <div className="flex gap-4 items-center pr-4">
            <div
              onClick={toggleMenu}
              className="w-9 h-9 rounded-full flex justify-center items-center text-gray-900 border group  border-gray-300 transition duration-300 ease-in-out relative hover:bg-primary_color hover:border-none hover:text-white cursor-pointer"
            >
              <div
                className={`absolute transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
                </svg>
              </div>

              <X
                size={14}
                className={`absolute transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`flex flex-col w-full absolute left-0 bg-slate-100 overflow-hidden transition-all duration-300 ease-in-out h-[calc(100vh-10rem)] ${
          isOpen
            ? "opacity-100 max-h-[calc(100vh-72px)] top-[72px]"
            : "opacity-0 max-h-0 top-[72px]"
        }`}
      >
        <ScrollArea className="h-[calc(100vh-4rem)] px-4">
          <div className="w-full border border-primary_color p-1 rounded-full bg-white overflow-hidden flex items-center px-2">
            <Search className="w-5 h-5 text-primary_color" />
            <Input
              className="w-full border-none focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Search"
            />
          </div>

          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4 py-4"
          >
            {menuItems.map((item, index) =>
              item.subItems ? (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="flex  items-center justify-start gap-4 pb-2 -mt-2">
                    {item?.icon && item.icon}
                    <h1 className="hover:text-primary_color transition duration-300 text-[17px]">
                      {item.title}
                    </h1>
                  </AccordionTrigger>
                  <AccordionContent className="pl-8">
                    {item.subItems.map((subItem, subIndex) => (
                      <Accordion key={subIndex} type="single" collapsible>
                        {/* Check if subItem.links exists and has items */}
                        {subItem.links?.length > 0 ? (
                          <AccordionItem value={`item-${index}-${subIndex}`}>
                            <AccordionTrigger
                              className={`flex items-center justify-start gap-4 pb-2 -mt-2 text-[16px] `}
                            >
                              {subItem?.icon && subItem.icon}
                              <h1 className="hover:text-primary_color transition duration-300">
                                {subItem.title}
                              </h1>
                            </AccordionTrigger>
                            <AccordionContent className="pl-8 text-[16px]">
                              {subItem.links.map((link, linkIndex) => (
                                <Link
                                  key={linkIndex}
                                  href={link.href}
                                  className="flex gap-4 items-center hover:text-primary_color transition duration-300 py-2"
                                >
                                  {link.icon}
                                  {link.label}
                                </Link>
                              ))}
                            </AccordionContent>
                          </AccordionItem>
                        ) : (
                          // Display only title and icon without AccordionTrigger if no links
                          <div className="flex items-center justify-start gap-4   pb-2 mt-2">
                            {subItem?.icon && subItem.icon}
                            <h1 className="hover:text-primary_color transition duration-300">
                              {subItem.title}
                            </h1>
                          </div>
                        )}
                      </Accordion>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  className="flex gap-4 items-center hover:text-primary_color border-b   transition duration-300 py-2"
                >
                  {item?.icon && item.icon}
                  {item.title}
                </Link>
              )
            )}
          </Accordion>
        </ScrollArea>
      </div>
    </div>
  );
}
