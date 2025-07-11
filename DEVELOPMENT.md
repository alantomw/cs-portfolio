# Development Guide

This guide covers the development workflow, best practices, and common tasks for the CS Portfolio project.

## 🚀 Quick Start

1. **Clone and setup**
   ```bash
   git clone <your-repo-url>
   cd cs-portfolio
   pnpm install
   pnpm dev
   ```

2. **Open in your editor**
   - Recommended: VS Code with TypeScript and Tailwind CSS extensions
   - The project includes proper TypeScript configuration

## 🔄 Git Workflow

### Branch Strategy
- `main` - Production-ready code
- `develop` - Development branch (create this)
- `feature/*` - Feature branches
- `hotfix/*` - Critical bug fixes

### Committing Changes
```bash
# Create a feature branch
git checkout -b feature/new-component

# Make your changes
# ...

# Add and commit
git add .
git commit -m "feat: add new portfolio section"

# Push to remote
git push origin feature/new-component

# Create pull request to merge into develop
```

### Commit Message Convention
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

## 🎨 Component Development

### Creating New Components

1. **Create the component file**
   ```bash
   # Create in components/ for custom components
   touch components/my-component.tsx
   
   # Or use shadcn/ui for UI components
   pnpm dlx shadcn@latest add button
   ```

2. **Component structure**
   ```tsx
   "use client"
   
   import { ComponentProps } from "react"
   
   interface MyComponentProps {
     // Define your props
   }
   
   export function MyComponent({ ...props }: MyComponentProps) {
     return (
       <div className="...">
         {/* Your component content */}
       </div>
     )
   }
   ```

3. **Add to portfolio**
   ```tsx
   // In portfolio.tsx
   import { MyComponent } from "./components/my-component"
   
   // Use in your JSX
   <MyComponent />
   ```

### Styling Guidelines

- **Use Tailwind CSS classes** for styling
- **Follow the existing color scheme** (slate colors)
- **Add hover effects** for interactivity
- **Make components responsive** with mobile-first approach
- **Use CSS variables** for theme colors

### Animation Guidelines

- **Use CSS transitions** for hover effects
- **Add staggered animations** with `animationDelay`
- **Keep animations subtle** and professional
- **Test on different devices** for performance

## 📱 Responsive Design

### Breakpoints
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

### Best Practices
- Start with mobile design
- Use `md:` and `lg:` prefixes for larger screens
- Test on real devices
- Use `flex` and `grid` for layouts

## 🔧 Development Tools

### VS Code Extensions
- TypeScript and JavaScript Language Features
- Tailwind CSS IntelliSense
- ESLint
- Prettier
- Auto Rename Tag
- Bracket Pair Colorizer

### Useful Commands
```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Git
git status        # Check repository status
git log --oneline # View commit history
git diff          # View changes

# Package management
pnpm add <package>     # Add dependency
pnpm remove <package>  # Remove dependency
pnpm update           # Update dependencies
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] All pages load correctly
- [ ] Responsive design works on all screen sizes
- [ ] All links work properly
- [ ] Animations are smooth
- [ ] No console errors
- [ ] Performance is good (Lighthouse score > 90)

### Browser Testing
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Vercel (Recommended)
1. **Connect repository**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure build settings

2. **Environment variables** (if needed)
   - Add in Vercel dashboard
   - Use `NEXT_PUBLIC_` prefix for client-side variables

3. **Automatic deployment**
   - Every push to `main` triggers deployment
   - Preview deployments for pull requests

### Manual Deployment
```bash
# Build the project
pnpm build

# Test production build
pnpm start

# Deploy to your platform
# (Follow platform-specific instructions)
```

## 🐛 Debugging

### Common Issues

1. **TypeScript errors**
   - Check import paths
   - Verify component props
   - Run `pnpm lint` for detailed errors

2. **Styling issues**
   - Check Tailwind classes
   - Verify CSS variables
   - Use browser dev tools

3. **Build errors**
   - Check for missing dependencies
   - Verify TypeScript types
   - Clear `.next` folder and rebuild

### Debug Commands
```bash
# Clear cache and rebuild
rm -rf .next
pnpm build

# Check for TypeScript errors
npx tsc --noEmit

# Run ESLint with fixes
pnpm lint --fix
```

## 📚 Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

### Tools
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [Tailwind CSS Playground](https://play.tailwindcss.com)
- [React DevTools](https://react.dev/learn/react-developer-tools)

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Test thoroughly**
5. **Submit a pull request**

### Code Review Checklist
- [ ] Code follows project conventions
- [ ] All tests pass
- [ ] No console errors
- [ ] Responsive design maintained
- [ ] Performance not degraded
- [ ] Documentation updated

---

Happy coding! 🎉 