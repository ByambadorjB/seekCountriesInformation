import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Weather App",
  description: "Real-Time Weather Information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-full" >
          <header className="bg-blue-600 text-white py-5 text-center ">
            <h1 className="text-3xl font-bold">Weather App</h1>
          </header>
          {children}
          <footer className="bg-gray-800 text-white text-center py-5 mt-auto">
            <p>© 2024 Weather App. All rights reserved.</p>
          </footer>
        </div>
        
        
      </body>
    </html>
  );
}
