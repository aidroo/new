"use client";

import Boltflash from "@/app/assets/header/Boltflash.json";
import EvCar11 from "@/app/assets/header/EvCar11.json";
import EvChargingstation from "@/app/assets/header/EvChargingstation.json";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import LottieComponent from "../Lottie";
export default function EvaLinks() {
  const [isdriver, setIsDriver] = useState(true);
  const [isorganization, setIsOrganization] = useState(false);
  const [isshopproduct, setIsShopProduct] = useState(false);

  return (
    <>
      <div className="flex gap-2 ">
        <div className="flex flex-col gap-2 border-r last:border-none px-4 h-full">
          <div
            className="flex gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out"
            onMouseEnter={() => {
              setIsDriver(true);
              setIsOrganization(false);
              setIsShopProduct(false);
            }}
          >
            <div className="w-6 h-6">
              <LottieComponent animationData={EvChargingstation} />
            </div>

            <p className="text-sm">Drivers</p>
            <ChevronRight className="ml-auto" size={20} fill="blue" />
          </div>
          <div
            className="flex gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out"
            onMouseEnter={() => {
              setIsOrganization(!isorganization);
              setIsDriver(false);
              setIsShopProduct(false);
            }}
          >
            <div className="w-6 h-6">
              <LottieComponent animationData={Boltflash} />
            </div>

            <p className="text-sm">Organizations</p>
            <ChevronRight className="ml-auto" size={20} fill="blue" />
          </div>
          <div
            className="flex w-52  gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out"
            onMouseEnter={() => {
              setIsShopProduct(!isshopproduct);
              setIsDriver(false);
              setIsOrganization(false);
            }}
          >
            <div className="w-6 h-6">
              <LottieComponent animationData={Boltflash} />
            </div>

            <p className="text-sm">Shop Products</p>
            <ChevronRight className="ml-auto" size={20} fill="blue" />
          </div>
        </div>

        {/* sublink */}
        {/* driver */}
        {isdriver && (
          <ul className="flex  flex-col gap-2 w-72  pl-2 ">
            <li className="w-full flex    gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out">
              <div className="w-6 h-6">
                <LottieComponent animationData={Boltflash} />
              </div>

              <p className="text-sm">Workplace charging</p>
            </li>
            <li className="w-full flex    gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out">
              <div className="w-6 h-6">
                <LottieComponent animationData={Boltflash} />
              </div>

              <p className="text-sm">Workplace Aftercare</p>
            </li>
            <li className="w-full flex    gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out">
              <div className="w-6 h-6">
                <LottieComponent animationData={Boltflash} />
              </div>
              <p className="text-sm"> Public charging</p>
            </li>
            <li className="w-full flex    gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out">
              <div className="w-6 h-6">
                <LottieComponent animationData={Boltflash} />
              </div>

              <p className="text-sm">Vehicle telematics</p>
            </li>
            <li className="w-full flex    gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out">
              <div className="w-6 h-6">
                <LottieComponent animationData={Boltflash} />
              </div>

              <p className="text-sm"> Grant qualifications</p>
            </li>
          </ul>
        )}
        {/* organization */}
        {isorganization && (
          <ul className="flex  flex-col gap-2 w-72  pl-2 ">
            <li className="w-full flex    gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out">
              <div className="w-6 h-6">
                <LottieComponent animationData={Boltflash} />
              </div>

              <div>Organization</div>
            </li>
          </ul>
        )}
        {/* shop product */}
        {isshopproduct && (
          <ul className="flex  flex-col gap-2 w-72  pl-2 ">
            <li className="w-full flex    gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out">
              <div className="w-6 h-6">
                <LottieComponent animationData={Boltflash} />
              </div>

              <div>Shop Product</div>
            </li>
          </ul>
        )}

        <div className="flex justify-center items-center border w-52 h-54 rounded-md">
          <LottieComponent animationData={EvCar11} />
        </div>
      </div>
    </>
  );
}
