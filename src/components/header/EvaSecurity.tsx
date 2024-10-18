"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";
import EvCar11 from "@/app/assets/header/EvCar11.json";
import EvChargingstation from "@/app/assets/header/EvChargingstation.json";
import EvCar from "@/app/assets/header/EvCar.json";
import Boltflash from "@/app/assets/header/Boltflash.json";
import LottieComponent from "../Lottie";
export default function EvaSecurity() {
  const [isdriver, setIsDriver] = useState(true);
  //   const [isorganization, setIsOrganization] = useState(false);
  //   const [isshopproduct, setIsShopProduct] = useState(false);
  return (
    <>
      <div className="flex gap-2">
        <div className="flex flex-col gap-2 border-r last:border-none px-4 h-full">
          <div
            className="flex gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out"
            onMouseEnter={() => {
              setIsDriver(true);
            }}
          >
            <div className="w-6 h-6">
              <LottieComponent animationData={EvCar} />
            </div>

            <p className="text-sm">Cyber Security</p>
            {isdriver && (
              <ChevronRight className="ml-auto" size={20} fill="blue" />
            )}
          </div>
          <div
            className="flex gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out"
            // onMouseEnter={() => {
            //   setIsOrganization(!isorganization);
            //   setIsDriver(false);
            //   setIsShopProduct(false);
            // }}
          >
            <div className="w-6 h-6">
              <LottieComponent animationData={EvCar11} />
            </div>

            <p className="text-sm">Ev Charge Serve</p>
          </div>
          <div className="flex w-52  gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out">
            <div className="w-6 h-6">
              <LottieComponent animationData={Boltflash} />
            </div>

            <p className="text-sm">Service maint</p>
          </div>
        </div>

        {/* sublink */}
        {/* driver */}
        {isdriver && (
          <ul className="flex  flex-col gap-2 w-72  pl-2 ">
            <li className="w-full flex    gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out">
              <div className="w-6 h-6">
                <LottieComponent animationData={EvChargingstation} />
              </div>

              <p className="text-sm">EV Cyber Security</p>
            </li>
          </ul>
        )}
        {/* organization */}
        {/* {isorganization && (
          <ul className="flex  flex-col gap-2 w-72  pl-2 ">
            <li className="w-full flex    gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out">
              <div className="w-6 h-6">
                <LottieComponent animationData={Boltflash} />
              </div>

              <div>Organization</div>
            </li>
          </ul>
        )} */}
        {/* shop product */}
        {/* {isshopproduct && (
          <ul className="flex  flex-col gap-2 w-72  pl-2 ">
            <li className="w-full flex    gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out">
              <div className="w-6 h-6">
                <LottieComponent animationData={Boltflash} />
              </div>

              <div>Shop Product</div>
            </li>
          </ul>
        )} */}

        <div className="flex justify-center items-center border w-52 h-54 rounded-md">
          <LottieComponent animationData={EvCar11} />
        </div>
      </div>
    </>
  );
}
