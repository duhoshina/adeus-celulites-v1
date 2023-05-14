import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Adios Celulites en 21 dias - Oficial',
  description: 'Programa oficial do adios celulites en 21 dias.',
}

const listNav = [
  { href: '/politica-de-privacidade', content: 'politica de privacidade' },
  { href: '/politica-de-cookies', content: 'politica de cookies' },
  { href: '/termos-de-uso', content: 'termos de uso' },
];

export default function RootLayout({children,}:{children: React.ReactNode}) {

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        
        {children}
      
        <footer className='z-10 bottom-0 flex flex-col w-screen h-auto bg-slate-200 gap-4 py-10'>
          <nav>
            <ul className='flex justify-center items-center text-center text-xs gap-2 capitalize'>
              {listNav.map((item, index) => (
                <li key={index}><Link href={item.href}>{item.content}</Link></li>
              ))}
            </ul>
          </nav>
          <h3 className='text-center'>Copyright 2023, Adeus Celulites Oficial</h3>
        </footer>

      </body>
    </html>
  )
}
