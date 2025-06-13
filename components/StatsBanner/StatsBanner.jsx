import Image from "next/image"
import React from "react"

const statsData = [
  {
    data: 36,
    suffix: "",
    desc: "Years of <br /> Excellence",
  },
  {
    data: 27,
    suffix: "",
    desc: "Projects <br /> Delivered",
  },
  {
    data: 2,
    suffix: "Million",
    desc: "Sq. Ft. Built-Up Area <br /> Delivered",
  },
  {
    data: 1,
    suffix: "Million",
    desc: "Sq. Ft. Area Under <br /> Development",
  },
]

const StatsBanner = () => {
  return (
    <div className="bg-[url('/banner/stats-banner.png')] bg-cover h-[500px] mt-8 flex items-center justify-center">
      <div className="grid grid-cols-4 divide-x gap-5">
        {statsData.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-5 text-white px-10">
            <span className="text-4xl">
              {item.data}+ {item.suffix}
            </span>
            <p className="" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatsBanner
