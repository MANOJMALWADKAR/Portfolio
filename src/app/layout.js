import Navbar from "@/components/Navbar";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";
import GlobalSnow from "@/components/GlobalSnow"; 

export const metadata = {
  title: "Manoj Malwadkar",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="cursor-none">
        <ClientWrapper>
          <GlobalSnow />   
          <Navbar />
          <main>{children}</main>
        </ClientWrapper>
      </body>
    </html>
  );
}
