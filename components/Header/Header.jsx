"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

function NavbarMenu() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {/* Our Projects */}
        <NavigationMenuItem className="">
          <NavigationMenuTrigger className="py-7! text-black font-light text-base bg-transparent! hover:bg-[#ec1d23]! hover:text-white! data-[state=open]:bg-[#ec1d23]! data-[state=open]:text-white! rounded-none">
            Our Projects
          </NavigationMenuTrigger>
          <NavigationMenuContent className="!bg-[#FFF8F9] !rounded-none border-none">
            <ul className="grid w-[200px] gap-4 !text-base">
              <li className="border-b border-[#646464]">
                <NavigationMenuLink asChild>
                  <Link href="/projects/ongoing">Ongoing Projects</Link>
                </NavigationMenuLink>
              </li>
              <li className="border-b border-[#646464]">
                <NavigationMenuLink asChild>
                  <Link href="/projects/upcoming">Upcoming Projects</Link>
                </NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink asChild>
                  <Link href="/projects/completed">Completed Projects</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Company */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="py-7! text-black font-light text-base bg-transparent! hover:bg-[#ec1d23]! hover:text-white! data-[state=open]:bg-[#ec1d23]! data-[state=open]:text-white! rounded-none">
            Company
          </NavigationMenuTrigger>
          <NavigationMenuContent className="!bg-[#FFF8F9] !rounded-none border-none">
            <ul className="grid w-[200px] gap-4 !text-base">
              <li className="border-b border-[#646464]">
                <NavigationMenuLink asChild>
                  <Link href="/about">About Us</Link>
                </NavigationMenuLink>
              </li>
              <li className="border-b border-[#646464]">
                <NavigationMenuLink asChild>
                  <Link href="/careers">Careers</Link>
                </NavigationMenuLink>
              </li>
              <li className="border-b border-[#646464]">
                <NavigationMenuLink asChild>
                  <Link href="/chartered-interiors">Chartered Interiors</Link>
                </NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink asChild>
                  <Link href="/csr-activities">CSR Activities</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Chartered Interior */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={`${navigationMenuTriggerStyle()} py-7! text-black font-light text-base bg-transparent! hover:bg-[#ec1d23]! hover:text-white! rounded-none`}
          >
            <Link href="/chartered-interiors">Chartered Interiors</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Connect */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="py-7! text-black font-light text-base bg-transparent! hover:bg-[#ec1d23]! hover:text-white! data-[state=open]:bg-[#ec1d23]! data-[state=open]:text-white! rounded-none">
            Connect
          </NavigationMenuTrigger>
          <NavigationMenuContent className="!bg-[#FFF8F9] !rounded-none border-none">
            <ul className="grid w-[200px] gap-4 !text-base">
              <li className="border-b border-[#646464]">
                <NavigationMenuLink asChild>
                  <Link href="#">Components</Link>
                </NavigationMenuLink>
              </li>
              <li className="border-b border-[#646464]">
                <NavigationMenuLink asChild>
                  <Link href="#">Documentation</Link>
                </NavigationMenuLink>
              </li>
              <li className="">
                <NavigationMenuLink asChild>
                  <Link href="#">Blocks</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white">
      {/* CTA Buttons */}
      <div className="max-w-7xl mx-auto flex justify-end items-center gap-5 py-5">
        <Link href="/projects/upcoming">
          <Button
            variant="outline"
            className="border-[#ec1d23] rounded-none px-4 py-1.5 font-light text-[#ec1d23] hover:bg-[#ec1d23] hover:text-white cursor-pointer"
          >
            Upcoming Projects
          </Button>
        </Link>
        <Link href="/partner-with-us">
          <Button
            variant="outline"
            className="border-[#ec1d23] rounded-none px-4 py-1.5 font-light text-[#ec1d23] hover:bg-[#ec1d23] hover:text-white cursor-pointer"
          >
            Partner with Us
          </Button>
        </Link>
      </div>

      {/* Navbar */}
      <nav className="bg-[#f5f5f5] z-10">
        <div className="max-w-7xl mx-auto flex justify-end relative">
          <Link href="/" className="absolute left-0 -top-7">
            <Image
              src="/logo.png"
              width={65}
              height={95}
              alt="Chartered Housing"
              className=""
            />
          </Link>

          <div className="mr-8">
            <NavbarMenu />
          </div>

          <div className="bg-[#ec1d23] font-light w-60 text-white text-center flex items-center justify-center">
            <span>Reach Us: +91 8660697659</span>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
