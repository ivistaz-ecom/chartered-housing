import Image from "next/image"

const BecauseAtChartered = () => {
  return (
    <div className="mt-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#ED1C25] text-4xl font-playfair text-center">
          Because at Chartered Housing, we don’t just build for today. <br />{" "}
          <span className="font-bold">We build for generations.</span>
        </h2>
      </div>

      <div>
        <Image
          src="/banner/about-banner-2.png"
          width={1512}
          height={750}
          alt="we build for generations"
          className="w-full mt-10"
        />
      </div>

      <div className="bg-[#646464]/50 py-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
          <h3 className="text-white text-4xl font-playfair text-center">
            Integrity in Thought. Clarity in Action.
          </h3>

          {/* Thoughts */}
          <div className="max-w-5xl mx-auto grid grid-cols-2 divide-x gap-5">
            <div className="px-4 flex items-center justify-center">
              <p className="text-white text-2xl text-center">
                तत्स्मात् यद्यत् पुरुषः मनसा अभिगच्छति | <br /> तद्वाचा वदति तत्
                कर्मणा आचरति ||
              </p>
            </div>
            <div className="px-4 flex items-center justify-center">
              <p className="text-white text-2xl text-center">
                “What man conceives in his mind, <br /> that he expresses
                through speech, <br /> and that he does by deed.”
              </p>
            </div>
          </div>

          <p className="text-white text-lg text-center">
            — Taittiriya Aranyaka
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 text-[#646464] text-lg space-y-5">
        <p>
          At Chartered Housing, this ancient ideal is more than a guiding
          thought — it is a lived practice. We believe that true integrity lies
          in the alignment of thought, word, and deed. This principle, drawn
          from the Taittiriya Aranyaka, forms the core of our philosophy.
        </p>
        <p>
          This commitment is not always easy — and we have often chosen to walk
          away from business opportunities that did not align with these values.
          But through it all, we have remained steadfast: building with purpose,
          communicating with honesty, and acting with accountability.
        </p>
        <p>
          Because we believe homes should be built not just with concrete, but
          with conscience.
        </p>
      </div>
    </div>
  )
}

export default BecauseAtChartered
