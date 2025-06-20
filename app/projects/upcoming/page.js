import HeroSection from "@/components/HeroSection/HeroSection"
import ProjectsListingPage from "@/components/Projects/ProjectsListingPage"
import { upcomingProjects } from "@/lib/constants/projects"
import React from "react"

export default function page() {
  const heroSectionData = {
    heading: {
      year: "",
      firstLine: "Shaping the Future,",
      secondLine: "One Landmark at a Time",
      thirdLine: "",
    },
    imageUrl: "/banner/upcoming-banner.png",
    desc: "Our upcoming projects are a continuation of the values we’ve built over decades — transparency, precision, and timeless design. Explore what’s on the horizon as we expand our footprint with thoughtfully planned developments in Bengaluru’s most promising corridors.",
  }

  return (
    <>
      <HeroSection data={heroSectionData} />
      <ProjectsListingPage projectsList={upcomingProjects} />
    </>
  )
}
