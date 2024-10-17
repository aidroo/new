import Link from "next/link";
import { useState } from "react";
import EvaLinks from "./EvaLinks";

import { Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export default function Desktop() {
  const [isOpenEva, setIsOpenEva] = useState(false);
  const [isOpenSecurity, setIsOpenSecurity] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  return (
    <div className="">
      <nav className="grid grid-cols-6 gap-4 items-center  relative">
        {/* Logo */}
        <Link href="/" className="logo col-span-1">
          Logo
        </Link>
        {/* Navigation Links */}
        <ul className=" col-span-4 flex items-center justify-evenly">
          <li className="relative">
            <Link
              href="/"
              onMouseEnter={() => {
                setIsOpenEva(true);
                setIsOpenSecurity(false);
              }}
              className="group"
            >
              <div className="flex items-center">
                <span>Eva Cyber security</span>
                <svg
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
                </svg>
              </div>
              <hr className="w-0 h-1 bg-gray-300 transition-all duration-300 ease-in-out group-hover:w-full absolute left-0 transform -translate-x-1/2 group-hover:translate-x-0" />
            </Link>
            {isOpenEva && (
              <div
                className="absolute top-[60px] left-1/2 -translate-x-1/2 border rounded-md min-w-fit h-fit p-4"
                onMouseLeave={() => setIsOpenEva(false)}
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-blue-500"></div>
                <EvaLinks />
              </div>
            )}
          </li>
          <li className="relative">
            <Link
              href="#"
              onMouseEnter={() => {
                setIsOpenSecurity(true);
                setIsOpenEva(false);
              }}
              className="group  "
            >
              <div className="flex items-center">
                <span>Eva Cyber security</span>
                <svg
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
                </svg>
              </div>
              <hr className="w-0 h-1 bg-gray-300 transition-all duration-300 ease-in-out group-hover:w-full absolute left-0 transform -translate-x-1/2 group-hover:translate-x-0 " />
            </Link>
            {isOpenSecurity && (
              <div
                className="absolute top-[50px] left-1/2 -translate-x-1/2 border rounded-md min-w-fit h-fit p-4"
                onMouseLeave={() => {
                  setIsOpenSecurity(false);
                  setIsOpenEva(false);
                }}
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-blue-500"></div>
                <EvaLinks />
              </div>
            )}
          </li>
          <li>
            <Link href="#">Partnership</Link>
          </li>
          <li>
            <Link href="#">More</Link>
          </li>
        </ul>
        <div className="col-span-1 flex justify-self-end items-center gap-x-4">
          <Search onClick={() => setIsSearch(!isSearch)} />
          <Popover>
            <PopoverTrigger asChild>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
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

          {/* <CustomButton variant="outline" icon={Lock}>
          Login
        </CustomButton>
        <CustomButton variant="outline" icon={UserRound}>
          Register
        </CustomButton> */}
        </div>
      </nav>
      {isSearch && <Input placeholder="Search" className="z-50" />}
    </div>
  );
}
