"use client"

import Image from "next/image"
import React from "react"
import CountUp from "react-countup"

const statsData = [
  {
    data: 36,
    suffix: "+",
    desc: "Years of <br /> Excellence",
  },
  {
    data: 30,
    suffix: "+",
    desc: "Projects <br /> Delivered",
  },
  {
    data: 70,
    suffix: "%",
    desc: "of our sales comes <br /> through references",
  },
  {
    data: 100,
    suffix: "%",
    desc: "on-time <br /> delivery",
  },
]

const StatsBanner = () => {
  return (
    <div className="bg-[url('/banner/stats-banner.png')] bg-cover h-[500px] mt-16 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-4 divide-x gap-5">
        {statsData.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-3 text-white px-10"
          >
            <span className="text-7xl">
              <CountUp end={item.data} duration={2} />
              {item.suffix}
            </span>
            <p
              className="text-center text-lg"
              dangerouslySetInnerHTML={{ __html: item.desc }}
            ></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatsBanner
