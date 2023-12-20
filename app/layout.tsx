import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/app/components/Sidebar'
import { getServerSession } from 'next-auth';
import SessionProvider  from './components/SessionProvider';
import Header from '@/app/components/Header'
import BottomBar from '@/app/components/Player/BottomBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify - Lecteur web',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession();
  return (
    <html lang="fr">
      <body suppressHydrationWarning={true} className={inter.className}>
        <SessionProvider session={session}>
          <div className='flex flex-col space-y-2 p-2 h-screen'>
            <div className='flex flex-grow space-x-2 h-96'>
              <Sidebar />
              <div className='flex flex-grow flex-col rounded-lg bg-[#121212] overflow-y-auto scrollbar scrollbar-thumb-neutral-600 hover:scrollbar-thumb-neutral-500'> 
                <Header />
                {children}
              </div>
            </div>
            <BottomBar />
          </div>
        </SessionProvider>
        </body>
    </html>
  )
}
