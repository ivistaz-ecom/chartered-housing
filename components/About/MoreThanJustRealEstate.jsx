import { moreThanJustRealEstate } from "@/lib/constants/MoreThanJustRealEstate"
import Image from "next/image"

const MoreThanJustRealEstate = () => {
  return (
    <div className="my-16">
      <div className="max-w-7xl mx-auto bg-[#DBDBDB4D] flex flex-col items-center py-10">
        <h2 className="text-4xl text-primary-red text-center">
          More Than Just Real Estate
        </h2>
        <p className="text-lg text-primary-gray text-center mt-3 mb-14">
          Chartered today delivers a diverse portfolio — including:
        </p>
        <div className="max-w-5xl mx-auto">
          <div className="px-12">
            <div className="grid grid-cols-4">
              {moreThanJustRealEstate.map((item, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center gap-3 p-5
              ${i % 4 !== 3 ? "border-r border-primary-red" : ""} 
              ${
                i <
                moreThanJustRealEstate.length -
                  (moreThanJustRealEstate.length % 4 || 4)
                  ? "border-b border-primary-red"
                  : ""
              }`}
                >
                  <div className="h-14 flex">
                    <Image
                      src={item.iconUrl}
                      width={item.width}
                      height={item.height}
                      alt={`icon ${i + 1}`}
                    />
                  </div>
                  <p
                    dangerouslySetInnerHTML={{ __html: item.title }}
                    className="text-lg text-[#646464] text-center"
                  ></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreThanJustRealEstate
