"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";
import { Lock, UserRound } from "lucide-react";
import Link from "next/link";
import React from "react";

import CustomButton from "@/components/CustomButton";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
export default function Desktop() {
  return (
    <div className="grid grid-cols-6 items-center  justify-center">
      <Link href="/" className="col-span-1">
        {/* <Image
          src={logo}
          alt="Logo"
          className="w-36"
          priority={true}
          width={500}
          height={300}
        /> */}
      </Link>
      <div className="flex col-span-4 justify-center gap-2">
        {links &&
          links.map((link) =>
            !link.sublinks ? (
              <NavigationMenu key={link.title}>
                <NavigationMenuList>
                  <NavigationMenuItem key={link.title}>
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {link.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            ) : (
              <NavigationMenu key={link.title}>
                <NavigationMenuList>
                  <NavigationMenuItem key={link.title}>
                    <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                    {link.sublinks && (
                      <NavigationMenuContent className="flex relative t-2">
                        <div className="w-4 h-4 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-blue-500 dark:border-b-gray-800 absolute -top-2 left-1/2 transform -translate-x-1/2" />
                        <ul className="p-2 flex flex-col w-52 group-hover:md:block hover:md:block mt-2 space-y-2">
                          {link.sublinks.map((sublink) => (
                            <ListItem
                              key={sublink.title}
                              href={sublink.href}
                              className="py-1"
                            >
                              {" "}
                              {/* Add padding or margin here */}
                              {sublink.title}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    )}
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            )
          )}
      </div>

      <div className="col-span-1 flex justify-self-end items-center gap-x-4">
        <Popover>
          <PopoverTrigger asChild>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
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
        <CustomButton variant="outline" icon={Lock}>
          Login
        </CustomButton>
        <CustomButton variant="outline" icon={UserRound}>
          Register
        </CustomButton>
      </div>
    </div>
  );
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none   rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none ">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground transition duration-300 ease-out hover:translate-x-2 hover:text-[#1c89fd]">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const links = [
  {
    title: "EV Charge Points",
    submenu: true,
    sublinks: [
      {
        title: "Drivers",
        href: `#`,
        sslinks: [
          {
            title: "Workplace Charging",
            href: `#`,
          },
          {
            title: "Workplace Aftercare",
            href: `#`,
          },
          {
            title: "Public Charging",
            href: `#`,
          },
          {
            title: "Vehicle Telematics",
            href: `#`,
          },
          {
            title: "Grant Qualifications",
            href: `#`,
          },
        ],
      },
      {
        title: "Organizations",
        href: `#`,
      },
      {
        title: "Shop Products",
        href: `#`,
      },
    ],
  },
  {
    title: "EV Cyber security",
    submenu: true,
    sublinks: [
      {
        title: "Cyber Security",
        href: `#`,
      },
      {
        title: "EV Charge Services",
        href: `#`,
      },
      {
        title: "Service Maintenance",
        href: "#",
      },
    ],
  },

  {
    title: "Partnership",
    href: "#",
  },
  {
    title: "More",
    href: "",
  },
];
