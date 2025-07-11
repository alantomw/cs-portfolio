A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a dark theme with glassmorphism effects, smooth animations, and a professional design suitable for software engineers.

## 🚀 Features

- **Modern Design**: Dark theme with glassmorphism effects and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **TypeScript**: Built with TypeScript for better development experience
- **Component Library**: Uses shadcn/ui for consistent, accessible components
- **Performance**: Optimized with Next.js 15 and React 19
- **SEO Ready**: Built-in SEO optimization with Next.js

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Package Manager**: pnpm
- **Deployment**: Vercel-ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd cs-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
cs-portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main page component
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── project-card.tsx  # Project showcase cards
│   ├── skill-badge.tsx   # Technology skill badges
│   ├── theme-toggle.tsx  # Theme switcher
│   ├── music-grid.tsx    # Music visualization
│   └── spotify-player.tsx # Music player
├── portfolio.tsx         # Main portfolio component
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
└── public/               # Static assets
```

## 🎨 Customization

### Personal Information
Edit the main content in `portfolio.tsx`:
- Update personal information in the hero section
- Modify the skills array
- Add your own projects to the projects array
- Update social media links

### Styling
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind CSS classes
- Theme colors are defined in CSS variables

### Components
- All UI components are in `components/ui/`
- Custom components are in `components/`
- Add new components as needed

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project is compatible with any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 🔧 Development

### Adding New Components
1. Create new component in `components/`
2. Import and use in `portfolio.tsx`
3. Follow the existing component patterns

### Styling Guidelines
- Use Tailwind CSS classes
- Follow the existing color scheme
- Maintain responsive design
- Add hover effects for interactivity

### Code Quality
- Use TypeScript for all new code
- Follow ESLint rules
- Write meaningful component names
- Add comments for complex logic

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Built with ❤️ using Next.js and Tailwind CSS
