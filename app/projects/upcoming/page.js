import HeroSection from "@/components/HeroSection/HeroSection"
import UpcomingProjects from "@/components/Projects/Upcoming/UpcomingProjects"
import React from "react"

export default function page() {
  const heroSectionData = {
    page: "upcoming projects",
    heading: {
      year: "",
      firstLine: "Shaping the Future,",
      secondLine: "One Landmark at a Time",
      thirdLine: "",
    },
    imageUrl: "/banner/upcoming-banner01.png",
    desc: "Our upcoming projects are a continuation of the values we’ve built over decades — transparency, precision, and timeless design. Explore what’s on the horizon as we expand our footprint with thoughtfully planned developments in Bengaluru’s most promising corridors.",
  }

  return (
    <>
      <HeroSection data={heroSectionData} />
      <UpcomingProjects />
    </>
  )
}
