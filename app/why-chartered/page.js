import HeroSection from "@/components/HeroSection/HeroSection"
import Since1989 from "@/components/WhyChartered/Since1989"
import React from "react"

export default function page() {
  const heroSectionData = {
    heading: {
      year: "",
      firstLine: "A Legacy of Trust",
      secondLine: "A Future Built with Purpose",
      thirdLine: "",
    },
    imageUrl: "/banner/why-chartered-banner.png",
    desc: "",
  }

  return (
    <>
      <HeroSection data={heroSectionData} />
      <Since1989 />
    </>
  )
}
