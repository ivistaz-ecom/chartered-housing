import "./globals.css"
import Footer from "@/components/Footer/Footer"

export const metadata = {
  title: "Chartered Housing",
  description: "Chartered Housing",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        <Footer />
      </body>
    </html>
  )
}
