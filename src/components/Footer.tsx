"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы начать проект?</h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          Оставьте заявку, и мы свяжемся с вами для обсуждения деталей вашего проекта.
        </p>
        <Link href="/contacts" className="btn-primary">
          Обсудить проект
        </Link>
      </div>

      {/* Decorative Separator */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-slate-700"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-slate-800 px-4">
            <svg className="h-8 w-8 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold gradient-text">
              IT Слэш
            </Link>
            <p className="text-slate-300">
              Ваш надежный партнер в мире IT-технологий. Мы создаем эффективные решения для развития вашего бизнеса.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#web" className="text-slate-300 hover:text-white transition-colors">
                  Разработка сайтов
                </Link>
              </li>
              <li>
                <Link href="/services#apps" className="text-slate-300 hover:text-white transition-colors">
                  Разработка приложений
                </Link>
              </li>
              <li>
                <Link href="/services#bots" className="text-slate-300 hover:text-white transition-colors">
                  Telegram боты
                </Link>
              </li>
              <li>
                <Link href="/services#ai" className="text-slate-300 hover:text-white transition-colors">
                  AI ассистенты
                </Link>
              </li>
              <li>
                <Link href="/services#automation" className="text-slate-300 hover:text-white transition-colors">
                  Автоматизация бизнеса
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-slate-300 hover:text-white transition-colors">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-slate-300 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-slate-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:itslash@yandex.ru" className="hover:text-white transition-colors">
                  itslash@yandex.ru
                </a>
              </li>
              <li className="flex items-center space-x-2 text-slate-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+79056440180" className="hover:text-white transition-colors">
                  +7 (905) 644-01-80
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
} 