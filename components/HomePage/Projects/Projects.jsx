import { Button } from "@/components/ui/button"
import { projects } from "@/lib/constants/projects"
import Image from "next/image"
import Link from "next/link"

const Projects = () => {
  return (
    <div className="mt-16">
      <h2 className="text-primary-red font-playfair text-center mb-16 text-4xl">
        Ongoing Project
      </h2>
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {projects.map((item, i) => (
          <div key={i} className="grid grid-cols-2 gap-10">
            {/* category */}
            {/* <div
              className={`writing-vertical-lr order-${i % 2 === 0 ? "0" : "3"}`}
            >
              <h2 className="text-4xl text-[#646464] font-playfair">
                {item.category}
              </h2>
            </div> */}

            {/* Project Image */}
            <div className={`order-${i % 2 === 0 ? "0" : "1"} mx-10`}>
              <Image
                src={item.imageUrl}
                width={400}
                height={700}
                alt="chartered 1956"
              />
            </div>

            {/* Description */}
            <div className={`flex flex-col gap-5 my-auto`}>
              <div className="font-playfair">
                <h3 className="text-4xl text-[#646464] uppercase tracking-widest font-bold">
                  {item.firstname}
                </h3>
                <h3 className="text-9xl text-[#ED1C24]">{item.lastname}</h3>
              </div>

              <h4 className="text-4xl text-[#646464] mt-10">{item.title}</h4>
              <p className="text-lg text-[#646464]">{item.desc}</p>
              <Link href={item.path}>
                <Button
                  variant="outline"
                  className="border-[#ec1d23] rounded-none px-4 py-1.5 text-[#ec1d23] hover:bg-[#ec1d23] hover:text-white cursor-pointer"
                >
                  Know More
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
