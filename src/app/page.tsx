import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16 text-4xl font-bold text-slate-800 relative">
            <span className="relative z-10">Наши услуги</span>
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          </h2>
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

            <div className="relative">
              {/* Top row - 3 blocks */}
              <div className="flex justify-center gap-8 mb-8">
                {/* Web Development */}
                <div className="group relative bg-white/40 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/80 hover:to-blue-50/80 border border-white/20 w-[350px] flex flex-col min-h-[300px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col flex-grow">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">Веб-разработка</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Создание современных веб-сайтов и веб-приложений с использованием передовых технологий.
                    </p>
                    <div className="mt-auto">
                      <a href="/services#web-development" className="inline-flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                        Подробнее
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* App Development */}
                <div className="group relative bg-white/40 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/80 hover:to-blue-50/80 border border-white/20 w-[350px] flex flex-col min-h-[300px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col flex-grow">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">Разработка приложений</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Создание мобильных приложений для iOS и Android с нативным пользовательским опытом.
                    </p>
                    <div className="mt-auto">
                      <a href="/services#app-development" className="inline-flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                        Подробнее
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Telegram Bots */}
                <div className="group relative bg-white/40 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/80 hover:to-blue-50/80 border border-white/20 w-[350px] flex flex-col min-h-[300px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col flex-grow">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">Telegram боты</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Разработка умных ботов для автоматизации бизнес-процессов и улучшения коммуникации.
                    </p>
                    <div className="mt-auto">
                      <a href="/services#telegram-bots" className="inline-flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                        Подробнее
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom row - 2 blocks */}
              <div className="flex justify-center gap-8">
                {/* AI Assistants */}
                <div className="group relative bg-white/40 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/80 hover:to-blue-50/80 border border-white/20 w-[350px] flex flex-col min-h-[300px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col flex-grow">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">AI ассистенты</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Внедрение искусственного интеллекта для оптимизации бизнес-процессов.
                    </p>
                    <div className="mt-auto">
                      <a href="/services#ai-assistants" className="inline-flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                        Подробнее
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business Automation */}
                <div className="group relative bg-white/40 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/80 hover:to-blue-50/80 border border-white/20 w-[350px] flex flex-col min-h-[300px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col flex-grow">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">Автоматизация бизнеса</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Создание систем автоматизации для повышения эффективности вашего бизнеса.
                    </p>
                    <div className="mt-auto">
                      <a href="/services#business-automation" className="inline-flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                        Подробнее
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Parsers */}
                <div className="group relative bg-white/40 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/80 hover:to-blue-50/80 border border-white/20 w-[350px] flex flex-col min-h-[300px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col flex-grow">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">Парсинг данных</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                    Сбор данных с различных ресурсов для последующего анализа и обработки. 
                    Автоматизированное извлечение структурированной информации.
                    </p>
                    <div className="mt-auto">
                      <a href="/services#data-parsing" className="inline-flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                        Подробнее
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Advantages Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16 text-4xl font-bold text-slate-800 relative">
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">Наши преимущества</span>
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          </h2>
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Experience */}
              <div className="group relative bg-white/40 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/80 hover:to-blue-50/80 border border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">Опыт</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Более 3-х лет успешной работы в сфере разработки и автоматизации.
                  </p>
                  <ul className="text-slate-600 space-y-2">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Более 50 успешно реализованных проектов
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Команда опытных специалистов
                    </li>
                  </ul>
                </div>
              </div>

              {/* Quality */}
              <div className="group relative bg-white/40 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/80 hover:to-blue-50/80 border border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">Качество</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Высокие стандарты разработки и тестирования для надежных решений.
                  </p>
                  <ul className="text-slate-600 space-y-2">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Многоуровневое тестирование
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Строгое соответствие стандартам
                    </li>
                  </ul>
                </div>
              </div>

              {/* Support */}
              <div className="group relative bg-white/40 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/80 hover:to-blue-50/80 border border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">Поддержка</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Круглосуточная техническая поддержка и консультации.
                  </p>
                  <ul className="text-slate-600 space-y-2">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      24/7 доступность специалистов
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Быстрое реагирование на запросы
                    </li>
                  </ul>
                </div>
              </div>

              {/* Innovation */}
              <div className="group relative bg-white/40 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/80 hover:to-blue-50/80 border border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">Инновации</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Использование передовых технологий и современных решений.
                  </p>
                  <ul className="text-slate-600 space-y-2">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Последние версии технологий
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Постоянное обновление решений
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16 text-4xl font-bold text-slate-800 relative">
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">Этапы разработки</span>
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          </h2>

          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

            <div className="relative z-10">
              {/* Development Stages Timeline */}
              <div className="space-y-12">
                {/* Stage 1 */}
                <div className="group relative flex items-start gap-8">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/80 hover:to-blue-50/80 border border-white/20">
                      <h3 className="text-2xl font-semibold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">Анализ и планирование</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Детальное изучение требований, формирование технического задания и разработка плана реализации проекта.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="group relative flex items-start gap-8">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/80 hover:to-blue-50/80 border border-white/20">
                      <h3 className="text-2xl font-semibold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">Проектирование</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Создание архитектуры решения, разработка прототипов и согласование дизайна с заказчиком.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="group relative flex items-start gap-8">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/80 hover:to-blue-50/80 border border-white/20">
                      <h3 className="text-2xl font-semibold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">Разработка</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Написание кода, реализация функционала и интеграция с необходимыми системами.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stage 4 */}
                <div className="group relative flex items-start gap-8">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/80 hover:to-blue-50/80 border border-white/20">
                      <h3 className="text-2xl font-semibold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">Тестирование</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Проведение комплексного тестирования, отладка и оптимизация производительности.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stage 5 */}
                <div className="group relative flex items-start gap-8">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
                    <span className="text-white font-bold text-xl">5</span>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/80 hover:to-blue-50/80 border border-white/20">
                      <h3 className="text-2xl font-semibold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">Внедрение и поддержка</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Развертывание решения, обучение пользователей и обеспечение технической поддержки.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16 text-4xl font-bold text-slate-800 relative">
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">Технологии</span>
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          </h2>

          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

            <div className="relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* React */}
                <div className="group relative bg-white/40 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/80 hover:to-blue-50/80 border border-white/20">
                  <div className="relative h-[200px] rounded-2xl overflow-hidden shadow-2xl">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: "url('technology/818958-free-download-nodejs-javascript-hd-wallpaper-desktop-and-mobile-image-photo-2560x1440-for-your-desktop-mobile-tablet-explore-node-wallpaper-node-wallpaper.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 via-slate-800/20 to-slate-900/10"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">React</h3>
                  <p className="text-slate-600">Современная библиотека для создания пользовательских интерфейсов</p>
                </div>

                {/* Next.js */}
                <div className="group relative bg-white/40 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/80 hover:to-blue-50/80 border border-white/20">
                <div className="relative h-[200px] rounded-2xl overflow-hidden shadow-2xl">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: "url('technology/5c3a84d4-7fe2-4bde-b29b-3efc611bf6d0.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-400/10 via-slate-400/20 to-slate-500/10"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">Next.js</h3>
                  <p className="text-slate-600">Фреймворк для создания React-приложений с серверным рендерингом</p>
                </div>

                {/* Tailwind */}
                <div className="group relative bg-white/40 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/80 hover:to-blue-50/80 border border-white/20">
                <div className="relative h-[200px] rounded-2xl overflow-hidden shadow-2xl">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: "url('technology/tailwindcss-templates.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-2900/10 via-slate-300/20 to-slate-900/10"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">Tailwind CSS</h3>
                  <p className="text-slate-600">Утилитарный CSS-фреймворк для быстрой разработки интерфейсов</p>
                </div>

                {/* JavaScript */}
                <div className="group relative bg-white/40 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/80 hover:to-blue-50/80 border border-white/20">
                <div className="relative h-[200px] rounded-2xl overflow-hidden shadow-2xl">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: "url('technology/i.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 via-slate-800/20 to-slate-900/10"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">JavaScript</h3>
                  <p className="text-slate-600">Универсальный язык программирования для веб-разработки</p>
                </div>

                {/* TypeScript */}
                <div className="group relative bg-white/40 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/80 hover:to-blue-50/80 border border-white/20">
                <div className="relative h-[200px] rounded-2xl overflow-hidden shadow-2xl">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: "url('technology/JavaScript (34).png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 via-slate-800/20 to-slate-900/10"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">TypeScript</h3>
                  <p className="text-slate-600">Типизированный надмножество JavaScript для надежной разработки</p>
                </div>

                {/* Python */}
                <div className="group relative bg-white/40 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/80 hover:to-blue-50/80 border border-white/20">
                <div className="relative h-[200px] rounded-2xl overflow-hidden shadow-2xl">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: "url('technology/211466229-df1c12da-ed6e-4bb9-97f7-84871a287580.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 via-slate-400/20 to-slate-500/10"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">Python</h3>
                  <p className="text-slate-600">Мощный язык программирования для бэкенд-разработки</p>
                </div>

                {/* Docker */}
                <div className="group relative bg-white/40 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/80 hover:to-blue-50/80 border border-white/20">
                <div className="relative h-[200px] rounded-2xl overflow-hidden shadow-2xl">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: "url('technology/b7djotv_rf_w4fh7wxkpeykxj6g.jpeg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 via-slate-800/20 to-slate-900/10"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">Docker</h3>
                  <p className="text-slate-600">Платформа для контейнеризации и развертывания приложений</p>
                </div>

                {/* Nginx */}
                <div className="group relative bg-white/40 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/80 hover:to-blue-50/80 border border-white/20">
                  <div className="relative h-[200px] rounded-2xl overflow-hidden shadow-2xl">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: "url('technology/redirect-subdomain-folder-nginx.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-300/10 via-slate-400/20 to-slate-500/10"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">Nginx</h3>
                  <p className="text-slate-600">Высокопроизводительный веб-сервер и прокси-сервер</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">Узнайте, что говорят о нас наши клиенты и партнеры</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    АК
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">Алексей К.</h4>
                    <p className="text-slate-600">CEO, AgroCor</p>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  "Отличная команда профессионалов. Сделали для нас современный сайт и автоматизировали бизнес-процессы. Рекомендую!"
                </p>
                <div className="mt-6 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <div className="card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    МС
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">Мария С.</h4>
                    <p className="text-slate-600">Директор, Weboptimize</p>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  "Внедрили AI-ассистента для обработки заказов. Эффективность работы выросла на 40%. Спасибо за профессионализм!"
                </p>
                <div className="mt-6 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <div className="card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    ДП
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">Дмитрий П.</h4>
                    <p className="text-slate-600">CTO, Andthebrand</p>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  "Разработали для нас Telegram-бота с интеграцией платежной системы. Работает отлично, поддержка на высоте!"
                </p>
                <div className="mt-6 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}