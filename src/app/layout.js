import { Inter } from "next/font/google";
import "./globals.css";
import "./globalicons.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PostModal from "@/components/PostModal";
import { Suspense } from "react";
import Loading from "./loading";
// import { auth } from "@/lib/auth";

// const session = await auth();
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "VoyageVerse - Know where to go - Homepage",
    template: "%s | VoyageVerse App",
  },
  description: "Next.js Blog app description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div className="blur-overlay"></div>
          <Navbar />
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
