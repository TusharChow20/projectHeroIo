<div align="center">

# 🚀 **AppHub**

### _Discover. Install. Experience — All in one hub!_

![React](https://img.shields.io/badge/React-18.0-blue?logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?logo=tailwindcss)
![Recharts](https://img.shields.io/badge/Recharts-Responsive%20Charts-orange?logo=recharts)
![License](https://img.shields.io/badge/License-MIT-green)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)

</div>

---

## 🧭 **Table of Contents**

- [✨ Features Overview](#-features-overview)
- [🧱 Layout & Design](#-layout--design)
- [🏠 Home Page](#-home-page)
- [📱 All Apps Page](#-all-apps-page)
- [📊 App Details Page](#-app-details-page)
- [💾 My Installation Page](#-my-installation-page)
- [⚙️ Additional Features](#️-additional-features)
- [🧩 Tech Stack](#-tech-stack)
- [📂 Data Structure](#-data-structure)
- [📸 Screenshots](#-screenshots)
- [📦 Installation Guide](#-installation-guide)
- [👨‍💻 Developer](#-developer)
- [🌐 Live Demo](#-live-demo)

---

## ✨ **Features Overview**

> A full-featured responsive React app store where users can explore, install, and manage apps using localStorage and dynamic routing — all wrapped in a modern UI.

---

## 🧱 **Layout & Design**

### 🧩 Header

- Clickable **Logo** → navigates to Home.
- Navigation bar with **Home**, **Apps**, **Installation** (active route highlighting).
- **Contribution Button** → links to GitHub profile.

### 🪶 Footer

- Custom-designed with creative layout and smooth UI.

### 📊 Data Structure

- Built from a JSON array of **12–20 app objects** containing image, title, description, stats, and rating distribution.

---

## 🏠 **Home Page**

✅ **Banner Section**

- Center-aligned heading & text.
- “App Store” and “Play Store” buttons redirect to official pages.

✅ **Stats Section**

- Displays key metrics using state cards.

✅ **Top Apps Section**

- Displays **8 trending apps** (4-column grid).
- Each card shows: image, title, downloads, and average rating.
- “Show All” → navigates to **All Apps Page**.

---

## 📱 **All Apps Page**

- **Title Section** with heading & subtitle (Figma inspired).
- **Search Feature**
  - Live search as user types.
  - Case-insensitive.
  - Displays _“No App Found”_ if none match.
- **Sorting Dropdown**
  - 🔼 _Low → High_
  - 🔽 _High → Low_
- **Dynamic App Grid**
  - Each card links to **App Details Page**.

---

## 📊 **App Details Page**

- App image, title, rating, downloads, and reviews displayed clearly.
- **Install Button Logic:**
  - On click → text changes to `Installed`, disables the button.
  - Saved in `localStorage`.
  - Success toast appears.
- **If already installed:**
  - Shows “Installed” from the start.
- **Review Chart:**
  - Interactive Recharts visualization.
- **App Description:**
  - Clean section for details.

---

## 💾 **My Installation Page**

- Displays apps installed via `localStorage`.
- **Uninstall Button:** removes app instantly from both UI and localStorage.
- **Toast Notifications:** shows confirmation message.
- **Sort Dropdown:** High–Low and Low–High by downloads.

---

## ⚙️ **Additional Features**

| Feature                     | Description                        |
| --------------------------- | ---------------------------------- |
| 🌀 **Loading Animation**    | Shown during navigation & search   |
| ❌ **Error Page**           | Custom 404 route                   |
| 🔁 **Route Persistence**    | No reload errors post-deployment   |
| 💬 **Toastify Integration** | User feedback on install/uninstall |

---

## 🧩 **Tech Stack**

| Technology              | Purpose                      |
| ----------------------- | ---------------------------- |
| ⚛️ **React.js (Vite)**  | Frontend UI framework        |
| 🎨 **Tailwind CSS**     | Modern responsive styling    |
| 🧭 **React Router DOM** | Route & navigation handling  |
| 📊 **Recharts**         | Chart visualization          |
| 💾 **LocalStorage API** | Persistent app installs      |
| 🔔 **React Toastify**   | Toast notifications          |
| ⚙️ **Vite**             | Fast dev server & build tool |

---

## 📂 **Data Structure Example**

```json
{
  "id": 1,
  "image": "https://example.com/app.png",
  "title": "TaskFlow Pro",
  "companyName": "Skybase Technologies",
  "description": "A productivity app designed to enhance your workflow and manage projects efficiently.",
  "size": 35,
  "reviews": 240,
  "ratingAvg": 4.6,
  "downloads": 125000,
  "ratings": [
    { "name": "1 star", "count": 20 },
    { "name": "2 star", "count": 15 },
    { "name": "3 star", "count": 35 },
    { "name": "4 star", "count": 60 },
    { "name": "5 star", "count": 110 }
  ]
}
```

## 📂 **Data Structure Example**

# Clone the repository

git clone https://github.com/TusharChow20/projectHeroIo.git

# Navigate to project folder

cd projectHeroIo

# Install dependencies

npm install

# Start the development server

npm run dev
