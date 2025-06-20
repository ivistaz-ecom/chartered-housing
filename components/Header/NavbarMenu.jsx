"use client"

import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { companyMenu, connectMenu, ourProjectsMenu } from "@/lib/constants/menu"

export default function NavbarMenu() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {/* Our Projects */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="py-7! text-black  text-base bg-transparent! hover:bg-[#ec1d23]! hover:text-white! data-[state=open]:bg-[#ec1d23]! data-[state=open]:text-white! rounded-none">
            Our Projects
          </NavigationMenuTrigger>
          <NavigationMenuContent className="!bg-[#FFF8F9] !rounded-none border-none">
            <ul className="grid w-[200px] gap-4 !text-base">
              {ourProjectsMenu.map((item, i) => (
                <li
                  key={i}
                  className={`${
                    i === ourProjectsMenu.length - 1 ? "" : "border-b"
                  } border-[#646464]`}
                >
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.path}
                      className="hover:bg-[#FFB4B780]! !rounded-none"
                    >
                      {item.menu}
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Company */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="py-7! text-black text-base bg-transparent! hover:bg-[#ec1d23]! hover:text-white! data-[state=open]:bg-[#ec1d23]! data-[state=open]:text-white! rounded-none">
            Company
          </NavigationMenuTrigger>
          <NavigationMenuContent className="!bg-[#FFF8F9] !rounded-none border-none">
            <ul className="grid w-[200px] gap-4 !text-base">
              {companyMenu.map((item, i) => (
                <li
                  key={i}
                  className={`${
                    i === companyMenu.length - 1 ? "" : "border-b"
                  } border-[#646464]`}
                >
                  <NavigationMenuLink asChild>
                    <Link
                      className="hover:bg-[#FFB4B780]! !rounded-none"
                      href={item.path}
                    >
                      {item.menu}
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Connect */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="py-7! text-black text-base bg-transparent! hover:bg-[#ec1d23]! hover:text-white! data-[state=open]:bg-[#ec1d23]! data-[state=open]:text-white! rounded-none">
            Connect
          </NavigationMenuTrigger>
          <NavigationMenuContent className="!bg-[#FFF8F9] !rounded-none border-none">
            <ul className="grid w-[250px] gap-4 !text-base">
              {connectMenu.map((item, i) => (
                <li
                  key={i}
                  className={`${
                    i === companyMenu.length - 1 ? "" : "border-b"
                  } border-[#646464]`}
                >
                  <NavigationMenuLink asChild>
                    <Link
                      className="hover:bg-[#FFB4B780]! !rounded-none"
                      href={item.path}
                      target={item.target}
                    >
                      <div className="font-medium text-[#ED1C25]">
                        {item.menu}
                      </div>
                      <div className="text-muted-foreground mt-2">
                        {item.subtitle}
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
