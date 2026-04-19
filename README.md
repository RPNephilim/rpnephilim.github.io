# React Portfolio Website

A modern, responsive portfolio website built with React.js, designed for software developers with backend expertise and React projects. Fully deployable on GitHub Pages.

## Features

- 🎨 **Modern Design** - Clean, professional UI with smooth animations
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- 🖼️ **Half-body Image Placeholder** - Ready for your professional photo
- 📂 **Projects Section** with:
  - Project thumbnails
  - Demo video support (click to play in modal)
  - GitHub repository links
  - Technology tags
- 💼 **Backend Focus** - Highlights your backend expertise
- ⚛️ **React Projects** - Showcases your frontend work
- 🎥 **Video Modal** - Interactive project demonstrations
- 🚀 **GitHub Pages Ready** - One-command deployment

## Project Structure

```
portfolio/
├── public/
│   └── assets/
│       ├── images/          # Project thumbnails
│       └── videos/          # Demo videos
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Hero.jsx         # Hero section with photo placeholder
│   │   ├── About.jsx        # About section
│   │   ├── Skills.jsx       # Skills & technologies
│   │   ├── Projects.jsx     # Projects showcase
│   │   ├── VideoModal.jsx   # Video player modal
│   │   ├── Contact.jsx      # Contact information
│   │   └── Footer.jsx       # Footer
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Content

#### Update Personal Information

Edit these files to add your details:

- **src/components/Hero.jsx** - Your name, title, social links
- **src/components/About.jsx** - Your bio and description
- **src/components/Skills.jsx** - Your skills and technologies
- **src/components/Contact.jsx** - Your contact information

#### Add Your Photo

Replace the placeholder in [Hero.jsx](src/components/Hero.jsx):

```jsx
// Replace the image-placeholder div with:
<div className="hero-image">
  <img src="/assets/your-photo.jpg" alt="Your Name" />
</div>
```

Then add your photo to `public/assets/your-photo.jpg`

#### Add Your Projects

Edit [src/components/Projects.jsx](src/components/Projects.jsx) and update the `projects` array:

```jsx
const projects = [
  {
    id: 'project1',
    title: 'Your Project Name',
    description: 'Project description...',
    tags: ['Tech1', 'Tech2', 'Tech3'],
    thumbnail: 'assets/images/project1-thumb.jpg',  // Add image to public/assets/images/
    video: 'assets/videos/project1-demo.mp4',        // Add video to public/assets/videos/
    github: 'https://github.com/yourusername/project'
  },
  // Add more projects...
]
```

#### Add Project Media

1. **Thumbnails**: Add project thumbnail images to `public/assets/images/`
   - Recommended size: 640x440px or 16:9 ratio
   - Format: JPG or PNG

2. **Demo Videos**: Add project demo videos to `public/assets/videos/`
   - Format: MP4 (best compatibility)
   - Keep file size reasonable (under 10MB recommended)
   - Consider hosting large videos on YouTube/Vimeo and linking instead

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view your portfolio.

## Deployment to GitHub Pages

### Option 1: Automated Deployment (Recommended)

1. **Update vite.config.js** with your repository name:

```js
export default defineConfig({
  plugins: [react()],
  base: '/rpnephilim.github.io/',  // Update if using custom repo name
})
```

2. **Install gh-pages** (already in package.json):

```bash
npm install
```

3. **Deploy**:

```bash
npm run build
npm run deploy
```

### Option 2: Manual Deployment

1. Build the project:

```bash
npm run build
```

2. The `dist` folder contains your production files

3. Push the contents of `dist` to the `gh-pages` branch:

```bash
git add dist -f
git commit -m "Deploy"
git subtree push --prefix dist origin gh-pages
```

### Option 3: GitHub Actions (CI/CD)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Customization

### Colors

Edit CSS variables in [src/index.css](src/index.css):

```css
:root {
  --primary-color: #2563eb;    /* Main blue */
  --secondary-color: #1e40af;  /* Darker blue */
  --accent-color: #60a5fa;     /* Light blue */
  /* ... more colors */
}
```

### Sections

Add or remove sections by editing [src/App.jsx](src/App.jsx):

```jsx
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects openVideoModal={openVideoModal} />
      {/* Add your custom sections here */}
      <Contact />
      <Footer />
    </div>
  )
}
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Icons** - Icon library
- **CSS3** - Styling with CSS variables
- **GitHub Pages** - Hosting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Tips for Best Results

1. **Optimize Images**: Compress thumbnails before adding them
2. **Short Videos**: Keep demo videos under 30 seconds when possible
3. **Mobile Testing**: Always test on mobile devices
4. **GitHub Links**: Make sure all GitHub repo links are correct
5. **SEO**: Update meta tags in `index.html` for better discoverability

## License

This project is open source and available for personal and commercial use.

---

**Made with ❤️ using React**
