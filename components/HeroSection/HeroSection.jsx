import Image from "next/image"

const HeroSection = ({ data }) => {
  return (
    <div className="pt-28">
      {/* Main Heading */}
      <div
        className={`${
          data.heading.thirdLine.length > 0
            ? "mt-20 max-w-7xl"
            : "mt-16 max-w-6xl"
        }  mx-auto `}
      >
        <div className="flex justify-end items-center gap-10">
          <span className="text-9xl text-[#646464]/50 h-32 font-bold">
            {data.heading.year}
          </span>
          <p className="text-4xl text-primary-gray leading-tight">
            {data.heading.firstLine} <br />{" "}
            <span
              className={`${
                data.heading.thirdLine.length > 0 ? "" : "font-bold"
              } text-primary-gray text-[40px]`}
            >
              {data.heading.secondLine}
            </span>{" "}
            <br />{" "}
            <span className="text-primary-gray font-bold text-[40px]">
              {data.heading.thirdLine}
            </span>
          </p>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="w-full mt-10">
        <Image
          src={data.imageUrl}
          width={1280}
          height={600}
          className="w-full"
          alt="chartered housing"
        />
      </div>

      {/* Description */}
      <div className={`${data.desc ? "mt-8" : ""} max-w-7xl mx-auto`}>
        <p className="text-lg">{data.desc}</p>
      </div>
    </div>
  )
}

export default HeroSection
