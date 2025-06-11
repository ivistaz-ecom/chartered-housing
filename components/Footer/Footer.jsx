import { companyMenu, ourProjectsMenu, socialLinks } from "@/lib/constants/menu"
import Link from "next/link"

const Footer = () => {
  return (
    <>
      <div className="bg-[#FFF8F9] py-7">
        <div className="max-w-7xl mx-auto flex flex-col gap-3">
          {/* Top Section */}
          <div className="space-y-3 border-b border-black pb-7">
            <h2 className="text-[#646464] text-5xl font-playfair">
              Connect with us
            </h2>
            <div className="flex gap-3 items-center">
              <p>
                <strong>Reach Us:</strong>{" "}
                <a
                  href="tel:+919900592343"
                  className="font-light hover:text-[#ec1d23]"
                >
                  +91 990 059 2343
                </a>{" "}
                /{" "}
                <a
                  href="tel:+918031021400"
                  className="font-light hover:text-[#ec1d23]"
                >
                  +91 803 102 1400
                </a>
              </p>
              <span className="text-2xl">|</span>
              <p>
                <strong>Email:</strong>{" "}
                <a href="" className="font-light hover:text-[#ec1d23]">
                  sales@charteredhousing.com
                </a>
              </p>
            </div>
          </div>

          {/* Middle Section */}
          <div className="w-full max-w-5xl">
            <div className="grid grid-cols-3 gap-10">
              {/* Our Projects */}
              <div className="space-y-5">
                <div className="border-b border-black pb-3">
                  <h4 className="uppercase">Our Projects</h4>
                </div>
                <ul className="space-y-3">
                  {ourProjectsMenu.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.path}
                        className="font-light hover:text-[#ec1d23]"
                      >
                        {item.menu}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="space-y-5">
                <div className="border-b border-black pb-3">
                  <h4 className="uppercase">Company</h4>
                </div>
                <ul className="space-y-3">
                  {companyMenu.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.path}
                        className="font-light hover:text-[#ec1d23]"
                      >
                        {item.menu}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Address */}
              <div className="space-y-5">
                <div className="border-b border-black pb-3">
                  <h4 className="uppercase">Corporate Address</h4>
                </div>
                <div className="space-y-3">
                  <p>
                    Chartered Housing (P) Ltd., <br />
                    27, Victoria Road, Bangalore - 560047
                  </p>
                  <div className="flex gap-2">
                    {socialLinks.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.url}
                        className="rounded-full p-2 bg-gray-500 text-white text-xl hover:bg-[#ec1d23]"
                      >
                        {item.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#ec1d23]">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-2">
          <p className="text-white font-light">
            © 2025 Chartered Housing. All rights reserved.
          </p>

          <div className="flex items-center gap-3 text-white">
            <button className="font-light hover:underline underline-offset-2 cursor-pointer">
              Terms of Use
            </button>
            <span className="text-2xl font-extralight">|</span>
            <button className="font-light hover:underline underline-offset-2 cursor-pointer">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
