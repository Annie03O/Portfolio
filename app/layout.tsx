 import './globals.css'
 import { Header } from './Header/Header'
 
 export default function RootLayout({
   children,
 }: {
   children: React.ReactNode
 }) {
   return (
     <html lang="en" className="font-serif">
     <body>
       <Header />
       {children}
     </body>
   </html>)
 }