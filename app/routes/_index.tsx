import type { MetaFunction } from "@remix-run/node";
import Header from "../components/layout/Header";
import HeroSection from "../components/sections/HeroSection";
import FeaturedProducts from "../components/sections/FeaturedProducts";
import AboutSection from "../components/sections/AboutSection";
import Footer from "../components/layout/Footer";
import { ThemeProvider } from "../context/ThemeContext";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <FeaturedProducts />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
