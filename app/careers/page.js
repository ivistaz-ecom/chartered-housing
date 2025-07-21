import HeroSection from "@/components/HeroSection/HeroSection"
import React from "react"

export default function page() {
  const heroSectionData = {
    page: "Careers",
    heading: {
      year: "",
      firstLine: "Build More Than a Career —",
      secondLine: "Build Legacy",
      thirdLine: "",
    },
    imageUrl: "/banner/home-banner.png",
    desc: "",
  }

  return (
    <>
      <HeroSection data={heroSectionData} />
    </>
  )
}
