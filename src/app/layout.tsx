import '@/app/globals.css'

import type { Metadata } from 'next'

import { Inter } from 'next/font/google'

import { Toaster } from '@/components/ui/toaster'
import AuthProvider from '@/components/providers/AuthProvider'
import ThemeProvider from '@/components/providers/ThemeProvider'
import TrpcQueryProvider from '@/components/providers/TrpcQueryProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Titan',
    description: 'Next generation CRM'
}

export default function RootLayout({
    children
} : {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <head />
            <body className={inter.className}>
                <AuthProvider>
                    <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
                        <TrpcQueryProvider>
                            {children}
                            <Toaster />
                        </TrpcQueryProvider>
                    </ThemeProvider>
                </AuthProvider>
            </body>
        </html>
    )
}