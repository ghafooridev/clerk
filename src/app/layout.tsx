import {
  ClerkProvider,
} from '@clerk/nextjs'
import './globals.css'
import Header from '@/components/Header'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider

      appearance={{
        elements: {
          headerTitle: {
            color: '#611BBD'
          },
          formButtonPrimary: {
            fontSize: 14,
            textTransform: 'none',
            backgroundColor: '#611BBD',
            '&:hover': {
              backgroundColor: '#49247A',
            },
          },
        },
      }}


    >
      <html lang="en">
        <body>
          <Header />
          <div className='flex w-full justify-center items-center mt-10'>
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}