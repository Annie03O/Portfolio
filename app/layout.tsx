import { Header } from "./components/Header/Header";
import Footer from "./components/ui/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="font-serif">
      <body >
        <Header />
        <main className="min-h-[1000px] pt-6" >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}