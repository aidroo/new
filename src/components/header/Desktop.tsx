import Link from "next/link";
import { useState } from "react";
import EvaLinks from "./EvaLinks";

import search from "@/app/assets/header/search.json";
import signin from "@/app/assets/header/signin.json";

import { Search } from "lucide-react";

import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import EvaSecurity from "./EvaSecurity";

import logo from "@/app/assets/icons/ev.svg";
import Image from "next/image";
import LottieComponent from "../Lottie";

export default function Desktop() {
  const [isOpenEva, setIsOpenEva] = useState(false);
  const [isOpenSecurity, setIsOpenSecurity] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  return (
    <div className="relative lg:block hidden text-[18px]">
      <nav className="grid grid-cols-8 gap-4 items-center relative">
        {/* Logo */}
        <Link href="/" className="logo col-span-2 flex justify-center ">
          <Image src={logo} alt="logo" width={140} height={140} />
        </Link>
        {/* Navigation Links */}
        <ul className="col-span-4 flex items-center gap-x-6 -mr-6     justify-center font-normal ">
          <li className="relative">
            <Link
              href="/"
              onMouseEnter={() => {
                setIsOpenEva(true);
                setIsOpenSecurity(false);
                setIsSearch(false);
              }}
              className="group"
            >
              <div className="flex items-center">
                <span className=" ">evchargepoints</span>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ml-1 transition-transform duration-300 ${
                    isOpenEva ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg> */}
              </div>
              <hr
                className={`w-0 h-[3px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full absolute top-[43px] left-1/2 transform -translate-x-1/2 origin-center ${
                  isOpenEva ? "w-full bg-primary_color" : ""
                }`}
              />
            </Link>
          </li>
          <li className="relative">
            <Link
              href="#"
              onMouseEnter={() => {
                setIsOpenSecurity(true);
                setIsOpenEva(false);
                setIsSearch(false);
              }}
              className="group"
            >
              <div className="flex items-center">
                <span>EV Cyber security</span>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ml-1 transition-transform duration-300 ${
                    isOpenSecurity ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg> */}
              </div>
              <hr
                className={`w-0 h-[3px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full absolute top-[43px] left-1/2 transform -translate-x-1/2 origin-center ${
                  isOpenSecurity ? "w-full bg-primary_color" : ""
                }`}
              />
            </Link>
          </li>
          <li>
            <Link href="#">Partnership</Link>
          </li>
          <li>
            <Link href="#">More</Link>
          </li>
        </ul>
        <div className="col-span-2 flex justify-self-end items-center gap-x-4 ">
          <div className="w-7 h-7">
            <LottieComponent animationData={search} />
          </div>

          <Popover>
            <PopoverTrigger asChild>
              <div className="w-8 h-8">
                <LottieComponent animationData={signin} />
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-fit mt-2" align="end">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Dimensions</h4>
                  <p className="text-sm text-muted-foreground">
                    Set the dimensions for the layer.
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <p className=" bg-blue-400 text-white px-2 py-1 rounded-md cursor-pointer">
            start order
          </p>
          {/* <CustomButton variant="outline" icon={UserRound}>
          Register
        </CustomButton>  */}
        </div>
      </nav>

      <div
        className={`flex gap-2 items-center border absolute top-[55px] right-[140px] rounded-md h-fit overflow-hidden px-4 transition-all duration-500 ease-in-out bg-white ${
          isSearch ? "opacity-100 w-64" : "opacity-0 w-0"
        }`}
      >
        <Input
          type="text"
          placeholder="Search"
          className="w-full outline-none border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Search className="cursor-pointer text-[#088b93]" size={18} />
      </div>

      {/* Eva Links */}
      <div
        className={`absolute top-[67px] left-1/2 -translate-x-1/2   rounded-md min-w-full h-fit p-4 
    transition-all duration-300 ease-in-out bg-white shadow-[0_8px_24px_rgba(149,157,165,0.2)] border border-gray-200 ${
      isOpenEva
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-2 pointer-events-none"
    }`}
        onMouseLeave={() => setIsOpenEva(false)}
      >
        <div className="absolute -top-2 left-[336px] -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-blue-500"></div>
        <EvaLinks />
      </div>

      <div
        className={`absolute top-[67px] left-1/2 -translate-x-1/2   rounded-md min-w-full h-fit p-4 
    transition-all duration-300 ease-in-out bg-white shadow-[0_8px_24px_rgba(149,157,165,0.2)] border border-gray-200 ${
      isOpenSecurity
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-2 pointer-events-none"
    }`}
        onMouseLeave={() => setIsOpenSecurity(false)}
      >
        <div className="absolute -top-2 left-[504px] -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-blue-500"></div>
        <EvaSecurity />
      </div>
    </div>
  );
}
