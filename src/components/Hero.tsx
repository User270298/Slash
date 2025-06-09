"use client";

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              IT Слэш
            </h1>
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-4 text-white drop-shadow-lg">
              Превращаем ваши идеи в цифровую реальность
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-md italic">
            Создаем IT-решения, которые работают. Оптимальная стоимость, прозрачные сроки и гарантия на все разработки. Доверьте технологии профессионалам – экономьте время и ресурсы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacts" className="btn-primary text-lg px-8 py-3 font-semibold">
                Обсудить проект
              </Link>
              <Link href="/portfolio" className="btn-secondary text-lg px-8 py-3 font-semibold">
                Наши работы
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.01]">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage: "url('/title.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Enhanced Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-blue-400/30 to-blue-300/20"></div>
              {/* Additional subtle gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
} 