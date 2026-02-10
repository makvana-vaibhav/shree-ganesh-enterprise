#!/bin/bash

# Shree Ganesh Enterprise - GitHub Pages Deployment Script
# This script automates the deployment to GitHub Pages

echo "🚀 Starting deployment to GitHub Pages..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if dist directory exists
if [ ! -d "dist" ]; then
    echo "❌ Error: dist directory not found!"
    exit 1
fi

echo "${BLUE}📦 Step 1: Preparing files...${NC}"

# Create a temporary directory
TEMP_DIR=$(mktemp -d)
cp -r dist/* "$TEMP_DIR/"

echo "${GREEN}✅ Files copied to temporary directory${NC}"

echo "${BLUE}📝 Step 2: Switching to gh-pages branch...${NC}"

# Store current branch
CURRENT_BRANCH=$(git branch --show-current)

# Check if gh-pages branch exists
if git show-ref --verify --quiet refs/heads/gh-pages; then
    git checkout gh-pages
else
    git checkout --orphan gh-pages
    git rm -rf .
fi

echo "${GREEN}✅ On gh-pages branch${NC}"

echo "${BLUE}📋 Step 3: Copying files...${NC}"

# Copy files from temp directory
cp -r "$TEMP_DIR"/* .

# Add .nojekyll file to bypass Jekyll processing
touch .nojekyll

echo "${GREEN}✅ Files ready for deployment${NC}"

echo "${BLUE}💾 Step 4: Committing changes...${NC}"

# Add all files
git add .

# Commit with timestamp
COMMIT_MSG="Deploy to GitHub Pages - $(date '+%Y-%m-%d %H:%M:%S')"
git commit -m "$COMMIT_MSG"

echo "${GREEN}✅ Changes committed${NC}"

echo "${BLUE}🌐 Step 5: Pushing to GitHub...${NC}"

# Push to gh-pages branch
git push origin gh-pages --force

echo "${GREEN}✅ Pushed to GitHub${NC}"

# Return to original branch
echo "${BLUE}🔄 Step 6: Returning to original branch...${NC}"
git checkout "$CURRENT_BRANCH"

# Clean up
rm -rf "$TEMP_DIR"

echo "${GREEN}"
echo "════════════════════════════════════════════"
echo "   ✨ Deployment Successful! ✨"
echo "════════════════════════════════════════════"
echo "${NC}"
echo "Your site should be live at:"
echo "https://[your-username].github.io/[your-repo-name]/"
echo ""
echo "To enable GitHub Pages:"
echo "1. Go to your repository on GitHub"
echo "2. Navigate to Settings → Pages"
echo "3. Select 'gh-pages' branch as source"
echo "4. Click Save"
echo ""
echo "Note: It may take a few minutes for changes to appear."
