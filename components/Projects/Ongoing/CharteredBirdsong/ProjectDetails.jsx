import { chBirdsongProjectDetails } from "@/lib/constants/projectDetails"
import Image from "next/image"

const ProjectDetails = () => {
  return (
    <div className="mt-10">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-4xl text-[#646464] font-playfair text-center">
          Project Details
        </h3>
        <div className="mt-10 border border-[#ED1C25] p-10">
          <div className="grid grid-cols-4">
            {chBirdsongProjectDetails.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col gap-3 p-5
              ${i % 4 !== 3 ? "border-r border-[#ED1C25]" : ""} 
              ${
                i <
                chBirdsongProjectDetails.length -
                  (chBirdsongProjectDetails.length % 4 || 4)
                  ? "border-b border-primary-red"
                  : ""
              }`}
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
                  className=" text-[#646464]"
                ></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
