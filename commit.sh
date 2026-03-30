#!/bin/bash
git add README.md package.json
git commit -m "chore: initial setup and update README"

git add src/index.css src/App.css
git commit -m "chore: configure Tailwind CSS and base styles"

git add src/data/products.json
git commit -m "feat: add mock product data JSON structure"

git add src/components/Navbar.jsx
git commit -m "feat: create responsive Navbar component"

git add src/components/Hero.jsx src/components/Stats.jsx
git commit -m "feat: build Hero and Stats sections"

git add src/components/Steps.jsx src/components/Pricing.jsx src/components/CTA.jsx src/components/Footer.jsx
git commit -m "feat: implement Steps, Pricing, and CTA sections"

git add src/components/ProductCard.jsx src/components/CartSummary.jsx src/components/MainSection.jsx
git commit -m "feat: design ProductCard and CartSummary layout"

git add .
git commit -m "feat: finalize App routing and global state management with react-toastify"
