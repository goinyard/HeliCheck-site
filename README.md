# HeliCheck

## Project Overview

This repository contains the landing page website for HeliCheck, showcasing survey services that deliver precise geophysical data that mining leaders rely on for confident exploration decisions and discoveries.

## Architecture

This project is built with:

- **Next.js 15** - React framework with server-side rendering and routing
- **React 19** - UI component library
- **TypeScript** - Static type checking
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library

**Note:** The current implementation primarily uses client-side rendering to reduce server resources. Future improvements will include server-side rendering for better SEO and improved load times for end users.

## Prerequisites

Before getting started, ensure you have the following installed:

- Node.js (v18.0.0 or later)
- npm (v8.0.0 or later)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/goinyard/HeliCheck-site.git
   cd HeliCheck-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Environment Variables:
   No environment variables are currently required to run the application locally. If specific API integrations are added in the future, they will be documented here.

## Development Workflow

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

```bash
npm run build
```

### Starting Production Server

```bash
npm run start
```

### Linting

```bash
npm run lint
```

## Deployment

The application can be deployed to various platforms:

### Vercel (recommended)

1. Push your code to the GitHub repository
2. Import your project to Vercel
3. Configure environment variables (if needed)
4. Deploy

### Other platforms

For other deployment options, build the application and deploy the `.next` directory according to your hosting provider's instructions.

## Project Structure

```
HeliCheck-site/
├── public/           # Static assets
├── src/
│   ├── app/          # Next.js app router pages and layouts
│   ├── components/   # React components
│   │   ├── blocks/   # Composable content blocks
│   │   ├── layout/   # Layout components (header, footer)
│   │   ├── sections/ # Page sections (hero, services, etc.)
│   │   └── ui/       # Reusable UI components
│   └── lib/          # Utility functions and shared code
├── .next/            # Next.js build output (generated)
├── next.config.js    # Next.js configuration
└── package.json      # Project dependencies and scripts
```

## Technology Stack

### Core Dependencies
- next: ^15.2.4
- react: ^19.0.0
- react-dom: ^19.0.0
- typescript: ^5

### UI and Styling
- tailwindcss: ^4
- class-variance-authority: ^0.7.1
- clsx: ^2.1.1
- tailwind-merge: ^3.0.2
- framer-motion: ^12.6.2
- embla-carousel-react: ^8.5.2

### UI Components
- @radix-ui/* components
- lucide-react: ^0.484.0
- next-themes: ^0.4.6

### Form Management
- react-hook-form: ^7.54.2
- zod: ^3.24.2
- @hookform/resolvers: ^4.1.3

## Code Organization & Patterns

### Component Structure
Components follow a hierarchical organization:
- **Layout components** - Header, footer, and page layouts
- **Section components** - Main content sections for the landing page
- **UI components** - Reusable UI elements like buttons, cards, etc.
- **Blocks** - Composable content blocks that can be used across sections

### Coding Standards
- Components use TypeScript for static typing
- React hooks are used for state management
- Client-side components are denoted with "use client" directive

## Future Enhancements
- Implement server-side rendering for improved SEO
- Create documentation for component usage

## Support
For any questions or issues, please open an issue in the GitHub repository. 