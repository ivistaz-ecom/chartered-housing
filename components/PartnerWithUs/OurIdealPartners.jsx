import { ourIdealPartners } from "@/lib/constants/OurIdealPartners"
import React from "react"

const OurIdealPartners = () => {
  return (
    <div className="px-4 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-7">
        <h2 className="text-[#646464] text-4xl font-playfair text-center">
          Our Ideal Partners Include
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {ourIdealPartners.map((partner, i) => (
            <div
              key={i}
              className="border border-[#ED1C25] px-4 py-7 flex items-center justify-center text-center text-xl"
            >
              <span dangerouslySetInnerHTML={{ __html: partner }}></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurIdealPartners
