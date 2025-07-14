import HeroSection from "@/components/HeroSection/HeroSection"
import Completed from "@/components/Projects/Completed/Completed"
import OurLocations from "@/components/Projects/Completed/OurLocations"
import React from "react"

export default function page() {
  const heroSectionData = {
    heading: {
      year: "",
      firstLine: "Remembered for generations.",
      secondLine: "Every project we complete is a testament",
      thirdLine: "to precision, care, and a promise fulfilled.",
    },
    imageUrl: "/banner/completed-banner.png",
    desc: "",
  }

  return (
    <>
      <HeroSection data={heroSectionData} />
      <Completed />
      <OurLocations />
    </>
  )
}
