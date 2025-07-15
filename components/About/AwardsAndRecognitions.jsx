import { awardsAndRecognitions } from "@/lib/constants/awardsAndRecognitions"
import Image from "next/image"

const AwardsAndRecognitions = () => {
  return (
    <div className="my-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#ED1C25] text-4xl font-playfair text-center">
          Awards and Recognitions
        </h2>
        <p className="mt-10 text-[#646464] text-lg">
          Our work and our customers’ delight have been our biggest inspiration.
          But when the journey spans 30 years, rewards are bound to come your
          way. Ours have come in many ways, such as the multiple awards we’ve
          won over the years.
        </p>

        <ul className="grid grid-cols-4 divide-x divide-[#ED1C25] mt-10 p-7 shadow-lg">
          {awardsAndRecognitions.map((item, i) => (
            <li
              key={i}
              className="flex flex-col items-center gap-3 text-center"
            >
              <Image
                src={item.image}
                width={130}
                height={130}
                alt={item.title}
              />
              <p
                className="text-[#ED1C25] font-playfair text-lg mt-3"
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></p>
              <p
                className="text-[#646464]"
                dangerouslySetInnerHTML={{ __html: item.desc }}
              ></p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AwardsAndRecognitions
