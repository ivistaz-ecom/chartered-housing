import { butOurStory } from "@/lib/constants/butOurStory"
import React from "react"

const ButOurStory = () => {
  return (
    <div className="px-4 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-7">
        <h2 className="text-[#646464] text-4xl font-playfair text-center">
          But our story is not just about buildings <br />{" "}
          <span className="font-bold">— it’s about people.</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
          {butOurStory.map((partner, i) => (
            <div
              key={i}
              className="border border-[#ED1C25] px-4 py-8 flex items-center justify-center text-center text-2xl font-playfair italic"
            >
              <span dangerouslySetInnerHTML={{ __html: partner }}></span>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto text-lg text-center text-[#646464] space-y-5">
          <p>
            We take that trust seriously. And we continue to honour it — not
            just with quality construction, but with ethical operations, clear
            communication, and a deep sense of accountability.
          </p>
          <p>
            As we look ahead, we’re focused on building for tomorrow — with
            sustainable materials, future-ready technologies, and a commitment
            to design that stands the test of time.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ButOurStory
