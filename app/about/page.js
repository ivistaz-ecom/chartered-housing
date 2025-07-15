import AwardsAndRecognitions from "@/components/About/AwardsAndRecognitions"
import BecauseAtChartered from "@/components/About/BecauseAtChartered"
import ButOurStory from "@/components/About/ButOurStory"
import MoreThanJustRealEstate from "@/components/About/MoreThanJustRealEstate"
import QualityThroughTransparency from "@/components/About/QualityThroughTransparency"
import HeroSection from "@/components/HeroSection/HeroSection"

export default function page() {
  const heroSectionData = {
    page: "About Us",
    heading: {
      year: "",
      firstLine: "A Legacy of Trust",
      secondLine: "A Future Built with Purpose",
      thirdLine: "",
    },
    imageUrl: "/banner/about-banner.png",
    desc: "At Chartered Housing, our story is deeply rooted in Bengaluru — a city that has evolved from quiet gardens to a global innovation hub. Over the last three decades, we’ve grown with the city, responding to its shifting skylines and expanding aspirations with spaces that endure.",
  }

  return (
    <>
      <HeroSection data={heroSectionData} />
      <div className="max-w-7xl mx-auto text-lg space-y-4 mt-4">
        <p>
          The Chartered Group was established in 1983 with finance, hire
          purchase, and leasing as its core business. Chartered Leasing was one
          of the first leasing companies to be registered as an NBFC by the RBI
          as early as 1985.
        </p>
        <p>
          We entered the residential apartment development space in 1989. Our
          first project, Chartered Resorts, was a trendsetter — breaking away
          from the prevalent matchbox concept to introduce aesthetic residential
          complexes. Starting with boutique complexes, we gradually expanded to
          building skyscrapers, commercial complexes, and plotted developments.
          Yet, our core passion — an eye for detail and the drive to build every
          apartment as “our own home” — has remained unchanged. It’s this
          commitment that has helped us carve out a unique niche in the
          competitive Bangalore market.
        </p>
        <p>
          Over time, we have also expanded our portfolio to include interiors,
          facilities management, and premium construction.
        </p>
      </div>
      <QualityThroughTransparency />
      <ButOurStory />
      <BecauseAtChartered />
      <AwardsAndRecognitions />
      <MoreThanJustRealEstate />
    </>
  )
}
