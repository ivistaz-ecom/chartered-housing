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
    <div className="px-4 mt-10">
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
      <div className="max-w-7xl mx-auto">
        <p className="text-[#646464] text-lg my-10">
          Whether you’re looking to unlock land value, co-develop a plotted or
          apartment community, or explore a long-term JV, we approach every
          partnership with the same principles we build our homes with —
          purpose, clarity, and mutual respect.
        </p>
      </div>
    </div>
  )
}

export default WeBringToTheTable
