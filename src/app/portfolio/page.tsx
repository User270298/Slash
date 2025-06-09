"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const projects = [
  {
    title: "AgroCor - Многофункциональный веб-портал, Маркетплейс агропродуктов",
    description: "Разработка комплексного веб-портала с современным интерфейсом и широким функционалом. Включает систему управления контентом, аналитику и интеграцию с внешними сервисами.",
    results: [
      "Высокая производительность благодаря Next.js",
      "Масштабируемая архитектура на FastAPI",
      "Надежное хранение данных в PostgreSQL",
      "Контейнеризация с Docker"
    ],
    technologies: ["Next.js", "React", "Python", "FastAPI", "PostgreSQL", "Docker"],
    image: "/portfolio/AGROCOR_family_-removebg-preview.webp",
    category: "Веб-разработка"
  },
  {
    title: "WebOptimize - AI-ассистент для маркетплейсов",
    description: "Создание умного Telegram-бота для анализа товаров с маркетплейсов. Бот генерирует подробные описания товаров и создает технические задания для дизайнеров.",
    results: [
      "Автоматизация создания описаний",
      "Интеграция с OpenAI для генерации контента",
      "Умный парсинг данных с маркетплейсов",
      "Оптимизация работы дизайнеров"
    ],
    technologies: ["Python", "Aiogram", "OpenAI", "SQLite", "BeautifulSoup4"],
    image: "/portfolio/93013604-fcd0-47ef-81bb-40fac18d662d.png",
    category: "Telegram боты"
  },
  {
    title: "AndTheBrand - Интеграция с 12storeez",
    description: "Разработка парсера для 12storeez и создание интеграционного сайта. Система позволяет автоматизировать работу с товарами и синхронизировать данные.",
    results: [
      "Автоматизация сбора данных",
      "Бесперебойная работа с API",
      "Оптимизация процессов интеграции",
      "Улучшение эффективности работы"
    ],
    technologies: ["Python", "React", "Node.js", "MongoDB"],
    image: "/portfolio/613768fa388bf-main-2_1200x1200.webp",
    category: "Парсинг данных"
  },
  {
    title: "CryptoTeam - Торговый робот для криптовалют",
    description: "Создание продвинутого торгового робота для автоматизации торговли криптовалютами. Включает анализ рынка, прогнозирование трендов и автоматическое исполнение сделок.",
    results: [
      "Интеграция с Binance и CoinMarketCap",
      "Точность прогнозов до 85%",
      "Автоматизация торговых операций",
      "Защита от рисков"
    ],
    technologies: ["Python", "Scikit-learn", "Aiogram", "Binance API", "CoinMarketCap API"],
    image: "/portfolio/3b4f9b0d72a0883c37adf85b574752c0.jpg",
    category: "AI & ML"
  },
  {
    title: "Academy IBM - Образовательный лендинг",
    description: "Разработка современного образовательного лендинга для IBM Academy. Сайт соответствует всем стандартам образовательных платформ и обеспечивает удобный доступ к курсам.",
    results: [
      "Современный адаптивный дизайн",
      "Оптимизация для поисковых систем",
      "Высокая скорость загрузки",
      "Удобный интерфейс для студентов"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS"],
    image: "/portfolio/original_5d399251ea08b6189e1c7c39_60b171afcf7c4.avif",
    category: "Веб-разработка"
  }
];

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-800">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Наши проекты
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Реальные кейсы и результаты нашей работы
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Image */}
                    <div className="relative h-[400px] lg:h-full w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain w-full h-full"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                        {project.category}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                      <p className="text-slate-600 mb-6">{project.description}</p>
                      
                      {/* Results */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Результаты:</h4>
                        <ul className="space-y-2">
                          {project.results.map((result, i) => (
                            <li key={i} className="flex items-center text-slate-700">
                              <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3">Технологии:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


      </div>
      <Footer />
    </>
  );
} 