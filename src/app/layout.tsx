import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import Navbar from "@/components/layout/NavBar";
import FooterWrapper from "@/components/layout/FooterWrapper";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MHTechFusion | Embedded Systems, Hardware, Firmware & AI",
    template: "%s | MHTechFusion",
  },
  description:
    "MHTechFusion designs and builds connected products across embedded systems, PCB and hardware design, firmware, IoT, AI, and software.",
    icons: {
      icon: [{ url: '/logo.png', type: 'image/png' }],
      apple: '/logo.png'
    }
};

const themeScript = `(function(){var t;try{t=localStorage.getItem("theme")}catch(e){}if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-60 focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <FooterWrapper />
      </body>
    </html>
  );
}