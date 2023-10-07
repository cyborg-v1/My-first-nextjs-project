import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Sitio con next.js",
  description: "app web SSR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <NavBar />
    <main className="container mx-auto h-[calc(100vh - 7rem)] flex justify-center items-center">
    {children}

    </main>
      </body>
    </html>
  );
}
