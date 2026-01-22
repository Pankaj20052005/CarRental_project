# 🚗 CarRental - Modern Car Rental Platform

<div align="center">

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.18-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?style=flat-square&logo=javascript)](https://www.javascript.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)](README.md)

A modern, responsive, and feature-rich web application for renting cars online. Built with React, Vite, and TailwindCSS for an exceptional user experience.

[Live Demo](#) • [Report Bug](../../issues) • [Request Feature](../../issues)

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [Usage](#-usage)
- [Screenshots](#-screenshots)
- [API Integration](#-api-integration)
- [Future Improvements](#-future-improvements)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### User Features
- 🏠 **Home Page** - Eye-catching landing page with hero section, featured cars, and promotions
- 🔍 **Browse Cars** - Explore complete catalog with filtering capabilities
- 📋 **Car Details** - Detailed information including specifications, pricing, and availability
- 🎫 **Booking System** - Simple and intuitive car booking interface
- 📱 **My Bookings** - Track and manage your active bookings
- 🔐 **User Authentication** - Secure login and signup functionality
- 📧 **Newsletter** - Subscribe for exclusive deals and updates
- 📞 **Customer Support** - Contact information and support links

### Technical Features
- ⚡ **Lightning Fast** - Vite for rapid development and optimized builds
- 🎨 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🌓 **Modern UI** - TailwindCSS with custom styling and smooth animations
- 🧭 **Client-Side Routing** - Smooth navigation with React Router DOM v7
- 🔄 **State Management** - React hooks for efficient state handling
- 📦 **Optimized Bundle** - Fast load times with minimal dependencies
- ♿ **Accessibility** - Semantic HTML and accessible components

---

## 🛠 Tech Stack

### Frontend
- **React** (19.2.0) - UI library for building interactive components
- **React Router DOM** (7.11.0) - Client-side routing and navigation
- **Vite** (7.2.4) - Next-generation frontend build tool
- **TailwindCSS** (4.1.18) - Utility-first CSS framework
- **JavaScript (ES2024)** - Modern JavaScript for dynamic functionality

### Development Tools
- **ESLint** (9.39.1) - Code quality and style enforcement
- **Vitejs Plugin React** (5.1.1) - React Fast Refresh support
- **TailwindCSS Vite Plugin** (4.1.18) - Tailwind integration with Vite

---

## 📁 Project Structure

```
CarRental/
├── README.md                          # Project documentation
├── .vscode/
│   └── settings.json                 # VS Code workspace settings
└── client/                           # React application root
    ├── package.json                  # Project dependencies and scripts
    ├── vite.config.js               # Vite configuration
    ├── eslint.config.js             # ESLint rules and configuration
    ├── index.html                   # HTML entry point
    ├── public/                      # Static assets
    │   ├── favicon.svg
    │   └── vite.svg
    └── src/
        ├── main.jsx                 # React entry point
        ├── App.jsx                  # Root component with routing
        ├── index.css                # Global styles
        │
        ├── assets/                  # Images, icons, and constants
        │   ├── assets.js            # Centralized assets and menu links
        │   ├── logo.svg
        │   ├── *.png                # Car and testimonial images
        │   └── *.svg                # UI icons and logos
        │
        ├── components/              # Reusable React components
        │   ├── Navbar.jsx           # Navigation header with menu
        │   ├── Hero.jsx             # Hero section with search
        │   ├── Banner.jsx           # Promotional banner
        │   ├── FeaturedSection.jsx  # Featured cars showcase
        │   ├── CarCard.jsx          # Individual car display card
        │   ├── Newsletter.jsx       # Email subscription form
        │   ├── Title.jsx            # Reusable title component
        │   ├── Login.jsx            # Login/Signup modal
        │   └── Footer.jsx           # Footer with links and info
        │
        └── pages/                   # Page components (routes)
            ├── Home.jsx             # Landing page
            ├── Cars.jsx             # Car listing/browsing page
            ├── CarDetails.jsx       # Individual car details page
            └── MyBookings.jsx       # User bookings dashboard
```

---

## ⚙️ Installation

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Pankaj20052005/CarRental_project.git
   cd CarRental_project
   ```

2. **Install dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create a .env file in the client directory
   cp .env.example .env
   
   # Update .env with your configuration
   VITE_CURRENCY=₹           # Currency symbol for pricing
   VITE_API_URL=http://localhost:5000  # Backend API URL (if applicable)
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:5173`

---

## 🚀 Quick Start

### Running the Development Server
```bash
cd client
npm run dev
```
Vite will provide a local development server with Hot Module Replacement (HMR).

### Building for Production
```bash
cd client
npm run build
```
Creates an optimized production build in the `dist/` directory.

### Preview Production Build
```bash
cd client
npm run preview
```
Preview the production build locally.

### Running Linter
```bash
cd client
npm run lint
```
Check code quality and style compliance.

---

## 📖 Usage

### Navigating the Application

1. **Home Page** - Start here to explore featured cars and promotions
2. **Browse Cars** - Click "All Cars" in the navbar to view the complete inventory
3. **Car Details** - Click on any car card to see detailed specifications
4. **Book a Car** - Use the booking interface on car details or the search form
5. **My Bookings** - View and manage your reservations
6. **Authentication** - Click the login icon to access user accounts

### Key User Flows

#### Browsing & Booking
```
Home → Browse Cars → Select Car → View Details → Book Car → My Bookings
```

#### Newsletter Subscription
```
Home → Scroll to Newsletter Section → Enter Email → Subscribe
```

#### Authentication
```
Click Login Icon → Choose Sign Up/Login → Enter Details → Access Dashboard
```

---

## 📸 Screenshots

### Home Page
![Home Page](https://via.placeholder.com/800x400?text=Home+Page)
The landing page features a hero section with search functionality and featured car listings.

### Car Listings
![Car Listings](https://via.placeholder.com/800x400?text=Car+Listings)
Browse and filter available cars with pricing and availability information.

### Car Details
![Car Details](https://via.placeholder.com/800x400?text=Car+Details)
Detailed car information with specifications, pricing, and booking options.

### Booking Dashboard
![My Bookings](https://via.placeholder.com/800x400?text=My+Bookings)
Manage your active bookings and reservation history.

### Mobile Responsive
![Mobile View](https://via.placeholder.com/400x600?text=Mobile+View)
Fully responsive design works seamlessly on all devices.

---

## 🔌 API Integration

The application is ready for backend integration:

- **Authentication API** - Connect `/login` and `/signup` endpoints
- **Car Listings API** - Fetch cars from your backend database
- **Booking API** - Submit and manage reservations
- **User Dashboard API** - Load and update user bookings

### Example Environment Configuration
```env
VITE_API_URL=https://api.carrental.com
VITE_CURRENCY=₹
VITE_ENABLE_ANALYTICS=true
```

---

## 🎯 Future Improvements

- 🗺️ **Google Maps Integration** - Show car locations and delivery options
- 💳 **Payment Gateway** - Integrate Stripe/PayPal for online payments
- ⭐ **User Reviews & Ratings** - Community feedback system
- 🎁 **Loyalty Program** - Rewards and discount system
- 🔔 **Push Notifications** - Booking confirmations and offers
- 📊 **Admin Dashboard** - Car management and booking analytics
- 🔐 **Two-Factor Authentication** - Enhanced security
- 🌐 **Multi-language Support** - International expansion
- 🤖 **AI Chatbot** - Customer support automation
- 📅 **Calendar Booking** - Visual date selection for rentals

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards
- Follow ESLint rules defined in `eslint.config.js`
- Use meaningful commit messages
- Test your changes before submitting
- Update documentation as needed

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

You are free to:
- ✅ Use the code for personal or commercial projects
- ✅ Modify and distribute the code
- ✅ Use it privately or publicly

**Conditions:**
- Include a copy of the license in your project
- State significant changes made to the original code

---

## 👨‍💻 Author

**Pankaj Kumar**
- 🔗 [GitHub](https://github.com/Pankaj20052005)
- 📧 Email: [your-email@example.com]

---

## 🙏 Acknowledgments

- React.dev for the amazing framework
- Vite team for the blazing-fast build tool
- TailwindCSS for the utility-first CSS framework
- React Router for seamless navigation

---

## 📞 Support

If you have any questions or need assistance:
- 📝 Open an [Issue](../../issues)
- 📧 Contact via email
- 💬 Check existing discussions

---

<div align="center">

**Made with ❤️ by Pankaj Kumar**

Give a ⭐ if this project helped you!

</div>
A modern React-based Car Rental web application that lets users explore available cars, view detailed listings, check rental availability, and book vehicles through a smooth, user-friendly interface. Designed to simulate a real-world car rental platform with clean UI and efficient state management.
