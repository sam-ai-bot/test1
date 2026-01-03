# CoverCraft - Phone Cover E-commerce Website

A modern e-commerce website for selling phone cover designs, built with React and Vite.

## Features

- Product catalog with filtering by phone model and design category
- Shopping cart with localStorage persistence
- Multi-step checkout flow with form validation
- Responsive design for mobile, tablet, and desktop
- Clean, modern UI with Tailwind CSS

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router 6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sam-ai-bot/test1.git
   cd test1
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── Button.jsx
│   ├── CartSidebar.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Input.jsx
│   ├── Layout.jsx
│   ├── ProductCard.jsx
│   └── ProductGrid.jsx
├── context/        # React context providers
│   └── CartContext.jsx
├── data/           # Mock data
│   └── products.js
├── pages/          # Page components
│   ├── About.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   ├── NotFound.jsx
│   ├── OrderConfirmation.jsx
│   ├── ProductDetail.jsx
│   ├── Products.jsx
│   └── Shipping.jsx
├── App.jsx         # Main app component with routing
├── index.css       # Global styles and Tailwind imports
└── main.jsx        # Application entry point
```

## Pages

- **Home** - Landing page with hero section and featured products
- **Products** - Product catalog with filtering and sorting
- **Product Detail** - Individual product page with add to cart
- **Cart** - Shopping cart with quantity controls
- **Checkout** - Multi-step checkout (shipping + payment)
- **Order Confirmation** - Order success page
- **About** - Brand story and values
- **Contact** - Contact form and information
- **Shipping** - Shipping and returns policy

## License

MIT
