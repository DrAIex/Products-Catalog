import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistry from '@/components/ThemeRegistry';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Каталог товаров",
  description: "Каталог товаров с фильтрацией и корзиной",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
} 