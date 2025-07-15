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
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          >
            {/* Image */}
            <div className={`mx-10 ${i % 2 === 0 ? "order-1" : "order-2"}`}>
              <Image
                src={item.imageUrl}
                width={400}
                height={700}
                alt="chartered 1956"
              />
            </div>

            {/* Description */}
            <div
              className={`flex flex-col gap-5 my-auto ${
                i % 2 === 0 ? "order-2" : "order-1"
              }`}
            >
              <div>
                {/* <h3 className="text-4xl text-[#646464] uppercase tracking-widest font-bold">
                  {item.firstname}
                </h3>
                <h3 className="text-9xl text-[#ED1C24]">{item.lastname}</h3> */}
                <Image
                  src={item.logo}
                  width={item.logoWidth}
                  height={item.logoHeight}
                  alt={item.firstname + " " + item.lastname}
                />
              </div>

              <h4 className="text-4xl text-[#646464] mt-1">{item.title}</h4>
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
