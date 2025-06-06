```markdown
# Chartered Housing

Welcome to the codebase for **Chartered Housing** — a premium real estate website showcasing ongoing, upcoming, and completed projects, corporate initiatives, and company information.

## 🏠 Overview

This website is built to represent the values of Chartered Housing: **transparency**, **quality**, and a **legacy of excellence** in real estate. The platform highlights residential and commercial properties, CSR activities, and career opportunities.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS (v4+)](https://tailwindcss.com/)
- **Fonts:** Google Fonts using `next/font/google`
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Component Library:** ShadCN UI

## 📁 Project Structure
```

├── app/ # Next.js app directory
│ ├── layout.tsx # Root layout with metadata and fonts
│ ├── page.tsx # Homepage
│ └── ...
├── components/ # Reusable UI components
│ ├── Header/
│ ├── Footer/
│ └── ...
├── lib/ # Utilities or API clients
├── public/ # Static assets (images, icons, etc.)
├── styles/ # Global CSS (Tailwind, themes)
├── data/ # Lists for menus, social links, etc.
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js # PostCSS config
└── README.md # Project documentation

````

## 📦 Installation

1. **Clone the repo:**

```bash
git clone https://github.com/your-username/chartered-housing.git
cd chartered-housing
````

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm run dev
```

Open `http://localhost:3000` to view the site.

## 🛠 Features

- Fully responsive layout
- SEO optimized structure
- Smooth animations and transitions
- Dynamic menu and footer sections
- Enquiry form with sheet modal
- Custom font integration (Playfair Display, Satoshi)
- Scroll animations, image sliders, and more

## 🌐 Deployment

This site can be deployed using:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- Any static hosting platform that supports Next.js

## ✍️ Customization

- **Fonts:** Defined via `next/font/google` in `layout.tsx`
- **Menu Data:** Located in `data/menu.js` or `data/menu.ts`
- **Colors & Variables:** Set using Tailwind’s new `@theme` syntax or `tailwind.config.js`
