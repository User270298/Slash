"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Веб-разработка",
    description: "Создание современных веб-сайтов и веб-приложений с использованием передовых технологий. Мы разрабатываем высокопроизводительные, безопасные и масштабируемые решения.",
    features: [
      "Корпоративные сайты с современным дизайном",
      "Интернет-магазины с интеграцией платежных систем",
      "Веб-приложения на React/Next.js",
      "Одностраничные лендинги для продвижения продуктов",
      "Интеграция с CRM и другими сервисами",
      "Оптимизация производительности и SEO"
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Разработка приложений",
    description: "Создание мобильных приложений для iOS и Android с нативным пользовательским опытом. Мы используем современные технологии для разработки быстрых и удобных приложений.",
    features: [
      "Кроссплатформенные решения на React Native",
      "PWA приложения для веб-платформ",
      "Интеграция с бэкенд-сервисами",
      "Push-уведомления и аналитика"
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Telegram боты",
    description: "Разработка умных ботов для автоматизации бизнес-процессов и улучшения коммуникации. Создаем ботов для различных задач: от простых информационных до сложных торговых систем.",
    features: [
      "Боты для автоматизации заказов",
      "Информационные и новостные боты",
      "Торговые боты с интеграцией API",
      "Боты для поддержки клиентов",
      "Образовательные боты",
      "Интеграция с CRM и другими сервисами"
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    )
  },
  {
    title: "AI ассистенты",
    description: "Внедрение искусственного интеллекта для оптимизации бизнес-процессов. Создаем умных ассистентов, которые помогают автоматизировать рутинные задачи и улучшать качество обслуживания.",
    features: [
      "Чат-боты с NLP для общения",
      "Анализ данных и предсказание трендов",
      "Автоматизация обработки документов",
      "Персонализированные рекомендации",
      "Автоматическая категоризация контента",
      "Интеграция с существующими системами"
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Автоматизация бизнеса",
    description: "Создание систем автоматизации для повышения эффективности вашего бизнеса. Разрабатываем решения, которые экономят время и ресурсы, минимизируя человеческий фактор.",
    features: [
      "Автоматизация документооборота",
      "Интеграция различных сервисов",
      "Автоматические отчеты и аналитика",
      "Управление задачами и проектами",
      "Автоматизация маркетинга",
      "Системы уведомлений и оповещений"
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Парсинг данных",
    description: "Сбор данных с различных ресурсов для последующего анализа и обработки. Автоматизированное извлечение структурированной информации с соблюдением всех правовых норм.",
    features: [
      "Парсинг веб-сайтов и API",
      "Сбор данных с социальных сетей",
      "Анализ конкурентов",
      "Мониторинг цен и товаров",
      "Сбор контактной информации",
      "Экспорт данных в различные форматы"
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  }
];

export default function ServicesPage() {
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
                Наши услуги
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Мы предлагаем полный спектр IT-решений для развития вашего бизнеса
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  id={service.title.toLowerCase().replace(/\s+/g, '-')}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
                >
                  <div className="text-blue-600 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-slate-700">
                        <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
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