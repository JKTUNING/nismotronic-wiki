import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { AppSidebar } from '@/components/app-sidebar'
import './globals.css'
import { Montserrat } from 'next/font/google'
import favicon from '@public/favicon.webp'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700']
})

export const metadata = {
  title: 'Nismotronic Wiki',
  description: 'Nismotronic Wiki',
  icons: {
    icon: favicon.src
  }
}

export default function Layout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${montserrat.variable} font-montserrat`}>
        <ThemeProvider>
          <SidebarProvider>
            <AppSidebar />
            <main className='flex-1'>
              <SidebarTrigger />
              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
