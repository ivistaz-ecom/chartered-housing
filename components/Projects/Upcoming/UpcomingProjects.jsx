import { Button } from "@/components/ui/button"
import { upcomingProjects } from "@/lib/constants/projects"
import Link from "next/link"

const UpcomingProjects = () => {
  return (
    <div className="my-16">
      <div className="max-w-7xl mx-auto">
        <ul className="flex flex-col gap-16">
          {upcomingProjects.map((item, i) => (
            <li key={i} className="flex flex-col gap-5">
              <h1 className="text-6xl text-primary-red">{item.projectName}</h1>
              <p className="text-3xl text-primary-gray">{item.location}</p>
              <div className="border border-primary-red p-5 w-full">
                <div className="flex justify-between items-center">
                  <p className="text-primary-gray text-lg font-light">
                    {item.desc}
                  </p>
                  <Link href="/contact-us">
                    <Button
                      variant="outline"
                      className="border-[#ec1d23] rounded-none px-4 py-1.5 text-[#ec1d23] hover:bg-[#ec1d23] hover:text-white cursor-pointer"
                    >
                      Know More
                    </Button>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default UpcomingProjects
