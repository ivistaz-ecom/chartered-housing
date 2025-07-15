import HeroSection from "@/components/HeroSection/HeroSection"
import OurIdealPartners from "@/components/PartnerWithUs/OurIdealPartners"
import WeBringToTheTable from "@/components/PartnerWithUs/WeBringToTheTable"
import SendUsYourQuery from "@/components/PartnerWithUs/SendUsYourQuery"
import React from "react"

export default function page() {
  const heroSectionData = {
    page: "partner with us",
    heading: {
      year: "",
      firstLine: "Let’s Build",
      secondLine: "Something Enduring — Together",
      thirdLine: "",
    },
    imageUrl: "/banner/partner-banner.png",
    desc: "",
  }

  return (
    <>
      <HeroSection data={heroSectionData} />
      <SendUsYourQuery />
      <OurIdealPartners />
      <WeBringToTheTable />
    </>
  )
}
