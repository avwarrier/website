import { Inter, Lexend, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "Abhimanyu Warrier",
  description: "Abhimanyu Warrier's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={poppins.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
