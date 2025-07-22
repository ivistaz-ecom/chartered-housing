import Image from "next/image"

const HeroSection = ({ data }) => {
  return (
    <div className="pt-28">
      {/* Main Heading */}
      <div
        className={`${
          data.heading.thirdLine.length > 0 ? "mt-20" : "mt-16"
        } max-w-7xl mx-auto `}
      >
        <div
          className={`${
            data.page === "Home" ? "justify-end" : "justify-between"
          } flex items-center`}
        >
          {data.page !== "Home" && (
            <p
              className="text-[#64646480] text-4xl font-bold uppercase leading-tight"
              dangerouslySetInnerHTML={{ __html: data.page }}
            ></p>
          )}
          <div className="flex gap-10 items-center">
            <span className="text-8xl text-[#64646480] font-bold">
              {data.heading.year}
            </span>
            <p className="text-4xl text-primary-gray leading-tight font-light">
              {data.heading.firstLine} <br />{" "}
              <span
                className={`${
                  data.heading.thirdLine.length > 0 ? "font-bold" : "font-bold"
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
