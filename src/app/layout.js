import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from "@/components/navbar/Navbar";
import styles from "./homepage.module.css";
import { Footer } from "@/components/footer/Footer";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cole\'s Reads',
  description: 'One person\'s thoughts on books',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container"> 
          <div className="wrapper">
            <Navbar/>
              {children}
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  )
}
