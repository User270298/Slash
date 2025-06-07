"use client";

import Link from 'next/link';
import { useState } from 'react';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold gradient-text">IT Слэш</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">
              Главная
            </Link>
            <Link href="/services" className="nav-link">
              Услуги
            </Link>
            <Link href="/portfolio" className="nav-link">
              Портфолио
            </Link>
            <Link href="/testimonials" className="nav-link">
              Отзывы
            </Link>
            <Link href="/contacts" className="nav-link">
              Контакты
            </Link>
           
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-amber-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-slate-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-100">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="nav-link px-4 py-2 hover:bg-amber-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link
                href="/services"
                className="nav-link px-4 py-2 hover:bg-amber-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Услуги
              </Link>
              <Link
                href="/portfolio"
                className="nav-link px-4 py-2 hover:bg-amber-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Портфолио
              </Link>
              <Link
                href="/testimonials"
                className="nav-link px-4 py-2 hover:bg-amber-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Отзывы
              </Link>
              <Link
                href="/contacts"
                className="nav-link px-4 py-2 hover:bg-amber-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </Link>
              <Link
                href="/contacts"
                className="btn-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Обсудить проект
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 