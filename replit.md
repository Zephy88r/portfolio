# Portfolio Website

## Overview

This is a modern, responsive portfolio website built with React and TypeScript. The application features a full-stack architecture with a React frontend and Express.js backend, designed to showcase personal projects, skills, and provide a contact form for potential clients or employers.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds
- **Animations**: Framer Motion for smooth animations and transitions

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: In-memory storage with fallback to database sessions
- **API Design**: RESTful API with JSON responses

## Key Components

### Frontend Components
- **Navigation**: Responsive navbar with smooth scrolling
- **Hero Section**: Animated landing area with call-to-action
- **About Section**: Personal information and background
- **Projects Section**: Featured project showcase with cards
- **Skills Section**: Technical skills with animated progress bars
- **Contact Section**: Contact form with validation and submission
- **Footer**: Social links and navigation

### Backend Components
- **Express Server**: Main application server with middleware
- **Database Schema**: User and contact tables with proper relationships
- **Storage Layer**: Abstracted storage interface with memory and database implementations
- **API Routes**: Contact form submission and retrieval endpoints
- **Development Tools**: Vite integration for development mode

## Data Flow

1. **Client Request**: User interacts with the frontend React application
2. **API Communication**: Frontend makes HTTP requests to Express backend
3. **Data Validation**: Backend validates incoming data using Zod schemas
4. **Database Operations**: Drizzle ORM handles database queries and mutations
5. **Response**: Backend returns JSON responses to frontend
6. **State Updates**: TanStack Query manages cache and UI updates

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM for type-safe database operations
- **UI Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS for utility-first styling
- **Animation**: Framer Motion for smooth animations
- **Forms**: React Hook Form with Zod validation

### Development Dependencies
- **Build Tool**: Vite for development and production builds
- **TypeScript**: Full TypeScript support across the stack
- **ESBuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React application to static assets
2. **Backend Build**: ESBuild bundles Express server with external dependencies
3. **Output**: Static files in `dist/public` and server bundle in `dist/index.js`

### Production Setup
- **Environment Variables**: Database URL and other configuration
- **Static Serving**: Express serves built React application
- **API Endpoints**: Same server handles both static files and API routes
- **Database**: Drizzle migrations manage schema changes

### Development Features
- **Hot Module Replacement**: Vite provides fast development experience
- **Type Safety**: Full TypeScript integration with proper path aliases
- **Error Handling**: Runtime error overlay for development
- **Logging**: Request logging with response time and payload information

The architecture follows modern full-stack patterns with clear separation of concerns, type safety throughout, and optimized for both development experience and production performance.