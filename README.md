# SecGuided - Security Education Portal

A modern React + Vite + TailwindCSS landing page for the SecGuided security education community.

## 🚀 Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS 3** - Utility-first CSS framework
- **PostCSS** - CSS transformation tool

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🏗️ Build

```bash
npm run build
```

Production files will be built in the `dist/` directory.

## 📁 Project Structure

```
secguided/
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── CoursesSection.jsx
│   │   ├── PopularSections.jsx
│   │   ├── CommunitySections.jsx
│   │   ├── LatestPosts.jsx
│   │   ├── LatestResources.jsx
│   │   ├── Footer.jsx
│   │   └── CookieBanner.jsx
│   ├── data/             # Dummy data arrays
│   │   └── data.js
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html            # HTML template
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── package.json
```

## 🎨 Features

- **Dark Theme** - Modern dark background with cyan/blue accents
- **Responsive Design** - Desktop (3-4 cols), tablet (2 cols), mobile (1 col)
- **Component-Based** - Modular React components
- **Interactive Elements** - Hover effects, transitions, animations
- **Cookie Banner** - Accept and store consent in localStorage
- **Sticky Header** - Fixed navigation on scroll
- **Mobile Menu** - Responsive hamburger menu

## 📄 Sections

1. **Header** - Navigation, search, auth buttons
2. **Hero** - Welcome message, CTAs, announcement toast
3. **Official Courses** - Course cards with metadata
4. **Most Popular** - Popular tutorial categories
5. **Community** - Forum-like category listings
6. **Latest Posts** - Recent forum posts
7. **Latest Resources** - Educational resources carousel
8. **Footer** - Links, copyright
9. **Cookie Banner** - Cookie consent notice

## 🎨 Customization

### Colors

The dark theme colors are defined in `tailwind.config.js`:

```javascript
colors: {
  dark: {
    900: '#0a0e17',  // Main background
    800: '#111827',  // Card background
    700: '#1f2937',  // Border color
    600: '#374151',  // Hover state
  },
  cyan: {
    400: '#22d3ee',  // Accent
    500: '#06b6d4',  // Primary
    600: '#0891b2',  // Darker accent
  },
}
```

### Data

All content data is in `src/data/data.js` and can be easily modified:

- `courses` - Official courses
- `popularSections` - Popular categories
- `communitySections` - Forum categories
- `latestPosts` - Recent posts
- `latestResources` - Educational resources
- `navItems` - Navigation links
- `footerLinks` - Footer links

## 📝 License

© 2026 SecGuided. All Rights Reserved.
