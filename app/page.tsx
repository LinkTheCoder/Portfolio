// pages/index.tsx
'use client'

import Hero from '../components/desktop/Hero';
import { ThemeProvider } from '../context/ThemeContext'; // Adjust the path based on your project structure

export default function Home() {
  return (
    <ThemeProvider>
      <Hero />
    </ThemeProvider>
  );
}
