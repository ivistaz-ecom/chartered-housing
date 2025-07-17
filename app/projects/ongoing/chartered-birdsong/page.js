import HeroSection from "@/components/HeroSection/HeroSection"
import Amenities from "@/components/Projects/Ongoing/CharteredBirdsong/Amenities"
import Description from "@/components/Projects/Ongoing/CharteredBirdsong/Description"
import InterestedIn from "@/components/Projects/Ongoing/CharteredBirdsong/InterestedIn"
import ProjectDetails from "@/components/Projects/Ongoing/CharteredBirdsong/ProjectDetails"
import WhyChooseChartered from "@/components/Projects/Ongoing/CharteredBirdsong/WhyChooseChartered"

export default function page() {
  const heroSectionData = {
    page: "chartered birdsong",
    heading: {
      year: "",
      firstLine: "Space to dream. Freedom to build.",
      secondLine: "Discover plotted living crafted for",
      thirdLine: "future-forward families.",
    },
    imageUrl: "/banner/chartered-birdsong-banner.png",
    desc: "",
  }

  return (
    <>
      <HeroSection data={heroSectionData} />
      <Description />
      <ProjectDetails />
      <Amenities />
      <WhyChooseChartered />
      <InterestedIn />
    </>
  )
}
