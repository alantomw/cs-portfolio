#!/bin/bash

# Install Node.js 20 (LTS) using NodeSource repository
echo "📦 Installing Node.js 20..."
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install pnpm globally
echo "📦 Installing pnpm..."
npm install -g pnpm

# Add npm global bin to PATH in user profile
echo 'export PATH="$HOME/.npm-global/bin:$PATH"' >> $HOME/.profile
echo 'export PATH="/usr/local/bin:$PATH"' >> $HOME/.profile

# Source the profile to make pnpm available immediately
source $HOME/.profile

# Navigate to workspace and install dependencies
cd /mnt/persist/workspace
echo "📦 Installing project dependencies..."
pnpm install

# Create .env.local if it doesn't exist
if [ ! -f ".env.local" ]; then
    echo "📝 Creating .env.local file..."
    cat > .env.local << 'EOF'
# Environment variables for CS Portfolio
NEXT_PUBLIC_SITE_URL=http://localhost:3000
EOF
fi

echo "✅ Setup complete! Environment is ready for build and lint validation."