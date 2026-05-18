# Investment Calculator

A React application that calculates year-by-year investment growth based on user-defined parameters. Built as a practice project during the **React - The Complete Guide (incl. Next.js, Redux)** course by Maximilian Schwarzmüller on Udemy.

## Features

- Input fields for initial investment, annual investment, expected return rate, and investment duration
- Real-time results table showing per-year breakdown of:
  - Investment value at end of year
  - Interest earned in the year
  - Total interest earned
  - Invested capital to date
- Input validation with user-friendly error message for invalid duration
- USD currency formatting via the browser's `Intl` API

## Tech Stack

- **React 19** — component-based UI with `useState` for state management
- **Vite** — fast dev server and build tool
- **ESLint** — code linting with React-specific rules

## Project Structure

```
src/
├── App.jsx               # Root component, manages input state
├── components/
│   ├── Header.jsx        # App header
│   ├── UserInput.jsx     # Controlled input form
│   └── Results.jsx       # Year-by-year results table
└── util/
    └── investment.js     # Investment calculation logic & currency formatter
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Concepts Practiced

- Functional components and JSX
- `useState` hook and lifting state up
- Controlled inputs and two-way data binding
- Props and component composition
- Conditional rendering
- Utility functions separated from UI logic
