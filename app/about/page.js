import AwardsAndRecognitions from "@/components/About/AwardsAndRecognitions"
import BecauseAtChartered from "@/components/About/BecauseAtChartered"
import ButOurStory from "@/components/About/ButOurStory"
import WeSetOut from "@/components/About/WeSetOut"
import HeroSection from "@/components/HeroSection/HeroSection"

export default function page() {
  const heroSectionData = {
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
      <WeSetOut />
      <ButOurStory />
      <BecauseAtChartered />
      <AwardsAndRecognitions />
    </>
  )
}
