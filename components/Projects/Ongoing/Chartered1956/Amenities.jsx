import { amenities } from "@/lib/constants/amenities"
import Image from "next/image"

const Amenities = () => {
  return (
    <>
      <div className="bg-[url('/projects/ongoing/amenities.png')] bg-cover h-[500px] mt-16"></div>

      <div className="max-w-5xl mx-auto bg-white p-8 -mt-32">
        <h3 className="text-4xl text-[#646464] font-playfair text-center">
          Amenities
        </h3>
        <div className="mt-14">
          <div className="grid grid-cols-3">
            {amenities.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col gap-3 py-5 px-10
          ${i % 3 !== 2 ? "border-r border-[#ED1C25]" : ""} 
          ${i < 3 ? "border-b border-[#ED1C25]" : ""}`}
              >
                <div className="h-14 flex">
                  <Image
                    src={item.icon}
                    width={50}
                    height={30}
                    alt={`icon ${i + 1}`}
                  />
                </div>
                <p
                  dangerouslySetInnerHTML={{ __html: item.title }}
                  className="text-lg text-[#646464]"
                ></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Amenities
