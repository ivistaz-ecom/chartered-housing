import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

// Navigation and social menu data for the Footer component

export const ourProjectsMenu = [
  { menu: "Ongoing Projects", path: "/projects/ongoing" },
  { menu: "Upcoming Projects", path: "/projects/upcoming" },
  { menu: "Completed Projects", path: "/projects/completed" },
  { menu: "Commercial Projects", path: "/projects/commercial" },
]

export const companyMenu = [
  { menu: "About Us", path: "/about" },
  { menu: "Why Chartered", path: "/why-chartered" },
  { menu: "Chartered Interiors", path: "/chartered-interiors" },
  { menu: "Careers", path: "/careers" },
  { menu: "CSR Activities", path: "/csr-activities" },
]

export const connectMenu = [
  {
    icon: "/navmenu/icon01.png",
    menu: "Request a Call Back",
    subtitle: "We will get back to you.",
    path: "/contact-us",
    target: "_self",
  },
  {
    icon: "/navmenu/icon02.png",
    menu: "WhatsApp",
    subtitle: "Send us queries on +91 8660697659",
    path: "https://wa.me/919591596777",
    target: "_blank",
  },
  {
    icon: "/navmenu/icon03.png",
    menu: "Partner with us",
    subtitle: "sales@charteredhousing.com",
    path: "/partner-with-us",
    target: "_self",
  },
]

export const socialLinks = [
  {
    url: "https://www.facebook.com/",
    icon: <FaFacebookF />,
  },
  {
    url: "https://x.com/",
    icon: <FaXTwitter />,
  },
  {
    url: "https://www.instagram.com/",
    icon: <FaInstagram />,
  },
  {
    url: "https://www.linkedin.com/company/",
    icon: <FaLinkedinIn />,
  },
  {
    url: "https://www.youtube.com/",
    icon: <FaYoutube />,
  },
]
