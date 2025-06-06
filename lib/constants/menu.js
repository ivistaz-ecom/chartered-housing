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
  { menu: "Commercial Projects", path: "/projects/commercial" },
  { menu: "Completed Projects", path: "/projects/completed" },
]

export const companyMenu = [
  { menu: "About Us", path: "/about" },
  { menu: "Careers", path: "/careers" },
  { menu: "Chartered Interiors", path: "/chartered-interiors" },
  { menu: "CSR Activities", path: "/csr-activities" },
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
