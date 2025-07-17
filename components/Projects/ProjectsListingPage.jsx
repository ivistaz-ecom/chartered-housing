import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const ProjectsListingPage = ({ projectsList }) => {
  return (
    <div className="my-10">
      <div className="max-w-7xl mx-auto space-y-10">
        {projectsList.map((project, i) => (
          <div
            className="max-w-7xl mx-auto flex flex-col gap-5 items-start text-lg"
            key={i}
          >
            <Image
              src={project.logoUrl}
              width={project.width}
              height={project.height}
              alt={project.projectName}
            />
            <p className="text-3xl text-primary-gray">{project.location}</p>
            <p>{project.desc1}</p>
            <p>{project.desc2}</p>
            <Image
              src={project.image}
              width={1000}
              height={500}
              alt={project.projectName}
              className="w-full"
            />
            <h3
              className="text-3xl text-primary-red leading-relaxed"
              dangerouslySetInnerHTML={{ __html: project.shortDesc }}
            ></h3>
            <Link href={`/projects/ongoing${project.path}`}>
              <Button
                variant="outline"
                className="border-[#ec1d23] rounded-none px-4 py-1.5 text-[#ec1d23] hover:bg-[#ec1d23] hover:text-white cursor-pointer"
              >
                Know More
              </Button>
            </Link>

            {/* <div className="flex justify-end pt-16">
              <div className="w-[800px] text-lg text-[#646464] flex flex-col gap-5">
                <p>{project.desc1}</p>
                <p>{project.desc2}</p>
                <div className="w-full h-[500px]">
                  <Image
                    src={project.image}
                    width={800}
                    height={500}
                    alt={project.projectName}
                    className="w-full"
                  />
                </div>

                <h3
                  className="text-3xl text-primary-red leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: project.shortDesc }}
                ></h3>
                <Link href={`/projects/ongoing${project.path}`}>
                  <Button
                    variant="outline"
                    className="border-[#ec1d23] rounded-none px-4 py-1.5 text-[#ec1d23] hover:bg-[#ec1d23] hover:text-white cursor-pointer"
                  >
                    Know More
                  </Button>
                </Link>
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsListingPage
