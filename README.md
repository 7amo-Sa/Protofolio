# Mohamed Sayed — Personal Portfolio (Flutter Developer 2026)

A premium, modern, black & red personal portfolio website built with pure **HTML5**, **CSS3**, and **Vanilla JavaScript**. Zero frameworks, zero dependencies, completely data-driven, and ready for production or freelance client presentations.

---

## 📁 1. Project Structure

```
portfolio/
│
├── index.html                   # Semantic HTML5 markup and layout containers
│
├── css/
│   ├── style.css               # Core design system, variables, components & dark theme
│   ├── animations.css          # Typing cursor, keyframes, scroll reveals & parallax
│   └── responsive.css          # Responsive breakpoints (1200px, 992px, 768px, 576px)
│
├── js/
│   ├── data.js                 # ★ ALL EDITABLE PORTFOLIO CONTENT (Edit here!)
│   ├── animations.js           # Vanilla JS typing effect, scroll reveal, progress bars, parallax
│   └── main.js                 # DOM rendering, sticky navigation, mobile menu, slider logic
│
├── assets/
│   ├── images/
│   │   ├── profile.jpg         # Hero profile portrait
│   │   ├── about.jpg           # About section workspace photo
│   │   ├── project-1.jpg       # Demo Project 01: E-Commerce App
│   │   ├── project-2.jpg       # Demo Project 02: Movies App
│   │   ├── project-3.jpg       # Demo Project 03: AI Chat App
│   │   ├── project-4.jpg       # Demo Project 04: Smart Chess
│   │   ├── avatar-placeholder.jpg # Testimonials avatar
│   │   ├── avatar-1.jpg        # Demo Testimonial 01 avatar
│   │   ├── avatar-2.jpg        # Demo Testimonial 02 avatar
│   │   └── avatar-3.jpg        # Demo Testimonial 03 avatar
│   │
│   └── icons/
│       └── favicon.svg         # Modern vector favicon
│
└── README.md                   # Full documentation and setup guide
```

---

## 🚀 2. How to Run

Because this project is built using pure Vanilla web standards, it does not require any bundler, Node.js server, or build step!

### Option A: Double-Click (Direct in Browser)
Simply double-click `index.html` or drag and drop it into Google Chrome, Microsoft Edge, Firefox, or Safari.

### Option B: Local Development Server
If you prefer running via a local server:
```bash
# Using Node / npx
npx serve .

# OR using Python 3
python -m http.server 8000

# OR using VS Code
Install "Live Server" extension and click "Go Live"
```
Then visit `http://localhost:3000` (or `http://localhost:8000`).

---

## ✏️ 3. How to Change Personal Information

Open [`js/data.js`](js/data.js) in your text editor. Update the `personalInfo` object:

```javascript
personalInfo: {
    name: "Mohamed Sayed",
    firstName: "Mohamed",
    lastName: "Sayed",
    role: "Flutter Developer",
    year: 2026,
    heroGreeting: "Hello, I'm",
    heroDescription: "Your customized bio description goes here...",
    email: "your.email@example.com",
    whatsapp: "https://wa.me/201000000000",
    location: "Egypt / Remote",
    slogan: "Building digital experiences that make a difference."
}
```
All sections of the website update automatically.

---

## 📱 4. How to Change or Add Projects

All project cards are dynamically generated from the `projects` array in [`js/data.js`](js/data.js).

### To edit an existing project:
Simply edit the properties in the array:
```javascript
{
    id: "proj-1",
    title: "E-Commerce App",
    label: "Demo Project",
    type: "Demo Project 01",
    description: "A modern e-commerce mobile application concept...",
    image: "assets/images/project-1.jpg",
    technologies: ["Flutter", "Dart", "Firebase", "BLoC"],
    github: "https://github.com/yourusername/ecommerce-app",
    demo: "https://your-demo-url.com"
}
```

### To add a new (5th, 6th, etc.) project:
Simply copy and paste another object inside the `projects` array in [`js/data.js`](js/data.js):
```javascript
{
    id: "proj-5",
    title: "Crypto Tracker App",
    label: "Demo Project",
    type: "Demo Project 05",
    description: "Real-time cryptocurrency portfolio tracker and candlestick charting.",
    image: "assets/images/project-5.jpg",
    technologies: ["Flutter", "WebSockets", "CoinGecko API"],
    github: "#",
    demo: "#"
}
```
**No HTML editing is required!** The new project card appears on the site with animations, tech tags, and badges automatically.

---

## 🛠️ 5. How to Change Services

Services are listed in the `services` array inside [`js/data.js`](js/data.js):
```javascript
{
    number: "01",
    icon: "fa-solid fa-mobile-screen",
    title: "Flutter App Development",
    description: "End-to-end cross-platform iOS and Android mobile applications..."
}
```
You can use any icon class from [Font Awesome 6](https://fontawesome.com/icons).

---

## 📊 6. How to Change Skills & Percentages

Inside [`js/data.js`](js/data.js), look for the `skills` array. Each card contains a category and list of skill items with numerical percentage values:
```javascript
{
    category: "Flutter Development",
    icon: "fa-solid fa-mobile-screen-button",
    items: [
        { name: "Responsive Layouts", percentage: 95 },
        { name: "Custom Widgets & Canvas", percentage: 90 },
        { name: "Flutter Animations", percentage: 88 }
    ]
}
```
Changing the percentage value (e.g. `95`) automatically updates both the text label and the animated progress bar width!

---

## 🔗 7. How to Change Social Links

Inside [`js/data.js`](js/data.js), update the `socialLinks` object:
```javascript
socialLinks: {
    github: "https://github.com/7amo-Sa",
    linkedin: "https://www.linkedin.com/in/mohamed-sayed--dev/",
    whatsapp: "https://wa.me/201061675235",
    email: "mailto:mohamed.sayedd.dev@gmail.com"
}
```
This updates links in both the Hero section and the Footer.

---

## 🖼️ 8. How to Replace Images

Simply replace the image files in `assets/images/` with your own images, maintaining the same filenames:
- `profile.jpg`: Your portrait photo for the Hero section.
- `about.jpg`: Workspace / developer photo for About Me.
- `project-1.jpg` to `project-4.jpg`: Screenshots or mockups of your mobile applications (recommended aspect ratio: 16:9).
- `avatar-1.jpg`, `avatar-2.jpg`, `avatar-3.jpg`: Client avatars for testimonials.

Or change the file path strings in [`js/data.js`](js/data.js).

---

## 🎨 9. How to Change Colors

All colors are controlled by CSS Custom Properties (variables) defined at the top of [`css/style.css`](css/style.css):

```css
:root {
    /* Brand Colors */
    --color-bg: #000000;
    --color-card: #101010;
    --color-card-elevated: #161616;
    --color-card-border: rgba(255, 0, 0, 0.18);
    --color-card-border-hover: #FF0000;

    --color-primary: #FF0000;          /* Main electric red accent */
    --color-crimson: #BC0202;          /* Mid red tone */
    --color-dark-red: #830000;         /* Deep crimson accent */
    --color-red-glow: rgba(255, 0, 0, 0.45);
}
```
Changing these variables instantly recolors the entire portfolio, glows, and borders.

---

## 🌐 10. How to Deploy

Because this website is completely static, you can deploy it for free anywhere in under 1 minute:

### Option 1: GitHub Pages
1. Push this repository to GitHub.
2. In your GitHub repository, go to **Settings > Pages**.
3. Under **Branch**, select `main` (or `master`) and `/root`.
4. Click **Save**. Your site is now live at `https://<username>.github.io/<repo-name>/`.

### Option 2: Netlify
1. Go to [Netlify.com](https://www.netlify.com/).
2. Drag and drop the `Protofolio` folder onto Netlify.
3. Done! Your site is immediately live with HTTPS and custom domain support.

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory.

---

## 🛡️ License

© 2026 Mohamed Sayed. All rights reserved.
Available for personal and commercial portfolio presentation.
