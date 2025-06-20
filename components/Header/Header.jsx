import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import NavbarMenu from "./NavbarMenu"

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white">
      {/* Top CTA Buttons */}
      <div className="max-w-7xl mx-auto flex justify-end items-center gap-5 py-5">
        <Link href="/projects/upcoming">
          <Button
            variant="outline"
            className="border-[#ec1d23] rounded-none px-4 py-1.5 text-[#ec1d23] hover:bg-[#ec1d23] hover:text-white cursor-pointer"
          >
            Upcoming Projects
          </Button>
        </Link>
        <Link href="/partner-with-us">
          <Button
            variant="outline"
            className="border-[#ec1d23] rounded-none px-4 py-1.5 text-[#ec1d23] hover:bg-[#ec1d23] hover:text-white cursor-pointer"
          >
            Partner with Us
          </Button>
        </Link>
      </div>

      {/* Navbar */}
      <nav className="bg-[#DBDBDB4D] z-10">
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

          <div className="bg-[#ec1d23] w-60 text-white text-center flex items-center justify-center">
            <span>
              Reach Us: <a href="tel:+918660697659">+91 8660697659</a>
            </span>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
