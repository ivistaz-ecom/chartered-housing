import HeroSection from "@/components/HeroSection/HeroSection"

export default function page() {
  const heroSectionData = {
    page: "chartered birdsong",
    heading: {
      year: "",
      firstLine: "Crafted Spaces,",
      secondLine: "Currently Taking Shape",
      thirdLine: "",
    },
    imageUrl: "/banner/ongoing-banner.png",
    desc: "Explore our curated selection of ongoing projects — each designed with care, built with integrity, and progressing with precision.From thoughtfully planned apartments to premium plotted developments, find a home that’s being built with you in mind.",
  }

  return (
    <>
      <HeroSection data={heroSectionData} />
    </>
  )
}
