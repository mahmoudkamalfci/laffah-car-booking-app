# Laffah (لَفّة)

**Laffah** is a modern car booking application tailored for the Egyptian market, designed to make booking rides easy, secure, and accessible. The application features a fully responsive design with native Arabic language support (RTL), providing a seamless experience for users.

## Features

- **Fleet Browsing**: Explore a diverse range of cars available for booking.
- **Seamless Booking**: Easy-to-use booking interface.
- **User Accounts**: Manage profile information and view booking history.
- **Driver Information**: Transparent driver details for safety and trust.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Arabic Interface**: Built from the ground up with RTL support using the `IBM Plex Sans Arabic` font.

## Tech Stack

This project is built with a modern frontend stack:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Linting**: ESLint & Prettier

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [pnpm](https://pnpm.io/) (Package manager)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd cars-booking-app
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

### Running the Application

To start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Build for Production

To create a production build:

```bash
pnpm build
```

To start the production server:

```bash
pnpm start
```

## Project Structure

A brief overview of the project layout:

```text
├── app/              # Key application pages and layouts (Next.js App Router)
├── components/       # Reusable UI components (buttons, cards, sections)
├── public/           # Static assets (images, icons)
├── styles/           # Global styles and Tailwind configuration
└── ...
```

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License

[Add License Here]
