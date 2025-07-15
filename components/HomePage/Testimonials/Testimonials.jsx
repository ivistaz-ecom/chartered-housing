import { testimonials } from "@/lib/constants/Testimonials"
import Image from "next/image"

const Testimonials = () => {
  return (
    <div className="mt-32 mb-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-10">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="border-2 border-primary-red rounded-3xl relative flex flex-col gap-5 pt-24 pb-5 px-12"
          >
            {/* Quotes Symbol */}
            <div className="absolute -top-12 left-10 bg-white pl-1">
              <Image
                src="/home/quotes.svg"
                width={166}
                height={124}
                alt="quotes"
                className=""
              />
            </div>

            <p className="text-primary-gray text-lg">{item.testimonial}</p>

            <div className="space-y-2 text-primary-gray mt-auto">
              <p className="text-2xl">{item.name}</p>
              <p className="">{item.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
