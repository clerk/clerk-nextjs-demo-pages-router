import { Discord, Docs, Github, Twitter } from "@/icons";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex items-center h-20 gap-1 px-8 font-medium border-t md:px-20">
      <Image
        src="/clerk.svg"
        alt="Clerk Logo"
        width={64}
        height={32}
        priority
      />
      <span className="text-sm">© 2023</span>
      <nav className="flex justify-end grow sm:gap-2">
        <a
          className="flex gap-2 px-3 py-2 text-sm font-semibold text-gray-600 transition duration-100 rounded-md hover:text-gray-800"
          href="https://clerk.com/docs?utm_source=vercel-template&utm_medium=template_repos&utm_campaign=nextjs_template"
        >
          <div className="m-auto">
            <Docs />
          </div>
          <span className="hidden sm:inline"> Visit Clerk Docs</span>
          <span className="inline sm:hidden"> Docs</span>
        </a>
        <a
          className="flex gap-2 px-3 py-2 text-sm font-semibold text-gray-600 transition duration-100 rounded-md hover:text-gray-800"
          href="https://github.com/devagrawal09/clerk-nextjs-template"
        >
          <div className="m-auto">
            <Github />
          </div>
          <span className="hidden sm:inline"> View on Github</span>
        </a>
        <a
          className="flex flex-col justify-center p-2 hover:underline"
          href="https://twitter.com/ClerkDev"
        >
          <Twitter />
        </a>
        <a
          className="flex flex-col justify-center p-2 hover:underline"
          href="https://discord.com/invite/b5rXHjAg7A"
        >
          <Discord />
        </a>
      </nav>
    </footer>
  );
}
