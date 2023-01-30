import Art_of_cakes from "@/Components/Art of cakes/art_of_cakes";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero/Hero";
import "@/styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="overflow-x-hidden scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-[#685753] selection:bg-stone-300"
    >
      <body className={`overflow-hidden`}>
        <header id="header" className="absolute z-20">
          <Header />
        </header>

        {children}
      </body>
    </html>
  );
}
