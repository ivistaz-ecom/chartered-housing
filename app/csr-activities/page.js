import CommitmentInAction from "@/components/CsrActivities/CommitmentInAction"
import PeopleBeforeProfit from "@/components/CsrActivities/PeopleBeforeProfit"
import HeroSection from "@/components/HeroSection/HeroSection"
import React from "react"

export default function page() {
  const heroSectionData = {
    page: "Corporate <br /> Social Responsibility",
    heading: {
      year: "",
      firstLine: "",
      secondLine: "Building Better Lives",
      thirdLine: "",
    },
    imageUrl: "/banner/csr-banner.png",
    desc: "At Chartered Housing, we believe real estate is not just about structures - it's about people. From the start, our mission has been clear: put ethics before profits, and impact before image. This commitment extends beyond homes and into communities, the environment, and everyday lives.",
  }

  return (
    <>
      <HeroSection data={heroSectionData} />
      <PeopleBeforeProfit />
      <CommitmentInAction />
    </>
  )
}
