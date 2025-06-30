## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18.0 or higher)
- npm or yarn package manager
- Git

## 🔧 Installation

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/your-username/falcon-ecommerce.git
cd falcon-ecommerce
\`\`\`

### 2. Install Dependencies

Using npm:
\`\`\`bash
npm install
\`\`\`

Using yarn:
\`\`\`bash
yarn install
\`\`\`

### 3. Environment Setup

Create a \`.env.local\` file in the root directory (optional for basic functionality):

\`\`\`env
# Add any environment variables here if needed
NEXT_PUBLIC_APP_URL=http://localhost:3000
\`\`\`

### 4. Start the Development Server

Using npm:
\`\`\`bash
npm run dev
\`\`\`

Using yarn:
\`\`\`bash
yarn dev
\`\`\`

The application will be available at [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

### Build the Application

\`\`\`bash
npm run build
\`\`\`

### Start Production Server

\`\`\`bash
npm start
\`\`\`

## 📁 Project Structure

\`\`\`
falcon-ecommerce/
├── app/                          # Next.js App Router pages
│   ├── cart/                     # Cart page
│   ├── product/                  # Product pages
│   ├── product-details/          # Detailed product view
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── loading.tsx              # Global loading component
│   └── page.tsx                 # Home page
├── components/                   # Reusable components
│   ├── cart/                    # Cart-related components
│   ├── product/                 # Product-related components
│   ├── providers/               # Context providers
│   ├── ui/                      # shadcn/ui components
│   ├── breadcrumb.tsx           # Navigation breadcrumb
│   ├── categories-drawer.tsx    # Category navigation
│   ├── footer.tsx               # Site footer
│   ├── header.tsx               # Site header
│   ├── header-skeleton.tsx      # Header loading state
│   ├── hero-section.tsx         # Homepage hero
│   └── product-grid.tsx         # Product listing grid
├── hooks/                       # Custom React hooks
│   ├── use-cart.ts             # Cart management hook
│   └── use-product.ts          # Product management hook
├── redux/                         # Utility libraries
│   ├── features/               # Redux slices
│   │   └── cart/               # Cart state management
│   ├── hooks.ts                # Redux hooks
│   ├── store.ts                # Redux store configuration
├── types/                       # TypeScript type definitions
│   ├── cart.ts                 # Cart-related types
│   └── product.ts              # Product-related types
├── public/                      # Static assets
├── tailwind.config.ts          # Tailwind configuration
├── package.json                # Dependencies and scripts
└── README.md                   # Project documentation
\`\`\`

## 🎯 Key Components

### Header Component
- Responsive navigation with mobile menu
- Search functionality
- Shopping cart indicator
- Category navigation drawer

### Product Components
- **Product Gallery**: Images and thumbnail
- **Product Info**: Pricing, variants, and add-to-cart functionality

### Cart System
- **Cart Items**: Individual item management
- **Order Summary**: Price calculations and checkout
- **Cart Persistence**: Local storage integration
- **Coupon System**: Discount code functionality

### State Management
- Redux Toolkit for cart state
- Local storage persistence
- Real-time price calculations
- Item selection and quantity management

## 🛒 Cart Features

### Pricing System
- Subtotal calculations
- Discount applications
- Tax calculations (0% default)
- Shipping fee logic
- Free shipping thresholds
- Coupon code support

### Available Coupons
- \`SAVE10\`: 10% off total order
- \`SAVE20\`: 20% off total order
- \`FLAT50\`: $50 flat discount
- \`WELCOME\`: 15% off for new users

### Cart Functionality
- Add/remove items
- Quantity adjustments
- Item selection for checkout
- Local storage
- Real-time total updates

## 🎨 Styling

The project uses Tailwind CSS with a custom configuration:
- **Primary Colors**: Emerald green theme
- **Typography**: Onest font family
- **Components**: shadcn/ui component library
- **Responsive**: Mobile-first design approach

## 🔄 State Management

### Redux Store Structure
\`\`\`typescript
{
  cart: {
    items: CartItem[],
    totalItems: number,
    subtotal: number,
    totalPrice: number,
    selectedItemsPrice: number,
    // ... other cart properties
  }
}
\`\`\`

### Key Actions
- \`addToCart\`: Add items to cart
- \`removeFromCart\`: Remove items from cart
- \`updateQuantity\`: Modify item quantities
- \`toggleItemSelection\`: Select/deselect items
- \`applyCoupon\`: Apply discount codes

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🧪 Development

### Available Scripts

- \`npm run dev\`: Start development server
- \`npm run build\`: Build for production
- \`npm run start\`: Start production server
- \`npm run lint\`: Run ESLint

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting (recommended)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the React framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [shadcn/ui](https://ui.shadcn.com/) for UI components
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management
- [Lucide React](https://lucide.dev/) for icons

## 📞 Support

If you have any questions or need help with setup, please open an issue in the GitHub repository.

---

**Happy coding! 🚀**
