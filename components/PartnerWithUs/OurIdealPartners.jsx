import { ourIdealPartners } from "@/lib/constants/ourIdealPartners"

const OurIdealPartners = () => {
  return (
    <div className="px-4 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-5">
        <h2 className="text-primary-gray text-4xl text-center">
          Advantages to Landowners
        </h2>
        <p className="text-primary-gray text-lg text-center">
          Chartered projects command a higher prestige and better value in the
          market due to following reasons
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
          {ourIdealPartners.map((item, i) => (
            <div
              key={i}
              className="border border-primary-red p-5 space-y-1 h-44"
            >
              <h3 className="text-primary-red text-xl font-bold">
                {item.title}
              </h3>
              <p className="text-primary-gray text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurIdealPartners
