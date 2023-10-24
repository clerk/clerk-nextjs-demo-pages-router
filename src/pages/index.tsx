import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} min-h-screen flex flex-col`}>
      <Header />
      <Main />
      <Footer />
    </main>
  );
}
