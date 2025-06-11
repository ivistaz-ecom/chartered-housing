import WhatsAppButton from "@/components/WhatsApp/WhatsApp"
import "./globals.css"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import EnquireNow from "@/components/EnquireNow/EnquireNow"

export const metadata = {
  title: "Chartered Housing",
  description: "Chartered Housing",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <EnquireNow />
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  )
}
