import type { Metadata } from "next";
import { DM_Sans } from "next/font/google"; // Impor font yang dioptimalkan
import "./globals.css";


// Konfigurasi font


const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // choose weights you need
});

export const metadata: Metadata = {
  title: "Portofolio Ariq",
  description: "Biomedical Engineering Student & IC Design Enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      {/* Terapkan variabel font dan kelas dasar ke body */}
      <body className={`${dmSans.className} text-text-color`}>

        {children}
    
      </body>
    </html>
  );
}