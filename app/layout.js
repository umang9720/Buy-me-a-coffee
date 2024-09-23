import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/file/Navbar";
import Footer from "@/app/file/Footer";
import SessionWrapper from "./file/SessionWrapper";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me a cofee",
  description: "A website for creators for raising funds",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
   <SessionWrapper> 
     <Navbar />
        <div className=" min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
          {children}
        </div>
        <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
