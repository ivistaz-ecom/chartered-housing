import Image from "next/image"

const HeroSection = () => {
  return (
    <div className="pt-32 pb-8">
      {/* Main Heading */}
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-end items-end gap-10 font-playfair">
          <span className="text-9xl text-[#646464]/50">35</span>
          <p className="text-4xl text-[#646464] leading-tight">
            Years of Building a Legacy of <br />{" "}
            <span className="text-[#646464] font-extrabold text-[40px]">
              Quality through Transparency
            </span>
          </p>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="w-full mt-10">
        <Image
          src="/banner/home-banner.png"
          width={1280}
          height={600}
          className="w-full"
          alt="chartered housing"
        />
      </div>

      {/* Description */}
      <div className="max-w-7xl mx-auto mt-8">
        <p className="text-lg font-light">
          For over thirty five years, we’ve been building more than just homes;
          we’ve been creating a legacy of quality and trust. Our journey has
          been one of commitment to excellence and being open with our customers
          every step of the way.
        </p>
      </div>
    </div>
  )
}

export default HeroSection
