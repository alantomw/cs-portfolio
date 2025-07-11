# Development Guide

Quick reference for working on your CS Portfolio project.

## 🚀 Quick Start

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm lint         # Run ESLint
```

## 🎨 Making Changes

### Edit Portfolio Content
- **Main content**: Edit `portfolio.tsx`
- **Skills**: Update the `skills` array
- **Projects**: Modify the `projects` array
- **Personal info**: Change hero section text

### Add New Components
1. Create file in `components/` (e.g., `components/my-component.tsx`)
2. Import in `portfolio.tsx`
3. Use in your JSX

### Styling
- Use Tailwind CSS classes
- Follow existing color scheme (slate colors)
- Add hover effects for interactivity

## 🚀 Deployment
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

## 🐛 Common Issues
- **Build errors**: Run `rm -rf .next && pnpm build`
- **TypeScript errors**: Check import paths and props
- **Styling issues**: Verify Tailwind classes

## 📚 Resources
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
