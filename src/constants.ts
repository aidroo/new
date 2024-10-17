export const headerLinks = () => [
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
// "use client";

// import Link from "next/link";
// import { useState } from "react";

// // Define types for the links and sublinks
// interface SubLink {
//   title: string;
//   href: string;
//   sslinks?: SubLink[]; // Optional sublinks
// }

// interface LinkItem {
//   title: string;
//   href?: string; // Optional for links with only sublinks
//   sublinks?: SubLink[]; // Optional sublinks
// }

// interface SubMenuProps {
//   title: string;
//   sublinks: SubLink[];
// }

// export default function Desktop() {
//   return (
//     <div className="grid grid-cols-6 items-center py-4">
//       {/* Logo */}
//       <Link href="/" className="col-span-1">
//         <span className="text-2xl font-bold">Logo</span>
//       </Link>

//       {/* Navigation Links */}
//       <div className="col-span-4">
//         <ul className="flex gap-6">
//           {links.map((link) =>
//             !link.sublinks ? (
//               <li key={link.title}>
//                 <Link
//                   href={link.href || "#"} // Fallback href if not defined
//                   className="text-lg font-medium hover:text-gray-700"
//                 >
//                   {link.title}
//                 </Link>
//               </li>
//             ) : (
//               <SubMenu
//                 key={link.title}
//                 title={link.title}
//                 sublinks={link.sublinks}
//               />
//             )
//           )}
//         </ul>
//       </div>

//       {/* User Actions */}
//       <div className="col-span-1 flex justify-self-end gap-4">
//         <Link
//           href="/login"
//           className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
//         >
//           Login
//         </Link>
//         <Link
//           href="/register"
//           className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
//         >
//           Register
//         </Link>
//       </div>
//     </div>
//   );
// }

// function SubMenu({ title, sublinks }: SubMenuProps) {
//   // State to manage dropdown visibility
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSublink, setActiveSublink] = useState<string | null>(null);

//   // Handle sublink click to toggle sslinks visibility
//   const handleSublinkClick = (sublinkTitle: string) => {
//     setActiveSublink((prev) => (prev === sublinkTitle ? null : sublinkTitle));
//   };

//   return (
//     <li
//       className="relative group"
//       onMouseEnter={() => setIsOpen(true)}
//       onMouseLeave={() => {
//         setIsOpen(false);
//         setActiveSublink(null); // Reset active sublink on hover out
//       }}
//     >
//       {/* Main title */}
//       <button
//         className="text-lg font-medium hover:text-gray-700"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {title}
//       </button>

//       {/* Dropdown for sublinks */}
//       {isOpen && (
//         <ul className="absolute left-0 top-full bg-white inline-block  w-96     rounded-md  p-2 transition-opacity duration-300 ease-in-out">
//           {sublinks.map((sublink) => (
//             <li key={sublink.title} className="relative group">
//               {/* Sublink */}
//               <Link
//                 href={sublink.href}
//                 className="block px-4 py-2 hover:bg-gray-100"
//                 onClick={(e) => {
//                   e.preventDefault(); // Prevent default navigation
//                   handleSublinkClick(sublink.title); // Toggle sub-sublinks
//                 }}
//               >
//                 {sublink.title}
//               </Link>

//               {/* Show sslinks only for the active sublink */}
//               {sublink.sslinks && activeSublink === sublink.title && (
//                 <ul className="absolute left-full top-0  bg-white  p-2 transition-opacity duration-300 ease-in-out">
//                   {sublink.sslinks.map((sslink) => (
//                     <li key={sslink.title}>
//                       <Link
//                         href={sslink.href}
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         {sslink.title}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </li>
//   );
// }

// // Define the main links array
// const links: LinkItem[] = [
//   {
//     title: "EV Charge Points",
//     sublinks: [
//       {
//         title: "Drivers",
//         href: "#",
//         sslinks: [
//           { title: "Workplace Charging", href: "#" },
//           { title: "Public Charging", href: "#" },
//           { title: "Grant Qualifications", href: "#" },
//         ],
//       },
//       {
//         title: "Organizations",
//         href: "#",
//         sslinks: [
//           { title: "Organization sub", href: "#" },
//           { title: "Public Charging", href: "#" },
//           { title: "Grant Qualifications", href: "#" },
//         ],
//       },
//       { title: "Shop Products", href: "#" },
//     ],
//   },
//   {
//     title: "EV Cyber Security",
//     sublinks: [
//       { title: "Cyber Security", href: "#" },
//       { title: "EV Charge Services", href: "#" },
//       { title: "Service Maintenance", href: "#" },
//     ],
//   },
//   { title: "Partnership", href: "#" },
//   { title: "More", href: "#" },
// ];
// "use client";

// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";

// import CustomButton from "@/components/CustomButton";
// import { Lock, UserRound } from "lucide-react";
// import Link from "next/link";
// import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
// import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

// export default function Desktop() {
//   return (
//     <div className="grid grid-cols-6 items-center">
//       <Link href="/" className="col-span-1">
//         {/* Your logo here */}
//       </Link>

//       {/* Aligning nav links to the left */}
//       <div className="flex col-span-4 justify-start gap-6">
//         {links &&
//           links.map((link) =>
//             !link.sublinks ? (
//               <NavigationMenu key={link.title}>
//                 <NavigationMenuList>
//                   <NavigationMenuItem key={link.title}>
//                     <Link href={link.href} legacyBehavior passHref>
//                       <NavigationMenuLink
//                         className={navigationMenuTriggerStyle()}
//                       >
//                         {link.title}
//                       </NavigationMenuLink>
//                     </Link>
//                   </NavigationMenuItem>
//                 </NavigationMenuList>
//               </NavigationMenu>
//             ) : (
//               <NavigationMenu key={link.title}>
//                 <NavigationMenuList className="w-full">
//                   <NavigationMenuItem key={link.title} className="w-full">
//                     <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
//                     {link.sublinks && (
//                       <NavigationMenuContent className="relative block   ">
//                         <ul className="p-2 flex flex-col  w-96 space-y-2">
//                           {link.sublinks.map((sublink) => (
//                             <li
//                               key={sublink.title}
//                               className="group flex   items-center justify-between"
//                             >
//                               <div className="flex items-center">
//                                 <Link href={sublink.href}>
//                                   <NavigationMenuLink
//                                     className={navigationMenuTriggerStyle()}
//                                   >
//                                     {sublink.title}
//                                   </NavigationMenuLink>
//                                 </Link>
//                               </div>

//                               {sublink.sslinks && (
//                                 <div className="absolute left-32 top-0 w-fit bg-white shadow-md rounded-md hidden group-hover:block">
//                                   <ul className="pl-4 space-y-2">
//                                     {sublink.sslinks.map((sslink) => (
//                                       <li key={sslink.title}>
//                                         <Link href={sslink.href}>
//                                           <NavigationMenuLink className="border-none">
//                                             {sslink.title}
//                                           </NavigationMenuLink>
//                                         </Link>
//                                       </li>
//                                     ))}
//                                   </ul>
//                                 </div>
//                               )}

//                               <div className="ml-2">
//                                 <Avatar>
//                                   <AvatarImage
//                                     src="https://github.com/shadcn.png"
//                                     alt="@shadcn"
//                                   />
//                                   <AvatarFallback>CN</AvatarFallback>
//                                 </Avatar>
//                               </div>
//                             </li>
//                           ))}
//                         </ul>
//                       </NavigationMenuContent>
//                     )}
//                   </NavigationMenuItem>
//                 </NavigationMenuList>
//               </NavigationMenu>
//             )
//           )}
//       </div>

//       <div className="col-span-1 flex justify-self-end items-center gap-x-4">
//         <Popover>
//           <PopoverTrigger asChild>
//             <Avatar>
//               <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
//               <AvatarFallback>CN</AvatarFallback>
//             </Avatar>
//           </PopoverTrigger>
//           <PopoverContent className="w-fit mt-2" align="end">
//             <div className="grid gap-4">
//               <div className="space-y-2">
//                 <h4 className="font-medium leading-none">Dimensions</h4>
//                 <p className="text-sm text-muted-foreground">
//                   Set the dimensions for the layer.
//                 </p>
//               </div>
//             </div>
//           </PopoverContent>
//         </Popover>
//         <CustomButton variant="outline" icon={Lock}>
//           Login
//         </CustomButton>
//         <CustomButton variant="outline" icon={UserRound}>
//           Register
//         </CustomButton>
//       </div>
//     </div>
//   );
// }

// const links = [
//   {
//     title: "EV Charge Points",
//     submenu: true,
//     sublinks: [
//       {
//         title: "Drivers",
//         href: "#",
//         sslinks: [
//           { title: "Workplace Charging", href: "#" },
//           { title: "Workplace Aftercare", href: "#" },
//           { title: "Public Charging", href: "#" },
//           { title: "Vehicle Telematics", href: "#" },
//           { title: "Grant Qualifications", href: "#" },
//         ],
//       },
//       { title: "Organizations", href: "#" },
//       { title: "Shop Products", href: "#" },
//     ],
//   },
//   {
//     title: "EV Cyber Security",
//     submenu: true,
//     sublinks: [
//       { title: "Cyber Security", href: "#" },
//       { title: "EV Charge Services", href: "#" },
//       { title: "Service Maintenance", href: "#" },
//     ],
//   },
//   { title: "Partnership", href: "#" },
//   { title: "More", href: "#" },
// ];
