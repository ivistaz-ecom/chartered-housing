import { Playfair_Display, Nunito } from "next/font/google"
//import localFont from "next/font/local"
import "./globals.css"

import WhatsAppButton from "@/components/WhatsApp/WhatsApp"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import EnquireNow from "@/components/EnquireNow/EnquireNow"

const playfairDisplay = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

// const proximaNova = localFont({
//   src: [
//     {
//       path: "fonts/proximanova_regular.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "fonts/proximanova_light.otf",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "fonts/proximanova_extrabold.otf",
//       weight: "800",
//       style: "normal",
//     },
//     {
//       path: "fonts/proximanova_black.otf",
//       weight: "900",
//       style: "normal",
//     },
//     {
//       path: "fonts/proximanova_black.ttf",
//       weight: "900",
//       style: "normal",
//     },
//     {
//       path: "fonts/proximanova_blackit.otf",
//       weight: "900",
//       style: "italic",
//     },
//     {
//       path: "fonts/proximanova_bold.otf",
//       weight: "700",
//       style: "normal",
//     },
//   ],
// })

const nunito = Nunito({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Chartered Housing",
  description: "Chartered Housing",
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${nunito.className} ${playfairDisplay.variable}`}
    >
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
