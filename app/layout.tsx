import './globals.css'
import { Header } from './Header/Header'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
 
 config.autoAddCss = false
 
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