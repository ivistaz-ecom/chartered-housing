import EnquireNow from "@/components/EnquireNow/EnquireNow"
import Header from "@/components/Header/Header"
import HeroSection from "@/components/HeroSection/HeroSection"
import WhatsAppButton from "@/components/WhatsApp/WhatsApp"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Header />

      <HeroSection />

      <WhatsAppButton />
      <EnquireNow />
    </>
  )
}
