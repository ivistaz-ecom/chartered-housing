import { projectDetails } from "@/lib/constants/projectDetails"
import Image from "next/image"

const ProjectDetails = () => {
  return (
    <div className="mt-10">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-4xl text-[#646464] font-playfair text-center">
          Project Details
        </h3>
        <div className="mt-14 border border-[#ED1C25] py-14 px-12">
          <div className="grid grid-cols-4">
            {projectDetails.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col gap-3 p-5
              ${i % 4 !== 3 ? "border-r border-[#ED1C25]" : ""} 
              ${
                i < projectDetails.length - 3 ? "border-b border-[#ED1C25]" : ""
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
                  className="text-lg text-[#646464]"
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
