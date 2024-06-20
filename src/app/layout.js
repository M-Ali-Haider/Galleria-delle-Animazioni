import { Inter } from "next/font/google";
import "./globals.css";
import BurgerMenu from "@/components/BurgerMenu";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Animations Gallery",
  description: "A Gallery for coolest animations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gradient-to-b from-white to-black flex flex-col items-center justify-center">
          <BurgerMenu />
          {children}
        </div>
      </body>
    </html>
  );
}
