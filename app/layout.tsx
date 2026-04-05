import './globals.css'
import { Header } from './Header/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='font-serif' lang="en">
      <Header/>
      <body>{children}</body>
    </html>
  )
}