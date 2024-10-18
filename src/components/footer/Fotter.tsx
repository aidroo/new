import { applePlay, font16, footerLinks, googlePlay } from "./constant";
import facebook from "@/app/assets/social/facebook.svg";
import twitter from "@/app/assets/social/twitter.svg";
import instagram from "@/app/assets/social/instagram.svg";
import youtube from "@/app/assets/social/youtube.svg";
import linkedin from "@/app/assets/social/linkedin.svg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Link from "next/link";
import ImageComponent from "../ImageComponent";

export default function Footer() {
  return (
    <div className="patenBackgroundImage h-fit p-4 dark:bg-dark">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {footerLinks.length > 0 &&
            footerLinks.map((footerLink, index) => (
              <div key={index} className="hidden md:block">
                <div className="flex flex-col">
                  <h1
                    className={` text-primary_color   font-semibold pb-1 ${font16} `}
                  >
                    {footerLink.title}
                  </h1>
                  {footerLink.links.length > 0 && (
                    <ul className=" ">
                      {footerLink.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          {link.title ? (
                            <Link
                              href={link.link}
                              className="hover:text-blue-500 text-sm text-gray-600"
                            >
                              {link.title}
                            </Link>
                          ) : link.image ? (
                            <div className="flex flex-col text-white mt-2 text-sm gap-2">
                              <div className="flex gap-2 items-center justify-center w-fit rounded-md py-2 bg-[#002a64] hover:bg-gray-200 hover:text-[#002a64] cursor-pointer transition-all duration-400 ease-in-out px-4">
                                <ImageComponent
                                  src={googlePlay}
                                  alt="googlePlay"
                                  width="20px"
                                  height="20px"
                                />
                                <h1 className="text-sm">Play Store</h1>
                              </div>
                              <div className="flex gap-2 items-center w-fit justify-center rounded-md py-2 bg-[#002a64] hover:bg-gray-200 hover:text-[#002a64] cursor-pointer transition-all duration-400 ease-in-out px-4">
                                <ImageComponent
                                  src={applePlay}
                                  alt="applePlay"
                                  width="20px"
                                  height="20px"
                                />
                                <h1 className="text-sm">Apple App</h1>
                              </div>
                            </div>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          {footerLinks.length > 0 &&
            footerLinks.slice(0, -1).map((footerLink, index) => (
              <div key={index}>
                <div className="flex flex-col md:hidden ">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full  space-y-2 "
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <div
                          className={` text-primary_color font-semibold pb-1 ${font16} `}
                        >
                          {footerLink.title}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4">
                        {footerLink.links.length > 0 && (
                          <ul className=" space-y-2">
                            {footerLink.links
                              .slice(0, -1)
                              .map((link, linkIndex) => (
                                <li key={linkIndex}>
                                  <Link
                                    href={link.link}
                                    className="hover:text-blue-500 text-sm text-gray-600"
                                  >
                                    {link.title}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            ))}
        </div>

        <div className="mt-8 space-y-5 md:hidden">
          <div>
            <p className="text-primary_color font-semibold  ">About aidroo</p>
            <p className=" font-normal text-sm">
              Aidroo, a Europe-based job and directory company
            </p>
          </div>
          <div className="flex gap-4 w-72    mx-auto md:hidden">
            <Link
              href="#_"
              className="relative inline-flex items-center  px-2 py-3 border w-fit h-10   overflow-hidden font-medium transition-all bg-[#002A64] rounded-xl group"
            >
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#002A64]rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-primary_color"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-primary_color/20 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white flex items-center justify-center gap-x-2 px-1">
                <ImageComponent
                  src={googlePlay}
                  alt=""
                  width="24px"
                  height="24px"
                />
                <h1 className="text-sm">Play Store</h1>
              </span>
            </Link>
            <Link
              href="#_"
              className="relative inline-flex items-center  md:px-2 py-3 border w-fit h-10  md:w-64 md:h-12 overflow-hidden font-medium transition-all bg-[#002A64] rounded-xl group"
            >
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#002A64]rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-primary_color"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-primary_color/20 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white flex items-center justify-center gap-x-1 px-2">
                <ImageComponent
                  src={applePlay}
                  alt=""
                  width="20px"
                  height="20px"
                />
                <h1>Apple App</h1>
              </span>
            </Link>
          </div>
        </div>
        {/* social link */}
        <div className="flex flex-col justify-center items-center space-y-2 py-10">
          <h1 className="  font-bold text-gray-600">Follow us on</h1>
          <div className="flex gap-2">
            <Link
              href="https://www.facebook.com/Fb.Aidroo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImageComponent
                src={facebook}
                width="30px"
                height="30px"
                alt="facebook"
              />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <ImageComponent
                src={twitter}
                width="30px"
                height="30px"
                alt="twitter"
              />
            </Link>
            <Link
              href="https://www.instagram.com/aidroo_ig/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImageComponent
                src={instagram}
                width="30px"
                height="30px"
                alt="instagram"
              />
            </Link>
            <Link
              href="https://youtube.com/@aidroo."
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImageComponent
                src={youtube}
                width="30px"
                height="30px"
                alt="youtube"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/aidroo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImageComponent
                src={linkedin}
                width="30px"
                height="30px"
                alt="linkedin"
              />
            </Link>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center space-y-4  ">
          <div className="w-24  ">
            {/* <ImageComponent src={logo} width="100px" height="100px" /> */}
          </div>
          <h1 className="font-semibold  text-sm text-center pb-4">
            Copyrights © Aidroo All rights reserved 2024
          </h1>
        </div>
      </div>
    </div>
  );
}
