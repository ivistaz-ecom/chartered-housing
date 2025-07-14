import Image from "next/image"
import React from "react"

const QualityThroughTransparency = () => {
  return (
    <div className="mt-10">
      <div className="space-y-3 text-center px-3 text-primary-red mb-12">
        <h3 className="text-4xl">Since 1989</h3>
        <h3 className="text-7xl">Quality through Transparency</h3>
      </div>
      <div className="max-w-7xl mx-auto flex items-center relative -z-10">
        <Image
          src="/about/we-set-out.png"
          width={650}
          height={500}
          alt="we set out"
          className="w-[650px] h-[500px]"
        />
        <div className="absolute w-4/6 right-0 bg-white p-12 flex flex-col gap-5">
          <div className="text-[#646464] text-4xl space-y-2">
            <h2>We didn’t set out to be the biggest.</h2>
            <h2>We set out to build right.</h2>
          </div>
          <p className="text-lg text-[#646464] text-justify">
            Our first projects were guided by a simple principle: build homes
            that make sense — to live in, to grow in, and to be proud of. Over
            time, this principle became a promise — one that we’ve kept through
            every design detail, every customer interaction, and every decision
            to favour long-term value over short-term gain.
          </p>
          <p className="text-lg text-[#646464] text-justify">
            From standalone apartments to integrated townships, our developments
            reflect a harmony between form and function. They are places where
            design is intuitive, spaces breathe, light moves freely, and
            communities thrive.
          </p>
        </div>
      </div>
    </div>
  )
}

export default QualityThroughTransparency
