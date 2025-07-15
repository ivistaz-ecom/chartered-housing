import HeroSection from "@/components/HeroSection/HeroSection"
import React from "react"

export default function page() {
  const heroSectionData = {
    page: "commercial projects",
    heading: {
      year: 35,
      firstLine: "Years of Building a Legacy of",
      secondLine: "Quality through Transparency",
      thirdLine: "",
    },
    imageUrl: "/banner/home-banner.png",
    desc: "For over thirty five years, we’ve been building more than just homes; we’ve been creating a legacy of quality and trust. Our journey has been one of commitment to excellence and being open with our customers every step of the way.",
  }

  return (
    <>
      <HeroSection data={heroSectionData} />
    </>
  )
}
