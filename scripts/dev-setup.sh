#!/bin/bash

# CS Portfolio Development Setup Script
# This script helps set up the development environment

set -e

echo "🚀 Setting up CS Portfolio development environment..."

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "📦 Installing pnpm..."
    npm install -g pnpm
else
    echo "✅ pnpm is already installed"
fi

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Check if Git is initialized
if [ ! -d ".git" ]; then
    echo "🔧 Initializing Git repository..."
    git init
    git branch -m main
fi

# Create .env.local if it doesn't exist
if [ ! -f ".env.local" ]; then
    echo "📝 Creating .env.local file..."
    cat > .env.local << EOF
# Environment variables for CS Portfolio
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
EOF
    echo "✅ Created .env.local file"
fi

# Check if development server can start
echo "🔍 Testing development server..."
timeout 10s pnpm dev > /dev/null 2>&1 &
DEV_PID=$!

# Wait a moment for server to start
sleep 3

# Check if server is running
if curl -s http://localhost:3000 > /dev/null; then
    echo "✅ Development server is working correctly"
    kill $DEV_PID 2>/dev/null || true
else
    echo "❌ Development server failed to start"
    kill $DEV_PID 2>/dev/null || true
    exit 1
fi

# Run linting
echo "🔍 Running linting checks..."
pnpm lint

# Check TypeScript
echo "🔍 Checking TypeScript..."
npx tsc --noEmit

echo ""
echo "🎉 Setup complete! Your development environment is ready."
echo ""
echo "Next steps:"
echo "1. Run 'pnpm dev' to start the development server"
echo "2. Open http://localhost:3000 in your browser"
echo "3. Start editing portfolio.tsx to customize your portfolio"
echo ""
echo "Useful commands:"
echo "  pnpm dev     - Start development server"
echo "  pnpm build   - Build for production"
echo "  pnpm lint    - Run ESLint"
echo "  pnpm start   - Start production server"
echo ""
echo "Happy coding! 🚀" 