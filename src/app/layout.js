import { Inter } from "next/font/google";
import "./globals.css";
import "./globalicons.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PostModal from "@/components/postModal/PostModal";
import { Suspense } from "react";
import Loading from "./loading";
import "@smastrom/react-rating/style.css";
import { auth } from "@/lib/auth";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <div className="w-full min-h-screen flex flex-col justify-between bg-[#DEE2E6]">
          <Navbar session={session} />
          <PostModal />
          <Suspense fallback={<Loading />}>
            <div className="content-container">{children}</div>
          </Suspense>

          <Footer />
        </div>
      </body>
    </html>
  );
}
