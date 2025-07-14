import { whyChooseCharteredCol1 } from "@/lib/constants/whyChooseChartered"

const WhyChooseChartered = () => {
  return (
    <div className="mt-10">
      <div className="max-w-7xl mx-auto bg-[#DBDBDB4D] p-10">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl text-[#ED1C25] font-playfair text-center">
            Why Choose Chartered 1956 ?
          </h3>
          <hr className="border-t border-[#ED1C25] mt-4" />
        </div>

        <div className="grid grid-cols-2 gap-10 divide-x divide-dotted divide-[#ED1C25] pb-0 p-10">
          {/* column 1 */}
          <ul className="flex flex-col gap-5 list-disc marker:text-[#ED1C25] text-lg text-[#646464]">
            {whyChooseCharteredCol1.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          {/* column 2 */}
          <ul className="flex flex-col gap-5 list-disc marker:text-[#ED1C25] text-lg text-[#646464]">
            {whyChooseCharteredCol1.map((point, i) => (
              <li key={i} className="">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseChartered
