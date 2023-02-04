import { AnalyticsWrapper } from "@/Components/Analytics/analytics";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import "@/styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="overflow-x-hidden scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-[#685753] selection:bg-stone-300/70"
    >
      <body className={`overflow-hidden`}>
        <header id="header" className="absolute z-20">
          <Header />
        </header>
        {children}
        <AnalyticsWrapper />
        <footer id="footer" className="bg-[#f3f1e9] pb-5 pt-16">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
