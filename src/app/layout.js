import { Nunito } from "next/font/google";
import "./globals.css";
import "./globalicons.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PostModal from "@/components/postModal/PostModal";
import { Suspense } from "react";
import Loading from "./loading";
import "@smastrom/react-rating/style.css";
import { auth } from "@/lib/auth";

const nunito = Nunito({
  subsets: ["latin"], // Specify subsets for your locale
  weights: ["400", "600", "700"], // Add the weights you need
});

export const metadata = {
  title: {
    default: "VoyageVerse - Know where to go - Homepage",
    template: "%s | VoyageVerse App",
  },
  description: "Next.js Blog app description",
};

export default async function RootLayout({ children }) {
  const session = await auth();

  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/icon_white.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </head>
      <body className={nunito.className}>
        <div className="w-full min-h-screen flex flex-col justify-between bg-[#DEE2E6]">
          <Navbar session={session} />
          <PostModal />
          <Suspense fallback={<Loading />}>
            <div className="">{children}</div>
          </Suspense>

          <Footer />
        </div>
      </body>
    </html>
  );
}
