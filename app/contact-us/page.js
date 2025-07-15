import ContactForm from "@/components/ContactUs/ContactForm"
import ContactInfo from "@/components/ContactUs/ContactInfo"
import HeroSection from "@/components/HeroSection/HeroSection"
import React from "react"

export default function page() {
  const heroSectionData = {
    page: "Contact Us",
    heading: {
      year: "",
      firstLine: "Looking for your next home or a",
      secondLine: "meaningful collaboration?",
      thirdLine: "Let us know how we can assist you today.",
    },
    imageUrl: "/banner/contact-banner.png",
    desc: "Whether you're exploring a new home, looking to partner with us, or simply have a question — we’d love to hear from you. Share your details and our team will get in touch with you shortly.",
  }
  return (
    <>
      <HeroSection data={heroSectionData} />
      <ContactInfo />
      <ContactForm />
    </>
  )
}
