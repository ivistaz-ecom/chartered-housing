import HeroSection from "@/components/HeroSection/HeroSection"
import Amenities from "@/components/Projects/Ongoing/Chartered1956/Amenities"
import Description from "@/components/Projects/Ongoing/Chartered1956/Description"
import InterestedIn from "@/components/Projects/Ongoing/Chartered1956/InterestedIn"
import ProjectDetails from "@/components/Projects/Ongoing/Chartered1956/ProjectDetails"
import WhyChooseChartered from "@/components/Projects/Ongoing/Chartered1956/WhyChooseChartered"

export default function page() {
  const heroSectionData = {
    heading: {
      year: "",
      firstLine: "A timeless residence where",
      secondLine: "royal heritage meets refined modern living",
      thirdLine: "",
    },
    imageUrl: "/banner/chartered-1956.png",
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
