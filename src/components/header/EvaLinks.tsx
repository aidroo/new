"use client";
import eva from "@/app/assets/robot.png";
import { Car, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function EvaLinks() {
  const [isdriver, setIsDriver] = useState(true);
  const [isorganization, setIsOrganization] = useState(false);
  const [isshopproduct, setIsShopProduct] = useState(false);
  return (
    <>
      <div className="flex    gap-2 ">
        <div className="flex flex-col gap-2 border-r last:border-none px-4 h-full">
          <div
            className="flex  gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out  "
            onMouseEnter={() => {
              setIsDriver(true);
              setIsOrganization(false);
              setIsShopProduct(false);
            }}
          >
            <Car size={20} fill="blue" />

            <p className="text-sm">Drivers</p>
            <ChevronRight className="ml-auto" size={20} fill="blue" />
          </div>
          <div
            className="flex  gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out"
            onMouseEnter={() => {
              setIsOrganization(!isorganization);
              setIsDriver(false);
              setIsShopProduct(false);
            }}
          >
            <Car size={20} fill="blue" />

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
            <Car size={20} fill="blue" />

            <p className="text-sm">Shop Products</p>
            <ChevronRight className="ml-auto" size={20} fill="blue" />
          </div>
        </div>

        {/* sublink */}
        {/* driver */}
        {isdriver && (
          <ul className="flex  flex-col gap-2 w-72  pl-2 ">
            <li className="w-full flex    gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out">
              <Car size={20} fill="blue" />

              <p className="text-sm">Workplace charging</p>
            </li>
            <li className="w-full flex    gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out">
              <Car size={20} fill="blue" />

              <p className="text-sm">Workplace Aftercare</p>
            </li>
            <li className="w-full flex    gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out">
              <Car size={20} fill="blue" />

              <p className="text-sm"> Public charging</p>
            </li>
            <li className="w-full flex    gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out">
              <Car size={20} fill="blue" />

              <p className="text-sm">Vehicle telematics</p>
            </li>
            <li className="w-full flex    gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out">
              <Car size={20} fill="blue" />

              <p className="text-sm"> Grant qualifications</p>
            </li>
          </ul>
        )}
        {/* organization */}
        {isorganization && (
          <ul className="flex  flex-col gap-2 w-72  pl-2 ">
            <li className="w-full flex    gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out">
              <Car size={20} fill="blue" />

              <div>Organization</div>
            </li>
          </ul>
        )}
        {/* shop product */}
        {isshopproduct && (
          <ul className="flex  flex-col gap-2 w-72  pl-2 ">
            <li className="w-full flex    gap-4 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out">
              <Car size={20} fill="blue" />

              <div>Shop Product</div>
            </li>
          </ul>
        )}

        <div className="flex justify-center items-center border w-52 h-54 rounded-md">
          <Image src={eva} alt="eva" width={100} height={100} />
        </div>
      </div>
    </>
  );
}
