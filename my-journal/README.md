# 📈 Trading Journal

A professional, mobile-first trading journal application built with Next.js 15, React 18, and Tailwind CSS. Track your trades, analyze performance, and improve your trading strategy with comprehensive insights and analytics.

## ✨ Features

### 🔐 Authentication System
- **Beautiful Login Page** - Mobile-first design with form validation
- **Comprehensive Sign-Up** - Advanced password strength validation
- **Professional UI** - Consistent design language with custom logo
- **Responsive Design** - Optimized for all screen sizes
- **TypeScript Support** - Full type safety throughout

### 🎨 Design System
- **Custom Logo** - Professional trading-themed SVG logo
- **Reusable Components** - Button, Input, Logo components
- **Mobile-First** - Responsive design starting from mobile
- **Professional Theme** - Blue gradient color scheme
- **Accessibility** - WCAG compliant form controls

### 🚀 Technical Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.4
- **UI Components**: Custom React components
- **Validation**: Real-time form validation
- **Icons**: Custom SVG icons
- **Fonts**: Inter (Google Fonts)

## 🏗️ Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── auth/
│   │   ├── login/page.tsx        # Login page
│   │   └── signup/page.tsx       # Sign-up page
│   ├── privacy/page.tsx          # Privacy policy
│   ├── terms/page.tsx            # Terms of service
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── auth/
│   │   ├── LoginForm.tsx         # Login form component
│   │   └── SignUpForm.tsx        # Sign-up form component
│   └── ui/
│       ├── Button.tsx            # Reusable button
│       ├── Input.tsx             # Reusable input
│       ├── Logo.tsx              # Full logo component
│       ├── LogoIcon.tsx          # Icon-only logo
│       ├── LoadingSpinner.tsx    # Loading component
│       └── index.ts              # Component exports
├── lib/
│   └── utils.ts                  # Utility functions
└── public/
    ├── favicon.ico               # Browser icon
    └── logo.svg                  # Logo asset
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/trading-journal.git
   cd trading-journal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📱 Pages & Routes

### Public Routes
- `/` - Home page with navigation to auth pages
- `/auth/login` - User login page
- `/auth/signup` - User registration page
- `/terms` - Terms of service
- `/privacy` - Privacy policy

### Navigation Flow
```
Home (/) 
├── Sign In → Login (/auth/login)
│   ├── Back to Home
│   └── Sign up here → Sign-Up (/auth/signup)
└── Create Account → Sign-Up (/auth/signup)
    ├── Back to Home
    ├── Sign in here → Login (/auth/login)
    ├── Terms of Service → /terms
    └── Privacy Policy → /privacy
```

## 🎯 Form Validation

### Login Form
- **Email**: Required, valid email format
- **Password**: Required, minimum 6 characters

### Sign-Up Form
- **Full Name**: Required, minimum 2 characters
- **Email**: Required, valid email format
- **Password**: Required, minimum 8 characters with strength validation
  - Must contain uppercase letter
  - Must contain lowercase letter
  - Must contain number
  - Visual strength indicator (Weak/Fair/Good/Strong)
- **Confirm Password**: Required, must match password
- **Mobile Number**: Optional, valid phone format

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#2563eb to #1d4ed8)
- **Success**: Green (#10b981)
- **Error**: Red (#ef4444)
- **Warning**: Yellow (#fbbf24)
- **Gray Scale**: Tailwind gray palette

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights with responsive sizing
- **Body**: Regular weight, optimized line height

### Components
- **Button**: Multiple variants (primary, secondary, outline, ghost)
- **Input**: Consistent styling with error states
- **Logo**: Multiple sizes with optional text

## 🛠️ Development

### Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Code Style
- **TypeScript**: Strict type checking enabled
- **ESLint**: Next.js recommended rules
- **Prettier**: Code formatting (configure as needed)

## 📦 Dependencies

### Production
- `next` - React framework
- `react` & `react-dom` - React library
- `tailwindcss` - CSS framework
- `clsx` - Conditional className utility
- `tailwind-merge` - Tailwind class merging

### Development
- `typescript` - Type checking
- `@types/*` - TypeScript definitions
- `eslint` - Code linting
- `autoprefixer` - CSS vendor prefixes
- `postcss` - CSS processing

## 🔮 Future Features

- [ ] Dashboard for trade tracking
- [ ] Trade entry and management
- [ ] Performance analytics
- [ ] Data visualization charts
- [ ] Export functionality
- [ ] User settings and preferences
- [ ] Dark mode support
- [ ] Mobile app version

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Suresh Patta**
- GitHub: [@sureshpatta](https://github.com/sureshpatta)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vercel for hosting and deployment platform

---

**Built with ❤️ for traders by traders** 📈

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.0.0-black.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8.svg)
