"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";
import LottieComponent from "../Lottie";
import {
  bannerSecurity,
  bolfish,
  evcar1,
  evcar2,
  evcar3,
  EvCyberSecurity,
  shopEv,
} from "./json-icons";
export default function EvaSecurity() {
  const [isdriver, setIsDriver] = useState(true);
  const [isorganization, setIsOrganization] = useState(false);
  const [isshopproduct, setIsShopProduct] = useState(false);

  return (
    <>
      <div className="grid grid-cols-3 text-base p-4 gap-4">
        <div className="flex flex-col min-w-fit gap-4 border-r  last:border-none  pr-6 h-full">
          <div
            className="flex gap-4 border hover:border-primary_color rounded-md p-2 cursor-pointer items-center hover:bg-gray-100 transition-all duration-300 ease-in-out"
            onMouseEnter={() => {
              setIsDriver(true);
              setIsOrganization(false);
              setIsShopProduct(false);
            }}
          >
            <div className="w-9 h-9">
              <LottieComponent animationData={evcar3} />
            </div>

            <p className="">Drivers</p>
            {isdriver && (
              <ChevronRight
                className="ml-auto -mr-[28px]"
                size={20}
                fill="blue"
              />
            )}
          </div>
          <div
            className="flex gap-4 border rounded-md p-2 cursor-pointer hover:border-primary_color hover:bg-gray-100 transition-all duration-300 ease-in-out items-center"
            onMouseEnter={() => {
              setIsOrganization(!isorganization);
              setIsDriver(false);
              setIsShopProduct(false);
            }}
          >
            <div className="w-9 h-9">
              <LottieComponent animationData={bolfish} />
            </div>

            <p className="">Organizations</p>
            {isorganization && (
              <ChevronRight
                className="ml-auto -mr-[28px]"
                size={20}
                fill="blue"
              />
            )}
          </div>
          <div
            className="flex   gap-4 border rounded-md p-2 cursor-pointer hover:border-primary_color hover:bg-gray-100 transition-all duration-300 ease-in-out items-center"
            onMouseEnter={() => {
              setIsShopProduct(!isshopproduct);
              setIsDriver(false);
              setIsOrganization(false);
            }}
          >
            <div className="w-9 h-9">
              <LottieComponent animationData={shopEv} />
            </div>

            <p className="">Shop Products</p>
            {isshopproduct && (
              <ChevronRight
                className="ml-auto -mr-[28px]"
                size={20}
                fill="blue"
              />
            )}
          </div>
        </div>

        {/* sublink */}
        {/* driver */}
        {isdriver && (
          <ul className="flex min-w-64  flex-col gap-2   pl-2 ">
            <li className="w-full flex    gap-4 border hover:border-primary_color rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out items-center">
              <div className="w-9 h-9">
                <LottieComponent animationData={bolfish} />
              </div>

              <p className="">Workplace charging</p>
            </li>
            <li className="w-full flex hover:border-primary_color   gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out items-center">
              <div className="w-9 h-9">
                <LottieComponent animationData={EvCyberSecurity} />
              </div>

              <p className="">Workplace Aftercare</p>
            </li>
            <li className="w-full flex hover:border-primary_color   gap-4 border rounded-md p-2 hover:border-primary_colorcursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out items-center">
              <div className="w-9 h-9">
                <LottieComponent animationData={evcar1} />
              </div>
              <p className=""> Public charging</p>
            </li>
            <li className="w-full flex  hover:border-primary_color  gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out items-center">
              <div className="w-9 h-9">
                <LottieComponent animationData={evcar2} />
              </div>

              <p className="">Vehicle telematics</p>
            </li>
            <li className="w-full flex  hover:border-primary_color  gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out items-center">
              <div className="w-9 h-9">
                <LottieComponent animationData={evcar3} />
              </div>

              <p className=""> Grant qualifications</p>
            </li>
          </ul>
        )}
        {/* organization */}
        {isorganization && (
          <ul className="flex  flex-col gap-2 w-72  pl-2 ">
            <li className="w-full flex hover:border-primary_color   gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out items-center">
              <div className="w-9 h-9">
                <LottieComponent animationData={bolfish} />
              </div>

              <div>Organization</div>
            </li>
          </ul>
        )}
        {/* shop product */}
        {isshopproduct && (
          <ul className="flex min-w-60  flex-col gap-2   pl-2 ">
            <li className=" flex  hover:border-primary_color   gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out items-center">
              <div className="w-9 h-9">
                <LottieComponent animationData={shopEv} />
              </div>

              <div>Shop Product</div>
            </li>
          </ul>
        )}

        <div className="flex justify-center items-start  h-full rounded-md">
          <div className="w-72 h-44 -mt-10">
            <LottieComponent animationData={bannerSecurity} />
          </div>
        </div>
      </div>
    </>
  );
}
