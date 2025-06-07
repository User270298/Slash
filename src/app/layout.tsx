import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slash - твой путь в мир автоматизации бизнеса",
  description: "Помощь бизнесу в айти решениях",
  icons: {
    icon: '/title.webp',
    apple: '/title.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}