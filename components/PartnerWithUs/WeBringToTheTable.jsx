import Image from "next/image"

const WeBringToTheTable = () => {
  const data = [
    "A legacy of timely, transparent delivery",
    "Strong architectural and project planning capabilities",
    "Ethical business practices and regulatory rigour",
    "Deep understanding of the Bengaluru real estate landscape",
    "A loyal customer base and proven market reputation",
  ]
  return (
    <div className="px-4 my-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2">
        <div>
          <Image
            src="/partner-with-us/we-bring-to-the-table.png"
            width={600}
            height={575}
            alt="We bring to the table"
            className=""
          />
        </div>
        <div>
          <h2 className="text-[#646464] text-4xl font-playfair">
            We Bring To The Table
          </h2>
          <ul className="flex flex-col gap-5 w-full mt-10">
            {data.map((item, index) => (
              <li
                key={index}
                className="bg-[#EBEBEB] text-[#646464] font-playfair text-2xl italic leading-9 px-4 py-5 w-full"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto text-primary-gray text-lg space-y-7 mt-16">
        <h2 className="text-4xl text-center">Joint Development Expertise</h2>
        <p>
          We bring decades of experience in steering complex real estate
          projects from idea to execution. Our team is skilled at identifying
          potential-rich land parcels, conducting feasibility studies, and
          crafting development strategies that maximise shared value.
        </p>
        <p>
          We thrive in collaborative environments, pooling resources and
          knowledge to deliver win-win outcomes.
        </p>
      </div>
    </div>
  )
}

export default WeBringToTheTable
