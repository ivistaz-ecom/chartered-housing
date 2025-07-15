import HeroSection from "@/components/HeroSection/HeroSection"
import Projects from "@/components/HomePage/Projects/Projects"
import Since1989 from "@/components/HomePage/Since1989/Since1989"
import StatsBanner from "@/components/HomePage/StatsBanner/StatsBanner"
import Testimonials from "@/components/HomePage/Testimonials/Testimonials"

export default function Home() {
  const heroSectionData = {
    page: "Home",
    heading: {
      year: 36,
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
      <Projects />
      <StatsBanner />
      <Since1989 />
      <Testimonials />
    </>
  )
}
