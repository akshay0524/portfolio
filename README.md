# MacOS Portfolio

A pixel-perfect macOS Ventura/Big Sur inspired personal portfolio website built with React, TailwindCSS, and Framer Motion.

## 🌟 Features

- **Desktop Experience**: Full window management system (drag, minimize, maximize).
- **Dock**: Dynamic scaling dock with app shortcuts.
- **Spotlight Search**: Press `Cmd + K` (or `Ctrl + K`) to launch apps or find projects.
- **Responsive**: Adapts to mobile devices (simplified experience).
- **Glassmorphism**: Beautiful blur effects and gradients.
- **Apps Included**:
  - **Finder**: About Me
  - **Safari**: Projects Showcase
  - **Notes**: Skills & Technologies
  - **Mail**: Contact Form
  - **Preview**: Resume Viewer

## 🛠️ Tech Stack

- **Framework**: React + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Icons**: Lucide React

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📦 Deployment

### Vercel (Recommended)
1. Push your code to GitHub.
2. Login to [Vercel](https://vercel.com).
3. "Add New..." -> "Project".
4. Import your styled-portfolio repository.
5. Vercel will auto-detect Vite. Click **Deploy**.

### Netlify
1. Push to GitHub.
2. Login to [Netlify](https://netlify.com).
3. "New site from Git".
4. Select repo.
5. Build command: `npm run build`.
6. Publish directory: `dist`.
7. Click **Deploy**.

## 🎨 Customization

- **Wallpaper**: Change the URL in `src/App.jsx`
- **Projects**: Edit `src/components/Apps/Projects.jsx`
- **About**: Edit `src/components/Apps/About.jsx`

---
Designed by [Your Name]
