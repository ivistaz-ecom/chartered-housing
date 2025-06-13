import { completedProject } from "@/lib/constants/completedProjects"

const Completed = () => {
  return (
    <div className="my-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {completedProject.map((project, i) => (
          <div key={i} className="border border-[#ED1C25] p-4 space-y-3">
            <h4 className="text-4xl font-playfair text-[#ED1C25] ">
              {project.year}
            </h4>
            <div>
              <p className="text-lg text-[#646464] font-bold">
                {project.project}
              </p>
              <p className="text-lg text-[#646464]">{project.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Completed
